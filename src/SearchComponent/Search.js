import React, {Component} from 'react';
import SearchInput from './SearchInput';
import './Search.css';
import Autocomplete from './Autocomplete';
import {searchMovies, findMovie} from '../helper/movieHelpers';
import PropTypes from 'prop-types';


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
        } else {
            result = {title: ''}
        }
        this.props.updateMoviesInfoByTitle(result)
    }


    render(){
        return (
            <div className='search'>
                <SearchInput 
                    updateAutocomplete={this.updateAutocomplete}
                    hide={this.state.hide}
                    searchMovie={this.searchMovie}
                    title={this.state.searchMovie}/>
                <Autocomplete 
                    autocompleteList={this.state.autocompleteList}
                    hide={this.state.hide}
                    searchMovie={this.searchMovie}/>
            </div>
        )
    }
}

Search.propTypes = {
    autocompleteList: PropTypes.array.isRequires,
    updateMoviesInfoByTitle: PropTypes.func.isRequired
}

export default Search;