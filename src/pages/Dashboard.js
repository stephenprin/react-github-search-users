import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';
const Dashboard = () => {
  return (
    <main className=' min-h-screen w-screen bg-gradient-to-l from-gray-900 to-slate-900'>
      {/* <Navbar /> */}
      {/* <Search /> */}
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
