import React, {Component} from 'react';
import SearchInput from './SearchInput'
import './Search.css'
import Autocomplete from './Autocomplete'


class Search extends Component {
    constructor(){
        super();
        this.state = {
            autocompleteList: [],
            hide: true,
            searchMovie: ''
        }
        this.updateAutocomplete = this.updateAutocomplete.bind(this)
        this.searchMovie = this.searchMovie.bind(this)
    }

    updateAutocomplete(title){
        let rg = RegExp(`^${title}`, 'g');
        let list = this.props.movies.filter((movie) => {
           return movie.title.toLowerCase().match(rg)
        })
        this.setState({
            hide: false,
            autocompleteList: list
        })
    }

    searchMovie(title){
        let result = this.props.movies.find(movie => {
            return movie.title = title.toLowerCase()
        })
        // debugger
        let geocoder = new window.google.maps.Geocoder();
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=129%20stanhope%20st%2011221&key=AIzaSyDoqvTFddnkoi5n6CLFc5kwbkbOBhWh0tI`)
            .then(result => {
                // let geocoder = new window.google.maps.Geocoder();
                this.codeAddress('f',geocoder)
            })
        if (result.length != 0) {
            this.setState({
                hide: true,
                searchMovie: result
            })
        }

    }

 codeAddress(address, geocoder){
  geocoder.geocode( {address:'129 Stanhope st. NY, New York'}, function(results, status) 
  {
    if (status == window.google.maps.GeocoderStatus.OK) 
    {
        debugger
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
   }
  });
 }

    render(){
        return (
            <div className='search'>
                <SearchInput 
                    updateAutocomplete={this.updateAutocomplete}
                    hide={this.state.hide}/>
                <Autocomplete 
                    autocompleteList={this.state.autocompleteList}
                    hide={this.state.hide}
                    searchMovie={this.searchMovie}/>
            </div>
        )
    }
}

export default Search;