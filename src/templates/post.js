import { Link, graphql } from 'gatsby';

import Author from '../components/author';
import Layout from '../layouts/index';
import React from 'react';
import { authors } from '../data/authors';
import { breakpoints } from '../styles/variables';
import styled from '@emotion/styled';

const StyledPostTemplate = styled.div`
  max-width: var(--textContainerNormal);
  padding: var(--gutter-normal) 0;
  margin: var(--gutter-medium) auto;
  background: var(--white);
  border: var(--border-light);

  .container {
    padding-left: var(--gutter-normal);
    padding-right: var(--gutter-normal);
  }

  .date {
    margin-bottom: var(--gutter-small);
  }

  .teaser {
    height: 40rem;
    background-size: cover;
    background-position: center;
    border-top:  var(--border-light);
    border-bottom:  var(--border-light);
    margin-bottom: var(--gutter-small);

    @media (max-width: ${breakpoints.medium}) {
      height: 35rem;
    }
  }

  h2 {
    margin: var(--gutter-medium) 0 var(--gutter-small);
  }

  ul, 
  ol {
    margin: var(--gutter-normal) 0;
  }

  li + li {
    margin-top: var(--gutter-small);
  }

  img {
    max-width: 100%;
    margin-bottom: var(--gutter-small);
  }
`;

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        teaser
        author
      }
      excerpt
      html
    }
  }
`;

const PostTemplate = ({ data }) => {
  const title = data.markdownRemark.frontmatter.title;
  const teaser = data.markdownRemark.frontmatter.teaser;
  const date = data.markdownRemark.frontmatter.date;
  const author = data.markdownRemark.frontmatter.author;

  return (
    <Layout>
      <div className="row">
        <StyledPostTemplate>
          <div className="container">
            <h1>{title}</h1>
          </div>
          {teaser ? (
            <div
              className="teaser"
              style={teaser ?  { backgroundImage: `url(/${teaser})` } : null}
            />
          ) : null}
          <div className="container">
            <div
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />

            {authors[author] ? <Author {...authors[author]} date={date}/> : null}

            <Link className="back" to="/">
              Go Back &nbsp;&rarr;
            </Link>
          </div>
        </StyledPostTemplate>
      </div>
    </Layout>
  );
};

export default PostTemplate;
