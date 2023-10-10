import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 20px 0 20px 0;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
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

  @media (max-width: 768px) {
    width: 60px;
    height: 30px;
    font-size: 16px;
    line-height: 30px;
    justify-self: center;
  }
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
