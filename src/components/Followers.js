import React from 'react';
import {  useGlobalContext } from '../context/context';
import styled from 'styled-components';

const Followers = () => {
  const { followers } = useGlobalContext()
  

  return (
    <Wrapper className='  rounded-tr-lg rounded-bl-lg rounded-br-lg pt-[2.5rem] px-[2rem] relative bg-gradient-to-r from-black to-gray-900'>
      <div className='followers'>
        {followers.map((follower, index) => {
          const { avatar_url: img, html_url, login } = follower;
          return (
            <article key={index}>
              <img src={img} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url }>view profile</a>
              </div>
              </article>
              )
         })}
      </div>
    </Wrapper>
  )
};

const Wrapper = styled.article`
  

  &::before {
    content: 'followers';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: black;
    color: rgb(241 245 249);
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: 0.15rem;
    font-size: 1rem;
  }
  .followers {
    overflow: scroll;
    height: 260px;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
    gap: 1.25rem 1rem;
    padding: 1rem 2rem;
  }
  article {
    transition: var(--transition);
    padding: 0.15rem 0.5rem;
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 1rem;
    img {
      height: 100%;
      width: 45px;
      border-radius: 50%;
      object-fit: cover;
    }
    h4 {
      margin-bottom: 0;
    }
    a {
      color:  rgb(34 211 238);
      font-size: 0.66rem;
    }
  }
`;
export default Followers;
