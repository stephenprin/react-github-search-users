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

  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: '' });

  const checkGitRequests = (user) => { 
    axios(`${rootUrl}/rate_limit`).then(({data}) => {
      let { rate: { remaining } } = data; 
   
      setRequests(remaining);
      if (remaining === 0) { 
        toggleError(true, 'sorry, you have exceeded your hourly rate limit');
      }
    }).catch((err) => console.log(err));
  };
  const searchGithubUser = async (user) => { 

    setIsLoading(true);
    toggleError();
    const response = await axios(`${rootUrl}/users/${user}`).catch((err) => console.log(err));
    
    if (response) { 
      setGithubUser(response.data);
      const { login, followers_url } = response.data;
      axios(`${rootUrl}/users/${login}/repos?per_page=100`).then((response) => {
        setRepos(response.data)
      });
      axios(`${followers_url}?per_page=100`).then((response) => { 
       setFollowers(response.data);
      });

    } else {
      toggleError(true, 'there is no user with that username');
    }
    checkGitRequests();                                                                                                                                  
    setIsLoading(false);
  }
  function toggleError(show, msg ) { 
    setError({ show, msg });
  }

  useEffect(() =>checkGitRequests
   , []);
  

  return <githubContext.Provider
    value={{ githubUser, repos, followers, requests, error, searchGithubUser,isLoading }}>{children}</githubContext.Provider>
}


 const useGlobalContext = () => { 
    return useContext(githubContext);
 }

 export { GithubProvider, useGlobalContext } 