import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Followers from './Followers';
const User = () => {
 
  return <section className='section'>
    <Wrapper className='section-center gap-y-[3rem] gap-x-[2rem] grid pt-9 md:grid-cols-2'>
      <Card />
      <Followers />
      
    </Wrapper>

    </section>
};

const Wrapper = styled.div`
 
  /* @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  } */
  /* align-items: start; */
`;

export default User;
