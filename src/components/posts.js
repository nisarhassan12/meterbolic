import React from 'react';
import styled from '@emotion/styled';

const StyledPosts = styled.section`
  padding: var(--gutter-medium) 0;
`;

const Posts = () => (
  <StyledPosts>
    <div className="row">
      <h1>Blog</h1>
    </div>
  </StyledPosts>
);

export default Posts;
