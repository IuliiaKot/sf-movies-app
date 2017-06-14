import React, {Component} from 'react';


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