import React, { useState, useEffect, useContext } from 'react';
import mockUser from './mockData/mockUser';
import mockRepos from './mockData/mockRepos';
import mockFollowers from './mockData/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const githubContext = React.createContext();

const GithubProvider = ({ children }) => { 
    const [githubUser, setGithubUser] = useState(mockUser);
    const [repos, setRepos] = useState(mockRepos);
    const [followers, setFollowers] = useState(mockFollowers);
  return <githubContext.Provider value={{githubUser,repos,followers}}>{children}</githubContext.Provider>
}


 const useGlobalContext = () => { 
    return useContext(githubContext);
 }

 export { GithubProvider, useGlobalContext } 