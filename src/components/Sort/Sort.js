import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 0 0 20px 0;
`;

const Item = styled.div`
  width: ${(props) => props.width || '80px'};
  height: 40px;
  font-size: 19px;
  font-weight: 500;
  line-height: 40px;
  text-align: center;
  border-radius: 60px;
  background-color: #b0bfff;
  color: #6a6a6a;
  cursor: pointer;
`;

const Sort = ({ items, selectedItems, onItemClick, width }) => {
  const isItemSelected = (item) => selectedItems.includes(item);

  return (
    <Container>
      {items.map((item, index) => (
        <Item
          key={index}
          onClick={() => onItemClick(item)}
          style={{
            backgroundColor: isItemSelected(item) ? '#4c67db' : '#b0bfff',
            color: isItemSelected(item) ? '#fff' : '#6a6a6a',
            width: width,
          }}
        >
          {item}
        </Item>
      ))}
    </Container>
  );
};

export default Sort;
