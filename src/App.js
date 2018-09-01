import React, { Component } from 'react';
import Card from './component/Card';
import './App.css';

import SpadesEngine from './logic/SpadesEngine';


class App extends Component {
  render() {

    console.log(SpadesEngine);
    
    return (
      <div className="App">
        <Card />
      </div>
    );
  }
}

export default App;
