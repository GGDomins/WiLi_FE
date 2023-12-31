import { useReducer, useEffect } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        response: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        response: action.data,
        error: null,
      };
    case 'ERROR':
      return {
        loading: false,
        response: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const useAsync = (callback, deps = []) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    response: null,
    error: false,
  });

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const data = await callback();
      dispatch({ type: 'SUCCESS', data });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  };

  useEffect(() => {
    fetchData();
  }, deps);

  return [state, fetchData];
};

export default useAsync;
