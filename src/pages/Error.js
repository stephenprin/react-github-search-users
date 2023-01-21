import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-zinc-900 to-slate-900 text-center '>
      <h1 className='text-rose-300 text-[8rem]'>404</h1>
      <h3 className='text-rose-100 mb-[4rem]'>Sorry, the page you tried cannot be found</h3>
      <Link to='/' className='p-3 font-medium text-rose-100 border-none rounded-lg bg-gradient-to-r from-sky-700 to-sky-400 hover:from-sky-700 hover:to-blue-500' >Back Home</Link>
    </div>
  )
};





// const Wrapper = styled.section`
//   min-height: 100vh;
//   display: grid;
//   place-items: center;
//   background: var(--clr-primary-10);
//   text-align: center;
//   h1 {
//     font-size: 10rem;
//   }
//   h3 {
//     color: var(--clr-grey-3);
//     margin-bottom: 1.5rem;
//   }
// `;
export default Error;
