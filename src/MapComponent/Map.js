import React, {Component} from 'react';
import './Map.css'


const deleteMarker = markers => {
  markers.forEach(marker =>{
    marker.setMap(null)
  });
  markers = [];
}

const addMarker = (map, locations, movieInfo) => {
    let marks = [];
    locations.forEach( location => {
        map.setCenter(location.LatLng);
        let marker = new window.google.maps.Marker({
            position: location.LatLng
        });
        marker.setMap(map);
        window.google.maps.event.addListener(marker, 'click', ((marker, movieInfo) => {
            return () => {
                movieInfo.setContent(location.address)
                movieInfo.open(map, marker)
            }
        })(marker, movieInfo))
        marks.push(marker);
    })
    return marks;
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
                center: sf,
                zoom: 13
            })
        })
    }

    componentWillReceiveProps(nextProp){
        if (this.state.locations !== nextProp.locations){
            let movieInfo = new window.google.maps.InfoWindow();
            deleteMarker(this.state.marks);
            let allmarkers = addMarker(this.state.map, nextProp.locations, movieInfo);
            this.setState({
                marks: allmarkers
            })
        }
    }
    render(){
        return (
            <div ref="map" id="map">Map</div>
        )
    }
}


export default Map;