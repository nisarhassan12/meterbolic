import Layout from '../layouts/index';
import React from 'react';
import { breakpoints } from '../styles/variables';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

const StyledPostTemplate = styled.div`
  max-width: var(--textContainerNormal);
  padding: var(--gutter-normal) 0;
  margin: var(--gutter-medium) auto;
  background: var(--white);
  border: var(--border-light);

  .container {
    padding-left: var(--gutter-small);
  }

  .date {
    margin-bottom: var(--gutter-small);
  }

  .teaser {
    height: 40rem;
    background-size: cover;
    background-position: center;
    margin-bottom: var(--gutter-small);

    @media (max-width: ${breakpoints.medium}) {
      height: 35rem;
    }
  }

  h2 {
    margin: var(--gutter-medium) 0 var(--gutter-small);
  }

  p + p {
    margin-top: var(--gutter-small);
  }

  ul {
    margin: var(--gutter-small) 0;
  }

  li + li {
    margin-top: var(--gutter-small-3);
  }
`;

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        teaser
      }
      excerpt
      html
    }
  }
`;

const PostTemplate = ({ data }) => {
  const title = data.markdownRemark.frontmatter.title;
  const teaser = data.markdownRemark.frontmatter.teaser;
  return (
    <Layout>
      <div className="row">
        <StyledPostTemplate>
          <div className="container">
            <h1>{title}</h1>
            <div className="date">{data.markdownRemark.frontmatter.date}</div>
          </div>
          {teaser ? (
            <div
              className="teaser"
              style={{ backgroundImage: `url(/${teaser})` }}
            />
          ) : null}
          <div className="container">
            <div
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
          </div>
        </StyledPostTemplate>
      </div>
    </Layout>
  );
};

export default PostTemplate;
