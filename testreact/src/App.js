import logo from './logo.svg';
import blueprint from './blueprint.jpg';
import gauge from './gauge.jpg';

import './App.css';
// Then import Bootstrap
import "./css/bootstrap.css";
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
       fetch('/api/httpTrigger1')
      .then(response => response.text())
      .then(text => setData(text))
      .catch(error => console.error(error));
  }, []);

  return (
  <div>     
    <div class="container text-center">
      <h1>Voiture de courtoisie</h1> 
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Client</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <form>
              <label>
                <input type="text" placeholder="Nom"/>
              </label>
              <label>
                <input type="text" placeholder="Prénom"/>
              </label>
              <label>
                <input type="text" placeholder="Adresse"/>
              </label>
              <label>
                <input type="text" placeholder="No Permis"/>
              </label>
              <label>
                <input type="text" placeholder="Date"/>
              </label>
              </form>
            </div>
          </div>
      </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">État du véhicule</h5>
              <div class="row">
                <div class="col-md-12 align-self-center"><img src={blueprint} width="600" height="400"/></div>
              </div>
              <div class="row">
                <div class="col-md-12 align-self-center"><img src={gauge} width="300" height="170"/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
