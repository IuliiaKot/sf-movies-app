import React, { Component } from 'react';
import './App.css';
import Map from './MapComponent/Map';
import Search from './SearchComponent/Search';
import Filter from './SearchComponent/Filter';
import MovieList from './MovieList/MovieList';
import axios from 'axios';
import PropTypes from 'prop-types';


class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: [],
      searchedMovie: [],
      locations: [],
      isOpen: false,
      defaultSearch: 'title'
    }

  //   this.updateMoviesInfoByTitle = this.updateMoviesInfoByTitle.bind(this)
  //   this.toggleFilter = this.toggleFilter.bind(this)
  //   this.updateFilter = this.updateFilter.bind(this)
  }


  toggleFilter(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  updateFilter(value){
    this.setState({defaultSearch: value})
  }


  // componentDidMount(){
  //   axios.get('https://data.sfgov.org/resource/wwmu-gmzc.json')
  //     .then(result => {
  //       this.setState({movies: result.data})
  //     })
  // }

  updateMoviesInfoByTitle(input){
    let resultOfSearch = this.state.movies.filter(movie => {
      return movie[this.state.defaultSearch] === input[this.state.defaultSearch]
    })
    this.setState({
      searchedMovie: resultOfSearch,
      locations: []
    })

    let geocoder = new window.google.maps.Geocoder();
    resultOfSearch.forEach(movie => {
      this.codeAddress(movie, geocoder)
    })
  }


    codeAddress(movie,geocoder){
      let location;
      if (movie.locations)
      {
        location = movie.locations.match(/\(([^)]+)\)/)
        location = (location ? location[1] : movie.locations)
      } else {
        location = ''
      }
      geocoder.geocode( {address:`${location}, San Francisco, CA`}, function(results, status) 
      {
        if (status === window.google.maps.GeocoderStatus.OK) 
        {
            let location = {LatLng: results[0].geometry.location, address: movie.locations};
            this.setState((prevState, props) => {
              return {locations: prevState.locations.concat(location)}
            })
        } else {
          // alert('Geocode was not successful for the following reason: ' + status);
      }
      }.bind(this));
    }
    
  render() {
    return (
      <div>
        Hello
          {/*<div className="App">
            <Filter show={this.state.isOpen}
              onClose={this.toggleFilter}
              changeFilter={this.updateFilter}
              defaultSearch={this.state.defaultSearch}>
              Filter
            </Filter>
          </div>
        <Map locations={this.state.locations} searchedMovie={this.state.searchedMovie}/>
        <Search movies={this.state.movies} 
                updateMoviesInfoByTitle={this.updateMoviesInfoByTitle}
                searchProp={this.state.defaultSearch}
                toggleFilter={this.toggleFilter}/>
        <MovieList moviesList={this.state.searchedMovie}/>*/}
      </div>
    );
  }
}


App.propTypes = {
  movies: PropTypes.array.isRequired
}

export default App;
