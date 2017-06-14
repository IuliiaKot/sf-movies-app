import React, {Component} from 'react';
import './Map.css'


class Map extends Component{
    constructor(){
        super()
        this.state = {
            map: ''
        }
    }

    componentDidMount(){
        const sf = {lat: 37.774929, lng: -122.419416}
        this.setState({
            map: new window.google.maps.Map(this.refs.map, {
                center: {lat: 37.774929, lng: -122.419416},
                zoom: 12
            })
        })
    }

    render(){
          const mapStyle = {
      width: '100%',
      height: '750'
    };
        return (
            <div ref="map" id="map">Map</div>
        )
    }
}


export default Map;