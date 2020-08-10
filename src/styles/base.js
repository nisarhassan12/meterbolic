import { Global, css } from '@emotion/core';

import React from 'react';
import { breakpoints } from './variables';

const BaseStyles = () => (
  <Global
    styles={css`
      /* ---------------------------------- */
      /* ----- Variables ----- */
      /* ---------------------------------- */

      :root {
        --font-size-default: 2rem;
        --font-size-huge: 7rem;

        --font-family: 'Jost', sans-serif;

        --grid-max-width: 1140px;

        --gutter-huge: 10rem;
        --gutter-medium: 5rem;
        --gutter-normal: 3rem;

        --offWhite: #eee;
        --offWhite1: #f8f8f8;
        --white: #fff;
        --black-1: #444;
        --primary-green: #5fcf80;

        --border-light: 1px solid #eee;
      }

      /* ---------------------------------- */
      /* ----- Basic Setup ----- */
      /* ---------------------------------- */

      *,
      *::after,
      *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
      }

      html {
        font-size: 60.25%;

        @media (max-width: ${breakpoints.medium}) {
          font-size: 55.5%;
        }

        @media (max-width: ${breakpoints.small}) {
          font-size: 50%;
        }
      }

      body {
        box-sizing: border-box;
        color: var(--black-1);
        font-size: var(--font-size-default);
        font-family: var(--font-family);
        font-weight: 300;
        background: var(--offWhite1);
      }

      .row {
        max-width: var(--grid-max-width);
        margin: 0 auto;
        width: 95%;
      }

      section {
        padding: var(--gutter-huge);
      }

      /* ---------------------------------- */
      /* ----- Headlines & Paragraphs ----- */
      /* ---------------------------------- */

      h1,
      h2,
      h3 {
        font-weight: 300;
      }

      h1 {
        font-size: var(--font-size-huge);
      }

      /* ---------------------------------- */
      /* ----- Buttons & Links ----- */
      /* ---------------------------------- */

      a {
        cursor: pointer;
      }

      .btn {
        display: inline-block;
        text-decoration: none;
        border: 1px solid;
        padding: 0.8rem 3.2rem;
        border-radius: 100px;
        color: var(--black-1);
        font-weight: 400;

        &--primary {
          color: var(--white);
          background: var(--primary-green);
          border-color: var(--primary-green);
        }
      }
    `}
  />
);

export default BaseStyles;
