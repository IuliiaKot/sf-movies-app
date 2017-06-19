import React, {Component} from 'react';
import './Filter.css';
import PropTypes from 'prop-types';


class Filter extends Component {
    changeSearch = (e) => {
        this.props.changeFilter(e.target.value)
    }

    render(){
        if (!this.props.show) {
            return null;
        }
        return(
            <div className="backdrop">
                <div className="modal">
                    <form action="">
                        <input type="radio" 
                            onChange={this.changeSearch} 
                            name="filter"
                            value="title" 
                            checked={this.props.defaultSearch === 'title'}/> Search by Title( default)
                        <input type="radio" 
                            onChange={this.changeSearch} 
                            name="filter"
                            value="release_year"
                            checked={this.props.defaultSearch === 'release_year'}/>Search by Year

                    </form>
                </div>
                <div className="footer">
                    <button className=" btn"onClick={this.props.onClose}>
                        Close
                    </button>
                </div>
            </div>
        )
    }
}

Filter.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
}


export default Filter;