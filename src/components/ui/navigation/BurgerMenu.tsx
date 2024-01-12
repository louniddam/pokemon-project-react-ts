import React from 'react';
import styled from 'styled-components';
import Sidebar from './SideBar';
import { navBarlinks } from '../../../utils/navBarLinks';
import EeveeBurgerIcon from '../../../assets/picto/eeveeBurgerMenu.jpg';


interface BurgerMenuProps {}

interface BurgerIconProps {
  open: boolean;
}

const BurgerMenuContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

const BurgerIcon = styled.div<BurgerIconProps>`
  width: 3em;
  height: 3em;
  cursor: pointer;
  transition: 0.4s;
   background: url(${EeveeBurgerIcon}) center/cover no-repeat;

  &:hover {
    opacity: 0.8;
  }

  ${(props) => props.open && `transform: rotate(-45deg) translate(-5px, 6px);`}
`;

const BurgerMenu: React.FC<BurgerMenuProps> = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BurgerMenuContainer onClick={toggleMenu}>
        <BurgerIcon open={isOpen} className="burger-icon" />
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} links={navBarlinks} />
    </BurgerMenuContainer>
  );
};

export default BurgerMenu;