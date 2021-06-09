import React from 'react';
import axios from 'axios';
import * as DATA from './constants';
import './App.css';

const fetchApi = async (Url, idElement) => {
  try {
    const { data } = await axios.get(Url);

    idElement.innerHTML = '';

    data.map((user) => {
      return (idElement.innerHTML += `
        <div key=${user.id}>
          <h1>User ${user.id}</h1>
          <h3>Name: ${user.name}</h3>
          <h4>Email: ${user.email}</h4>
          <h5>City: ${user.address.city}</h5>
        </div>
        <hr />
      `);
    });
  } catch (error) {
    console.error(error);
  }
};

const App = () => {
  React.useEffect(() => {
    const users = document.getElementById('users') || null;
    users ? fetchApi(DATA.URL, users) : console.error('Error ocurrido', users);
  }, []);

  return (
    <div className="App">
      <h1>React App</h1>
      <div className="user" id="users"></div>
    </div>
  );
};

export default App;
