import React, {Component} from 'react';
import './MovieList.css'
import MovieInfo from './MovieInfo'


class MovieList extends Component {
    render() {
        return(
            <div className="movie-list">
               <MovieInfo/>
               <MovieInfo/>
               <MovieInfo/>
               <MovieInfo/>
               <MovieInfo/>
               <MovieInfo/>
               <MovieInfo/>
               <MovieInfo/>
               
            </div>  
        )
    }
}

export default MovieList;