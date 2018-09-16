import React, { Component } from 'react';
import { MapView } from 'expo';
import { map } from 'lodash';

import coordinates from './coordinates';

const Map = ({}) => {

  return (
    <MapView
      style={{
        flex: 1
      }}
      initialRegion={{
        latitude: 42.698334,
        longitude: 23.319941,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
    >
      {map(coordinates, coordinate => (
        <MapView.Marker
          coordinate={coordinate}
        />
      ))}
    </MapView>
  )
}

export default Map