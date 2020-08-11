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
        --font-size-medium: 3rem;
        --font-size-huge: 7rem;

        --font-family: 'Jost', sans-serif;

        --grid-max-width: 1140px;

        --gutter-huge: 10rem;
        --gutter-medium: 5rem;
        --gutter-normal: 3rem;
        --gutter-small: 2rem;
        --gutter-small-1: 1.5rem;
        --gutter-small-2: 1rem;
        --gutter-small-3: 0.8rem;

        --textContainerNormal: 840px;

        --offWhite: #eee;
        --offWhite1: #f8f8f8;
        --white: #fff;
        --black-1: #444;
        --primary-green: #4ec274;

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
        line-height: 1.5;
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
        line-height: 1.1;
      }

      h1 {
        font-size: var(--font-size-huge);
        margin-bottom: var(--gutter-normal);
      }

      h3 {
        font-size: var(--font-size-medium);
        margin-bottom: var(--gutter-small);
      }

      /* ---------------------------------- */
      /* ----- Buttons & Links ----- */
      /* ---------------------------------- */

      a {
        cursor: pointer;
        color: #0097f7;
        transition: all 0.2s;

        &::hover,
        &:focus {
          color: #0172f7;
        }
      }

      .btn {
        display: inline-block;
        text-decoration: none;
        border: 1px solid;
        padding: 0.7rem 2.5rem;
        border-radius: 100px;
        color: var(--black-1);
        font-weight: 400;

        &--primary {
          color: var(--white);
          background: var(--primary-green);
          border-color: var(--primary-green);
        }
      }

      /* ---------------------------------- */
      /* ----- Lists ----- */
      /* ---------------------------------- */

      ul {
        list-style-position: inside;
      }
    `}
  />
);

export default BaseStyles;
