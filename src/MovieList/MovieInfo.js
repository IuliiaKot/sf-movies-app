import React, {Component} from 'react';
import './MovieInfo.css'


class MovieInfo extends Component {
    render() {
        let {title, locations, release_year, fun_facts} = {...this.props.info}
        return (
            <div className='info'>
                <ul className="">
                    <li>{title}</li>
                    <li>{locations}</li>
                    <li>{release_year}</li>
                    <li>{fun_facts}</li>
                </ul>
            </div>
        )
    }
}


export default MovieInfo;