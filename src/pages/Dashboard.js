import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/loader.gif';
import { GithubContext, useGlobalContext } from '../context/context';
const Dashboard = () => {
  const { isLoading } = useGlobalContext()
  if(isLoading){
    return (
      <main className='min-h-screen w-screen bg-gradient-to-l from-gray-900 to-slate-900'>
     <Navbar />
     <Search />
     <img src={loadingImage} className='mx-auto mt-20 w-[15rem] h-[15rem] f' alt='loading' />
     </main>
    )
 }
  return (
    <main className=' min-h-screen w-screen bg-gradient-to-l from-gray-900 to-slate-900'>

      <Navbar /> 
      <Search /> 
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
