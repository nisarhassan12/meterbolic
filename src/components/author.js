import React from 'react'
import styled from '@emotion/styled'

const StyledAuthor = styled.div`
    margin-top: var(--gutter-medium);
    display: flex;
    align-items: center;
    border: var(--border-light);
    max-width: 48rem;

    img {
        display: block;
        height: 25rem;
        margin-bottom: 0 !important;
    }

    .text { 
        margin-left: var(--gutter-small);
    }

`

const Author = ({ image, name, date }) => (
    <StyledAuthor>
        <img src={`/${image}`} alt={name}/>
        <div className="text">
            <strong>Author</strong>
            <h3>{name}</h3>
            <div className="date">
              {new Date(date).toLocaleDateString('en-GB', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
        </div>
    </StyledAuthor>    
)

export default Author
