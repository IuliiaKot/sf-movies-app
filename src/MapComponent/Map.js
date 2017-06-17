import React, {Component} from 'react';
import './Map.css'


const deleteMarker = markers => {
  markers.forEach(marker =>{
    marker.setMap(null)
  });
  markers = [];
}


class Map extends Component{
    constructor(){
        super()
        this.state = {
            map: '',
            marks: []
        }
    }

    componentDidMount(){
        const sf = {lat: 37.774929, lng: -122.419416}
        this.setState({
            map: new window.google.maps.Map(this.refs.map, {
                center: {lat: 37.774929, lng: -122.419416},
                zoom: 13
            })
        })
    }

    componentWillReceiveProps(nextProp){
        var  movieInfo = new window.google.maps.InfoWindow();
            deleteMarker(this.state.marks)
            nextProp.locations.forEach(function(element) {
                this.state.map.setCenter(element);
                let marker = new window.google.maps.Marker({
                    map: this.state.map,
                    position: element
                });
                 window.google.maps.event.addListener(marker, 'click', ((marker, movieInfo) => {
                        return () => {
                            movieInfo.setContent('Hello')
                            movieInfo.open(this.state.map, marker)
                        }
                    })(marker, movieInfo))
                this.state.marks.push(marker)
            }, this);
    }
    render(){
        return (
            <div ref="map" id="map">Map</div>
        )
    }
}


export default Map;