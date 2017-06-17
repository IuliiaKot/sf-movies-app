import React, {Component} from 'react';
import './MovieInfo.css'


class MovieInfo extends Component {
    render() {
        let {title, locations, release_year, fun_facts, actor_1, actor_2, actor_3} = {...this.props.info}
        return (
            <div className='info'>
                <ul className="">
                    <li><h4>{title}</h4></li>
                    <li><strong>Location:</strong> {locations}</li>
                    <li><strong>Release Year:</strong> {release_year}</li>
                    {actor_1 ? <li><strong>Actors: </strong>{actor_1}, {actor_2}, {actor_3}</li> : null}
                    {fun_facts ? <li><strong>Fun Fucts:</strong> {fun_facts}</li> : null}
                </ul>
            </div>
        )
    }
}


export default MovieInfo;