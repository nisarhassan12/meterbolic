import Post from './post';
import React from 'react';
import styled from '@emotion/styled';

const StyledPosts = styled.section`
  padding: var(--gutter-medium) 0;
`;

const Posts = ({ posts }) => (
  <StyledPosts>
    <div className="row">
      <h1></h1>
      <div className="posts">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  </StyledPosts>
);

export default Posts;
