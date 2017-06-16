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
        let list = this.props.movies.filter((data, index, self) => self.findIndex((t) => {return t.title === data.title; }) === index)
        list = list.filter((movie) => {
           return movie.title.toLowerCase().match(rg)
        })
        this.setState({
            hide: false,
            autocompleteList: list
        })
    }

    searchMovie(title){
        let result = this.props.movies.find(movie => {
            return movie.title === title
        })
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




// data = [
//     {name: "pan", age: 89},
//     {name: "iuliia", age: 19},
//     {name: "pan", age: 99}
// ]

// data.filter((data, index, self) => self.findIndex((t) => {return t.name === data.name; }) === index)