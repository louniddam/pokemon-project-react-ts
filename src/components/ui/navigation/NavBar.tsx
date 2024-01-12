import React, { useState } from 'react';
import styled from 'styled-components';
import ArticunoImg from '../../../assets/logo/logoWhiteArticuno.png';
import { SplitScreen } from '../../layouts/screens/SplitScreen';
import BurgerMenu from "./BurgerMenu";
import { navBarlinks } from '../../../utils/navBarLinks';

interface LinkLogoProps {
  src: string;
  hovered: boolean;
}

const NavbarContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  padding: 15px;
  min-height: 95px;
  border: 1px solid #EDEDED;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.img`
  height: 100%;
  width: auto;
  max-width: 150px;
`;

Logo.defaultProps = {
  src: ArticunoImg,
};

const NavList = styled.ul`
  margin: 0 10px;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavListItems = styled.li`
   display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  flex-direction: row; 
`;

const NavLinks = styled.a`
  color: ${(props) => props.theme.colors.secondary};
  margin: 0 10px;
  text-decoration: none;
  display: inline-block;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const LinkLogo = styled.img<LinkLogoProps>`
  height: 100%;
  width: auto;
  max-width: 40px;
  display: ${(props) => (props.hovered ? 'initial' : 'none')};
`;

const BurgerMenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;

const Navbar: React.FC = () => {
  const [hoveredLinks, setHoveredLinks] = useState<number[]>(Array(navBarlinks.length).fill(null));

  const handleLinkHover = (index: number) => {
    const newHoveredLinks = [...hoveredLinks];
    newHoveredLinks[index] = Math.floor(Math.random() * 399) + 1;
    setHoveredLinks(newHoveredLinks);
  };

  const handleLinkLeave = (index: number) => {
    const newHoveredLinks = [...hoveredLinks];
    setHoveredLinks(newHoveredLinks);
  };

  return (
    <NavbarContainer>
      <SplitScreen
        left={<Logo />}
        leftWeight={0}
        rightWeight={4}
        right={
          <>
            <NavList>
              {navBarlinks.map((link, index) => (
                <NavListItems key={link.id}>
                  <NavLinks
                    href={link.route}
                    onMouseOver={() => handleLinkHover(index)}
                    onMouseOut={() => handleLinkLeave(index)}
                    >
                    {link.label}
                  </NavLinks>
                    {
                    hoveredLinks[index] !== null 
                      &&
                    <LinkLogo
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${hoveredLinks[index] || 0}.gif`}
                    hovered={hoveredLinks[index] !== null}
                    />
                    }
                </NavListItems>
              ))}
            </NavList>
            <BurgerMenuContainer>
              <BurgerMenu />
            </BurgerMenuContainer>
          </>
        }
      />
    </NavbarContainer>
  );
};

export default Navbar;