import React, {Component} from 'react';


class Filter extends Component {
    changeSearch = (e) => {
        // console.log(e.target.value)
        this.props.changeFilter(e.target.value)
    }

    render(){
        if (!this.props.show) {
            return null;
        }
        const backdropStyle = {
            position:'absolute',
            top: '60px',
            zIndex:'3',
            left: '25%',
            maxWidth: 450,
            backgroundColor: 'rgba(255,255,255,0.1)',
            minHeight: 100,
            boxShadow: '0 2px 5px rgba(0,0,0, 0.5)'
        };


        const modalStyle = {
            backgroundColor: '#fff',
            borderRadius: 5,
            maxWidth: 450,
            minHeight: 100,
            padding: 30
        };
        return(
            <div className="backdrop" style={backdropStyle}>
                <div className="modal" style={modalStyle}>
                    <form action="">
                        <input type="radio" 
                            onClick={this.changeSearch} 
                            name="filter"
                            value="title" 
                            checked={this.props.defaultSearch === 'title'}/> Search by Title( default)
                        <input type="radio" 
                            onClick={this.changeSearch} 
                            name="filter"
                            value="release_year"
                            checked={this.props.defaultSearch === 'release_year'}/>Search by Year

                    </form>
                    <div className="footer">
                        <button onClick={this.props.onClose}>
                        Close
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


export default Filter;