import BaseStyles from '../styles/base';
import React from 'react';
import styled from '@emotion/styled';

const StyledRootLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const RootLayout = ({ children }) => (
  <StyledRootLayout>
    <BaseStyles />
    {children}
  </StyledRootLayout>
);

export default RootLayout;
