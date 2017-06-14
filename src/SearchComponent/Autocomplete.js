import React, {Component} from 'react';
import './Autocomplete.css'



class Autocomplete extends Component {
    constructor(){
        super()
        this.selectMovie = this.selectMovie.bind(this)
    }

     selectMovie(e){
            let movie = e.target.innerText
            this.props.searchMovie(movie)
        }

    render(){

        let list = this.props.autocompleteList.map(movie => <li>{movie.title}</li>)
        return(
            <div className={this.props.hide ? 'hide': ''}>
                <ul className="autocomplete" onClick={this.selectMovie}>
                    {list}
                </ul>
            </div>
        )
    }
}


export default Autocomplete;