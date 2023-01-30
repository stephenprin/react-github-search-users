import React from 'react';
import { GoRepoPush } from 'react-icons/go';
import styled from 'styled-components';
import {useGlobalContext } from '../context/context';
import {Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';



const Repos = () => {
  const { repos } = useGlobalContext();
  const languages=repos.reduce((total, item) => { 
    const { language, stargazers_count  } = item;
    if (!language) return total;
    if (!total[language]) { 
      total[language]={ label: language, value: 1, stars: stargazers_count}
    } else {
      total[language] = { ...total[language], value: total[language].value + 1, stars:total[language].stars + stargazers_count } 
    }
    return total;
 
  }, {});
  console.log(languages);
  const mostUsed = Object.values(languages).sort((a, b) => { 
    return b.value - a.value;
  }).slice(0, 5).reverse();

  const mostPopular = Object.values(languages).sort((a, b) => {
    return b.stars - a.stars;
  }).map((item) => { 
    return { ...item, value: item.stars }
  } ).slice(0, 5);

  return (
    <section className='section'>
      <Wrapper className='section-center bg-gradient-to-r from-black to-gray-900'>
        <Pie3D data={mostUsed} />
        <Column3D data={mostPopular} />
        <Doughnut2D  data={mostPopular} />
        <div></div>
      </Wrapper>
   </section>
  )
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  
  }
  .fusioncharts-container {
    width: 100% !important;
   
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  } 
`;

export default Repos;
