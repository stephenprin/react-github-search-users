import React from 'react';
import {useGlobalContext } from '../context/context';
import styled from 'styled-components';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
const Card = () => {

  const { githubUser } = useGlobalContext();
  const { avatar_url, html_url, name, company, blog, bio, location, twitter_username } = githubUser;
  return <Wrapper className=' rounded-tr-lg rounded-bl-lg rounded-br-lg pt-[2.5rem] px-[2rem] relative bg-gradient-to-r from-black to-gray-900'>
    <header>
      <img src={avatar_url} alt={name} className='w-12 h-12 rounded-full' />
      <div className='flex flex-col'>
        <h4 className='mb-[0.25rem] text-slate-100 '>{name}</h4>
        <p className='text-slate-600 text-[0.8rem]'>@{twitter_username || 'Priestly427'}</p>
       
      </div>
      <a href={html_url}>Follow</a>
    </header>
  </Wrapper>;
};
const Wrapper = styled.article`
  
  position: relative;
  &::before {
    content: 'user';
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
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
  header {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 1.2rem;
    margin-bottom: 1.5rem;
    a {
      display: flex;
      align-items: center;
      color: rgb(6 182 212);
      border: 1px solid rgb(6 182 212);
      padding:0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: rgb(6 182 212);
        color: white;
      }
    }
  }
  .bio {
    color: var(--clr-grey-3);
  }
  .links {
    p,
    a {
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    a {
      color: var(--clr-primary-5);
      transition: var(--transition);
      svg {
        color: var(--clr-grey-5);
      }
      &:hover {
        color: var(--clr-primary-3);
      }
    }
  }
`;
export default Card;
