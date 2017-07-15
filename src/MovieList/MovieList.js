import React, {Component} from 'react';
import './MovieList.css'
import MovieInfo from './MovieInfo';
import PropTypes from 'prop-types';


class MovieList extends Component {
    constructor(props){
        super(props);
        this.state ={
            hide:  false
        }
        this.hideList = this.hideList.bind(this);
    }
    hideList() {
        this.setState((prevState) => {
            return {hide: !prevState.hide}
        })
    }

    render() {
        let display = (!this.state.hide) ? 
            
            <div className="movie-list" id={this.state.hide ? 'hideList': ''} >
            <div className="close" onClick={this.hideList}></div>
               {
                   this.props.moviesList.map((movie,id) => {
                       return <MovieInfo key={id} info={movie}/>
                   })
               }
            </div>  
            :
  
            <div className="movie-list" >
                <div className="container" onClick={this.hideList}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </div>

        return(
            <div>{ display}</div>            
        )
    }
}


MovieList.propTypes = {
    moviesList: PropTypes.array.isRequired
}
export default MovieList;