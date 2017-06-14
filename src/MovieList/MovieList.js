import React, {Component} from 'react';
import './MovieList.css'
import MovieInfo from './MovieInfo'


class MovieList extends Component {
    render() {
        return(
            
            <div className="movie-list">
               {
                   this.props.moviesList.map((movie,id) => {
                       return <MovieInfo key={id} info={movie}/>
                   })
               }
            </div>  
        )
    }
}

export default MovieList;