import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DogPic from './components/DogPic';
import DogSelect from './components/DogSelect';
import Score from './components/Score';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      picture: 'undefined',
      list: []
    }
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount(){
    this.getNewPicture();
    fetch('https://dog.ceo/api/breeds/list/all').then(response => response.json()).then(
      (json) => {
        let test = json.message;
        let dropDownArr = [];
        Object.keys(test).forEach((element) => {
        if(test[element].length > 0) {
          let dogSub = test[element];
          dogSub.forEach(function(element2) {
            let join = element + " " + element2;
            dropDownArr.push(join);
        }); }
        else {
          dropDownArr.push(element);
          }
        });
        this.setState({list: dropDownArr});
      }
    )
  }

  getNewPicture(){
    let url = 'https://dog.ceo/api/breeds/image/random';
    fetch(url).then(response => response.json()).then(
      (json) => {
        this.setState({picture: json.message})
      }
    )
  };




  render(){
    return (
      <div className="App">
        <DogPic dogPicture = {this.state.picture}/>
        <Score/>
        <DogSelect dogList = {this.state.list}/>
      </div>
    );
  }
}


export default App;
