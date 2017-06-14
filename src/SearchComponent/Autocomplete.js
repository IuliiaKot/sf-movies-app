import React, {Component} from 'react';
import './Autocomplete.css'



class Autocomplete extends Component {
    render(){
        let list = this.props.autocompleteList.map(movie => <li>{movie.title}</li>)
        return(
            <div className={this.props.hide ? 'hide': ''}>
                <ul className="autocomplete">
                    {list}
                </ul>
            </div>
        )
    }
}


export default Autocomplete;