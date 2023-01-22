import React from 'react';
import { useGlobalContext } from '../context/context';
import styled from 'styled-components';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';

const UserInfo = () => {
  const { githubUser } = useGlobalContext(); 
  const { public_repos, followers, following, public_gists } = githubUser;
  const items = [
    { id: 1, icon: <GoRepo  />, label: 'repos', value: public_repos, color: 'pink' },
    { id: 2, icon: <FiUsers />, label: 'followers', value: followers, color: 'green' },
    { id: 3, icon: <FiUserPlus />, label: 'following', value: following, color: 'purple' },
    { id: 4, icon: <GoGist/>, label: 'gists', value: public_gists, color: 'yellow' },
  ]
    
  return (
    <section className="section relative ">
       <Wrapper className=' section-center'>
       {items.map((item) => { 
         const { id, icon, label, value, color } = item;
         return (
           <div className=' item py-[1rem] px-[2rem] rounded-lg bg-black ' key={id}>
             <span className={color}>
               {icon}
              </span>
               <div>
                 <h3 className='mb-0'>{value}</h3>
                  <p >{label}</p>
                </div>
               
             
            </div>
          )
    })}
      </Wrapper>
  </section>
  
   )
};
 



const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  .item {
  
  
    display: grid;
   grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.6rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
      font-size: 1.2rem;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: rgb(52 211 153);
      color: rgb(167 243 208);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow{
      background: rgb(251 191 36);
      color: rgb(254 243 199);
    }
  }
`;

export default UserInfo;
