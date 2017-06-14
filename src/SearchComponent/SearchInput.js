import React, {Component} from 'react';
import './SearchInput.css'


class SearchInput extends Component {
    constructor(){
        super()
        this.state ={
            searchTitle: ''
        }
    }

    render(){
        return(
            <div className="search-input">
                <input type="text"/>
                <button>Search</button>
            </div>
        )
    }
}

export default SearchInput;