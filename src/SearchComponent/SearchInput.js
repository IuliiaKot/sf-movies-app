import React, {Component} from 'react';
import './SearchInput.css'


class SearchInput extends Component {
    constructor(){
        super()
        this.state ={
            searchTitle: ''
        }
        this.updateAutocomplete = this.updateAutocomplete.bind(this)
    }

    updateAutocomplete(){
        let searchMovie = this.refs.title.value;
        this.setState({
            searchTitle: searchMovie
        })
        this.props.updateAutocomplete(searchMovie)
    }

    render(){
        return(
            <div className="search-input">
                <input ref="title" type="text" placeholder="Enter movie here..."
                onChange={this.updateAutocomplete}/>
                <button>Search</button>
            </div>
        )
    }
}

export default SearchInput;