import Layout from '../layouts';
import Posts from '../components/posts';
import React from 'react';
import { graphql } from 'gatsby';

export const IndexPageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        frontmatter {
          title
          date
          teaser
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes
    .map((post) => ({
      id: post.id,
      slug: post.fields.slug,
      title: post.frontmatter.title,
      date: new Date(post.frontmatter.date),
      teaser: post.frontmatter.teaser,
      excerpt: post.excerpt,
    }))
    .sort((a, b) => b.date - a.date);
  return (
    <Layout>
      <Posts posts={posts} />
    </Layout>
  );
};

export default IndexPage;
