import React, {Component} from 'react';
import SearchInput from './SearchInput'
import './Search.css'
import Autocomplete from './Autocomplete'


class Search extends Component {
    constructor(){
        super();
        this.state = {
            autocompleteList: [],
            hide: false
        }
        this.updateAutocomplete = this.updateAutocomplete.bind(this)
    }

    updateAutocomplete(title){
        let rg = RegExp(`^${title}`, 'g');
        let list = this.props.movies.filter((movie) => {
           return movie.title.toLowerCase().match(rg)
        })
        this.setState({
            autocompleteList: list
        })
    }

    render(){
        return (
            <div className='search'>
                <SearchInput updateAutocomplete={this.updateAutocomplete}/>
                <Autocomplete autocompleteList={this.state.autocompleteList}
                    hide={this.state.hide}/>
            </div>
        )
    }
}

export default Search;