import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './MapComponent/Map'
import Search from './SearchComponent/Search'
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: []
    }
  }

  componentDidMount(){
    axios.get('https://data.sfgov.org/resource/wwmu-gmzc.json')
      .then(result => {
        this.setState({movies: result.data})
      })
  }
    
  render() {
    return (
      <div>
        <Map/>
        <Search movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
