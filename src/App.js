import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './MapComponent/Map'
import Search from './SearchComponent/Search'

class App extends Component {
    
  render() {
    return (
      <div>
        <Map/>
        <Search/>
      </div>
    );
  }
}

export default App;
