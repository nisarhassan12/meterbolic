import React from 'react';
import styled from '@emotion/styled';

const StyledLayoutMain = styled.main`
  flex: 1;
  min-height: 50vh;
`;

const LayoutMain = ({ children }) => (
  <StyledLayoutMain role="main">{children}</StyledLayoutMain>
);

export default LayoutMain;
