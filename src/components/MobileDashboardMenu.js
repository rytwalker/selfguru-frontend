import React from 'react';
import styled from 'styled-components';

const MobileDashboardMenu = () => {
  return (
    <StyledMenu>
      <MenuButton>M</MenuButton>
      <MenuButton>P</MenuButton>
    </StyledMenu>
  );
};

const StyledMenu = styled.div`
  position: fixed;
  bottom: 0;
  background: #efefef;
  width: 100%;
  display: flex;
`;

const MenuButton = styled.button`
  width: 100%;
  border: none;
  cursor: pointer;
  padding: 2rem;
  background: #efefef;
  font-size: inherit;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: #ccc;
  }
`;
export default MobileDashboardMenu;
