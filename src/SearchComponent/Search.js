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
        let list = searchMovies(this.props.movies, title, this.props.searchProp)
        this.setState({
            hide: false,
            autocompleteList: list
        })
    }

    searchMovie(title){
        if (this.props.searchProp === 'title')
        {
            let result = findMovie(this.props.movies, title, this.props.searchProp)
                if (result) {
                    this.setState({
                        hide: !this.state.hide,
                        searchMovie: result
                    })
                } else {
                    this.setState({hide: !this.state.hide})
                    result = {title: ''}
            }
             this.props.updateMoviesInfoByTitle(result)
        } else {
            this.setState({hide: !this.state.hide})
            this.props.updateMoviesInfoByTitle({'release_year': title})
        }
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
    autocompleteList: PropTypes.func.isRequires,
    updateMoviesInfoByTitle: PropTypes.func.isRequired
}

export default Search;