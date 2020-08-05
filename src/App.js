import React, {useState} from 'react';
import './App.css';

import UserForm from "./components/UserForm";
import axios from 'axios';




function App() {

  const [repos, setRepos] = useState();

  const getUser=e=>{
    e.preventDefault();
    
    const user = e.target.elements.username.value;
    axios.get(`https://api.github.com/users/${user}`)
    .then((res)=>{
      const repos=res.data.public_repos;
      console.log(repos);
    })
    
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">HTTP Calls in React</h1>
      </header>

      <UserForm getUser={getUser}/>
    </div>
  );
}

export default App;
