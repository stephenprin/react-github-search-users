import React from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { useGlobalContext } from '../context/context';
const Search = () => {
  const [user, setUser] = React.useState('');
  const { requests ,error, searchGithubUser,isLoading} = useGlobalContext()
 
  
  const handleSubmit = (e) => { 
    e.preventDefault();
    if (user) {
      searchGithubUser(user)
    }
    setUser('');
  };
  return <section className='section'>
    <Wrapper className='section-center'>
      {error.show && < ErrorWrapper className='error'>
        <p className='text-rose-400 tracking-wide text-[0.8rem]'>{error.msg}</p>
      </ErrorWrapper>}
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <MdSearch className='text-white'/>
          <input type='text' placeholder='Enter github user' value={user} onChange={(e) => setUser(e.target.value)} />
          {requests > 0 && !isLoading && <button type='submit'>Search</button>}
         
        </div>
      </form>
      <h3 className='text-lg'>requests: { requests}/60</h3>
    </Wrapper>

  </section>
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 1rem 1.75rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
    align-items: center;
    h3 {
      padding: 0 0.5rem;
    }
  }
  .form-control {
    background:transparent;
    border: 1px solid rgb(21 94 117);;
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    border-radius: 5px;
    padding: 0.5rem;
    input {
      background-color: transparent;
      outline: none;
      letter-spacing: var(--spacing);
      color: rgb(186 230 253);
      padding: 0.25rem 0.5rem;
    }
    input::placeholder {
      color: rgb(21 94 117);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
    }
    button {
      border-radius: 5px;
      border-color: transparent;
      padding: 0.35rem 0.5rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      background: rgb(45 212 191);
      color: var(--clr-white);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: rgb(13 148 136);
        color: var(--clr-primary-1);
      }
    }

    svg {
      color: var(--clr-grey-5);
    }
    input,
    button,
    svg {
      font-size: 1.3rem;
    }
    @media (max-width: 800px) {
      button,
      input,
      svg {
        font-size: 0.85rem;
      }
    }
  }
  h3 {
    margin-bottom: 0;
    color: var(--clr-grey-5);
    font-weight: 400;
  }
`;
const ErrorWrapper = styled.article`
  position: absolute;
  width: 90vw;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  text-transform: capitalize;
  
`;
export default Search;
