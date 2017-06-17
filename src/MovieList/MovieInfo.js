import React, {Component} from 'react';
import './MovieInfo.css'


class MovieInfo extends Component {
    render() {
        let {title, locations, release_year, fun_facts, actor_1, actor_2, actor_3} = {...this.props.info}
        return (
            <div className='info'>
                <div className="card">
                    <h3>{title}</h3>
                    <p><strong>Location: </strong> {locations}</p>
                    <p><strong>Release Year: </strong> {release_year}</p>
                    {fun_facts ? <p><strong>Fun Fucts: </strong> {fun_facts}</p> : null}
                </div>
            </div>
        )
    }
}


export default MovieInfo;