import React from 'react';
import axios from 'axios';
import * as DATA from './constants';
import './App.css';
import { Footer } from './components/Footer';

const fetchApi = async (Url, idElement) => {
  try {
    const { data } = await axios.get(Url);

    idElement.innerHTML = '';

    data.map((user) => {
      return (idElement.innerHTML += `
        <div key=${
          user.id
        } class="card" style="border-radius: 15px; width: 20rem; background: #12123D; color: #D4AA00; margin-top: 40px;">
          <img class="card-img-top" src=${
            DATA.URL_AVATAR + user.name
          } style="filter: drop-shadow(0px 0px 10px #D4AA00)"/>
          <div class="card-body" style="margin-top: 10px">
            <h4 class="card-title">${user.name}</h4>
            <h4 class="card-text">${user.email}</h4>
            <h5 class="text-muted">${user.address.city}</h5>
            <div class="card-footer">
              <button class="btn btn-warning">Me gusta</button>
            </div>
          </div>
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
      <h1 style={{ background: '#12123D', padding: '20px', color: '#D4AA00' }}>
        Face Users App
      </h1>
      <div className="card-columns" id="users"></div>
      <Footer />
    </div>
  );
};

export default App;
