import React, {Component} from 'react';
import SearchInput from './SearchInput'
import './Search.css'


class Search extends Component {
    render(){
        return (
            <div className='search'>
                <SearchInput/>
            </div>
        )
    }
}

export default Search;