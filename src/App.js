import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DogPic from './components/DogPic';
import DogSelect from './components/DogSelect';
import Score from './components/Score';

class App extends Component{

  componentDidMount(){
    let url = 'https://dog.ceo/api/breeds/image/random';
    let d = fetch(url).then(response => response.json()).then(
      function(json) {
        let picture = json.message;
        console.log(picture);
      }
    )
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <DogPic/>
        <Score/>
        <DogSelect/>
      </div>
    );
  }
}


export default App;
