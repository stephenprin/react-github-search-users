import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import loginImg from '../images/login-img.svg';
import login from '../images/login.svg';
const Login = () => {
  return (
    <div className='min-h-screen text-center w-screen flex flex-col justify-center items-center bg-gradient-to-l from-gray-900 to-slate-900 text-center '>
      <img src={login} alt='github user' className='w-34 h-32' />
      <h1 className='text-[1.5rem] mb-4 mt-2'>GitHub user</h1>
      <button className='p-3 font-medium text-rose-100 border-none rounded-lg bg-gradient-to-l from-pink-700 to-pink-600 hover:from-pink-700 hover:to-blue-500' >Login / Sign Up</button>
    </div>
  )
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;
export default Login;
