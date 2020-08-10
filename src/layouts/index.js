import { StaticQuery, graphql } from 'gatsby';

import Footer from '../components/footer';
import { Helmet } from 'react-helmet';
import LayoutMain from './main-layout';
import Nav from '../components/nav';
import React from 'react';
import RootLayout from './root-layout';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <RootLayout>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Nav />
        <LayoutMain>{children}</LayoutMain>
        <Footer />
      </RootLayout>
    )}
  />
);

export default Layout;
