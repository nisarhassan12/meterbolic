import Logo from '../resources/logo.svg';

import React from 'react';
import { breakpoints } from '../styles/variables';
import styled from '@emotion/styled';

const StyledNav = styled.div`
  background: var(--white);
  padding: var(--gutter-normal) 0;
  border-bottom: var(--border-light);

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    height: 4rem;

    @media (max-width: ${breakpoints.medium}) {
      height: 3.5rem;
    }

    @media (max-width: ${breakpoints.small}) {
      height: 3rem;
    }
  }
`;

const Nav = () => (
  <StyledNav>
    <div className="row">
      <nav role="navigation">
        <a href="https://meterbolic.org/">
          <img src={Logo} className="logo" alt="Meterbolic" />
        </a>
        <a href="https://meterbolic.org/" className="btn btn--primary">
              Join Meterbolic!
        </a>
      </nav>
    </div>
  </StyledNav>
);

export default Nav;
