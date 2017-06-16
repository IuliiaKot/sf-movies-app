import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './MapComponent/Map'
import Search from './SearchComponent/Search'
import MovieList from './MovieList/MovieList'
import axios from 'axios'


class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: [],
      searchedMovie: [],
      locations: []
    }

    this.updateMoviesInfoByTitle = this.updateMoviesInfoByTitle.bind(this)
  }

  componentDidMount(){
    axios.get('https://data.sfgov.org/resource/wwmu-gmzc.json')
      .then(result => {
        this.setState({movies: result.data})
      })
  }

  updateMoviesInfoByTitle(input){
    let resultOfSearch = this.state.movies.filter(movie => {
      return movie.title === input.title
    })
    this.setState({
      searchedMovie: resultOfSearch,
      locations: []
    })

    let geocoder = new window.google.maps.Geocoder();
    resultOfSearch.forEach(movie => {
      this.codeAddress(movie, geocoder)
    })
        //     let geocoder = new window.google.maps.Geocoder();
        // fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=129%20stanhope%20st%2011221&key=AIzaSyDoqvTFddnkoi5n6CLFc5kwbkbOBhWh0tI`)
        //     .then(result => {
        //         // let geocoder = new window.google.maps.Geocoder();
        //         // this.codeAddress('f',geocoder)
        //     })
  }


    codeAddress(movie,geocoder){
      // let rg = /\(([^)]+)\)/
      let location;
      if (movie.locations)
      {
        // debugger
        location = movie.locations.match(/\(([^)]+)\)/)
        location = (location ? location[1] : movie.locations)
      } else {
        location = ''
      }
      geocoder.geocode( {address:`${location}, San Francisco, CA`}, function(results, status) 
      {
        if (status == window.google.maps.GeocoderStatus.OK) 
        {
            // return results[0].geometry
            //  tmp.push(results[0].geometry)
            this.setState((prevState, props) => {
              return {locations: prevState.locations.concat(results[0].geometry.location)}
            })
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
      }
      }.bind(this));
    }
    
  render() {
    return (
      <div>
        <Map locations={this.state.locations}/>
        <Search movies={this.state.movies} updateMoviesInfoByTitle={this.updateMoviesInfoByTitle}/>
        <MovieList moviesList={this.state.searchedMovie}/>
      </div>
    );
  }
}

export default App;
