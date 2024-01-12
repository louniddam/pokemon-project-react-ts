import React, { useEffect } from 'react';
import styled from 'styled-components';

interface SidebarProps {
  isOpen: boolean;
  toggleMenu: () => void;
  links: { id: number; route: string; label: string }[];
}

const SidebarContainer = styled.div<{ isOpen: boolean }>`
  width: 250px;
  height: 100%;
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? '0' : '-250px')};
  background-color: #FFFFFF;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease-in-out;
  z-index: 999;
`;

const SidebarOverlay = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 20px;
`;

const SidebarListItem = styled.li`
  margin-bottom: 15px;
`;

const SidebarLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 16px;
`;

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleMenu, links }) => {
  useEffect(() => {
    const closeMenuOnOutsideClick = (event: MouseEvent) => {
      if (isOpen && event.target instanceof Node) {
        const clickedElement = event.target as HTMLElement;

        // Check if the clicked element is the burger icon or part of the sidebar
        if (
          !clickedElement.closest('.sidebar') &&
          !clickedElement.closest('.burger-icon')
        ) {
          toggleMenu();
        }
      }
    };

    document.addEventListener('click', closeMenuOnOutsideClick);

    return () => {
      document.removeEventListener('click', closeMenuOnOutsideClick);
    };
  }, [isOpen, toggleMenu]);

  return (
    <>
      <SidebarContainer isOpen={isOpen} className="sidebar">
        <SidebarList>
          {links.map((link) => (
            <SidebarListItem key={link.id}>
              <SidebarLink href={link.route} onClick={toggleMenu}>
                {link.label}
              </SidebarLink>
            </SidebarListItem>
          ))}
        </SidebarList>
      </SidebarContainer>
      <SidebarOverlay isOpen={isOpen} />
    </>
  );
};

export default Sidebar;