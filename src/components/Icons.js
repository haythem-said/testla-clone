import styled from 'styled-components';

const MenuIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const MenuIconBar = styled.div`
  width: 20px;
  height: 2px;
  background-color: #333;
  margin: 2px 0;
  transition: all 0.2s ease-in-out;

  &:nth-child(1) {
    transform: ${({ isOpen }) =>
      isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'};
  }

  &:nth-child(2) {
    transform: ${({ isOpen }) => (isOpen ? 'scale(0)' : 'none')};
  }

  &:nth-child(3) {
    transform: ${({ isOpen }) =>
      isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'};
  }
`;

const MenuIcon = ({ isOpen, onClick }) => {
  return (
    <MenuIconWrapper onClick={onClick}>
      <MenuIconBar isOpen={isOpen} />
      <MenuIconBar isOpen={isOpen} />
      <MenuIconBar isOpen={isOpen} />
    </MenuIconWrapper>
  );
};

export default MenuIcon;
