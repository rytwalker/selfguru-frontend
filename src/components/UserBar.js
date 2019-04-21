import React from 'react';
import styled from 'styled-components';

const UserBar = () => {
  return (
    <StyledUserBar>
      <User>
        <Avatar>U</Avatar>rytwalker
      </User>
    </StyledUserBar>
  );
};

const StyledUserBar = styled.div`
  background: #bab9b4;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const User = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`;
export default UserBar;
