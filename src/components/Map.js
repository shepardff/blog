import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';


const mapStyles = {
    width: '100%',
    height: '100%'
};


export class MapContainer extends React.Component {
    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
    };

    onMarkerClick = (props, marker) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = () => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <Map
                google={ this.props.google }
                zoom={ 15 }
                style={ mapStyles }
                initialCenter={
                    {
                        lat: 54.53611908673043,
                        lng: 52.79148293147758
                    }
                }
            >
                <Marker onClick={this.onMarkerClick} name={'Lorem Ipsum Dolor'} position={{lat: 54.53611908673043, lng: 52.79148293147758}} />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                    google={this.props.google}
                    map={this.props.map}
                >
                    <div>
                        <h5>{this.state.selectedPlace.name}</h5>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCOcj62fl7MtfbIkSqToyXDiYYCjoJ9-MU'
})(MapContainer);