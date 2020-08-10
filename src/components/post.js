import { Link } from 'gatsby';
import React from 'react';
import TeaserPlaceHolder from '../resources/teaser-palceholder.jpg';
import styled from '@emotion/styled';

const StyledPost = styled(Link)`
  display: flex;
  background: var(--white);
  border: var(--border-light);
  max-width: var(--textContainerNormal);
  text-decoration: none;
  color: inherit;

  @media (max-width: 780px) {
    flex-direction: column;
  }

  .img {
    min-height: 25rem;
    flex: 0 0 35%;
    background-size: cover;
    background-position: center;
  }

  .text {
    padding: var(--gutter-normal);
  }

  .date {
    margin-bottom: var(--gutter-small-2);
  }

  .excerpt {
    margin-bottom: var(--gutter-small);
  }

  &:not(:last-of-type) {
    margin-bottom: var(--gutter-normal);
  }
`;

const Post = ({ title, date, excerpt, teaser, slug }) => (
  <StyledPost to={`/blog/${slug}`}>
    <div
      className="img"
      style={{ backgroundImage: `url(${teaser ? teaser : TeaserPlaceHolder})` }}
    ></div>
    <div className="text">
      <h3>{title}</h3>
      <p className="date">
        {new Date(date).toLocaleDateString('en-GB', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
      <p className="excerpt">{excerpt}</p>
      <Link to={`/blog/${slug}`} className="btn btn--primary">
        Read More <span>&nbsp;&rarr;</span>
      </Link>
    </div>
  </StyledPost>
);

export default Post;
