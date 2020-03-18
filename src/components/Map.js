import React, { Component } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'

const googleMap = () => {
    return (
        <GoogleMap 
        defaultZoom={13}
        defaultCenter={{ lat: 6.248220, lng: -75.580032 }}
        />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(googleMap))

class Map extends Component {
    constructor() {
        super()
        this.state = {
            loadedMarkers: {},
            haveLoadedMarkers: false
        }
    }

    componentDidMount() {
        const request = async () => {
            let req = await fetch('http://18.233.97.235:3000/api/v1/main/')
            req = await req.json()
            this.setState({
                loadedMarkers: req.data,
                haveLoadedMarkers: true
            })
            console.log(req.data[0].parkingCoordinates.coordinates[0], this.state.haveLoadedMarkers)
        }
        request()
    }
    render() {
        return (
            <div style={{ width: '100%', height: '75vh'}}>
                <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
                libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                loadingElement={<div style={{ height: '100%' }}/>}
                containerElement={<div style={{ height: '100%' }}/>}
                mapElement={<div style={{ height: '100%' }}/>}
                >
                <Marker 
                position={{
                    lat: 6.250309,
                    lng: -75.558620
                }}
                />
                {
                    this.haveLoadedMarkers === true ? 
                    this.loadedMarkers.map((parking) => 
                        <Marker
                        key={parking._id}
                        position={{ 
                            lat: parking.parkingCoordinates.coordinates[1], 
                            lng: parking.parkingCoordinates.coordinates[0]
                        }}
                        />
                    ) :
                    null
                }
                </WrappedMap>
            </div>
        )
    } 
}

export default Map