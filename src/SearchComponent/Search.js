import React, {Component} from 'react';
import SearchInput from './SearchInput';
import './Search.css';
import Autocomplete from './Autocomplete';
import {searchMovies, findMovie} from '../helper/movie_helper';


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
        let list = searchMovies(this.props.movies, title)
        this.setState({
            hide: false,
            autocompleteList: list
        })
    }

    searchMovie(title){
        let result = findMovie(this.props.movies, title)
        if (result) {
            this.setState({
                hide: true,
                searchMovie: result
            })
        }
        this.props.updateMoviesInfoByTitle(result)
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