import React, {Component} from 'react';
import './MovieList.css'
import MovieInfo from './MovieInfo'


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
                <span onClick={this.hideList}>Hide</span>
               {
                   this.props.moviesList.map((movie,id) => {
                       return <MovieInfo key={id} info={movie}/>
                   })
               }
            </div>  
            :
            <div className="movie-list" > 
                <span onClick={this.hideList}>Show</span></div>
        return(
            <div>{ display}</div>            
        )
    }
}

export default MovieList;