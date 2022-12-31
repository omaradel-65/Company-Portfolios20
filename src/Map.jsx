import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '1000px',
  height: '500px',
  overflow: 'hidden',

};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 40.712776,
            lng: -74.005974
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC3mZg6P7r2AzeOdm4XiQTmHora9Zs3fGQ'
})(MapContainer);