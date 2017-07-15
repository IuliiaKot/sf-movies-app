import React, {Component} from 'react';
import './Autocomplete.css';
import PropTypes from 'prop-types';



class Autocomplete extends Component {
    constructor(props){
        super(props)
        this.selectMovie = this.selectMovie.bind(this)
    }

     selectMovie(e){
        let movie = e.target.innerText
        this.props.searchMovie(movie)
    }

    render(){

        let list = this.props.autocompleteList.map((movie, id) => <li key={id}>{movie.title}</li>)
        return(
            <div className={this.props.hide ? 'hide': ''}>
                <ul className="autocomplete" onClick={this.selectMovie}>
                    {list}
                </ul>
            </div>
        )
    }
}

Autocomplete.propTypes = {
    searchMovie: PropTypes.func.isRequired,
    autocompleteList: PropTypes.array.isRequired,
    hide: PropTypes.bool.isRequired
}


export default Autocomplete;