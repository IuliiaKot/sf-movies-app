import React, {Component} from 'react';
import './SearchInput.css';
import PropTypes from 'prop-types';


class SearchInput extends Component {
    constructor(){
        super()
        this.state ={
            searchTitle: ''
        }
        this.updateAutocomplete = this.updateAutocomplete.bind(this)
        this.selectMovie = this.selectMovie.bind(this)
        this.toggleFilter = this.toggleFilter.bind(this)
    }

    toggleFilter(){
        this.props.toggle()
    }

    updateAutocomplete(e){
        let searchMovie = e.target.value;
        this.setState({
            searchTitle: searchMovie
        })
        this.props.updateAutocomplete(searchMovie)
    }
    selectMovie(e){
        if (e.which === 13 || e.type === 'click'){
            let movie = this.refs.title.value
            this.props.searchMovie(movie)
        }
    }

    componentWillReceiveProps(props){
        this.setState({
            searchTitle: this.props.title.title
        })
    }


    render(){
        return(
            <div className="search-input">
                <input ref="title" type="text" placeholder="Enter movie here..."
                onChange={this.updateAutocomplete} onKeyPress={this.selectMovie}
                value={this.state.searchTitle}
                          />
                <img onClick={this.toggleFilter} 
                src="https://cdn2.iconfinder.com/data/icons/cute-tech-icon-set-1/512/Filter-64.png" id="input_img"/>

                <button onClick={this.selectMovie}>Search</button>
            </div>
        )
    }
}


SearchInput.propTypes = {
    updateAutocomplete: PropTypes.func.isRequired,
    searchMovie: PropTypes.func.isRequired,
    hide: PropTypes.bool.isRequired,
    title: PropTypes.string

}

export default SearchInput;