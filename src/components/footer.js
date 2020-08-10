import React from 'react';
import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  text-align: center;
  padding: var(--gutter-medium) 0;
  background: var(--white);
  border-top: var(--border-light);
`;

const Footer = () => (
  <StyledFooter>
    <div className="row">
      <p>
        &copy; {new Date().getFullYear()}{' '}
        <a href="https://meterbolic.org/" target="_blank" rel="noopener">
          Meterbolic.
        </a>
      </p>
    </div>
  </StyledFooter>
);

export default Footer;
