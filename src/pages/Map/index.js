import React, { Component } from 'react'
import { Text, StyleSheet, View, Platform } from 'react-native'
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapView, { Marker } from 'react-native-maps';

export default class Geolocation extends Component {
  state = {
  location: null,
  region: null,
  errorMessage: null,
  markers:[],
};
UNSAFE_componentWillMount() {
if (Platform.OS === 'android' && !Constants.isDevice) {
this.setState({
errorMessage:
'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
});
} else {
this._getLocationAsync();
}
}
_getLocationAsync = async () => {
let { status } = await Permissions.askAsync(Permissions.LOCATION);
if (status !== 'granted') {
this.setState({
errorMessage: 'Permission to access location was denied',
});
}
let location = await Location.getCurrentPositionAsync({});
const region = {
latitude: location.coords.latitude,
longitude: location.coords.longitude,
latitudeDelta: 0.001,
longitudeDelta: 0.001,
};
this.setState({ location, region });
};
render() {
return (
<MapView
 style={{
  flex: 1,
  alignItems: 'center',
  paddingTop: Constants.statusBarHeight,
}
}
initialRegion={this.state.region} >
<Marker
  coordinate={{
      latitude: -7.292140831368985,
      longitude:  112.72772068644109,
  }}
  title="RS MAYAPADA"
/>
<Marker

  coordinate={{
      latitude: -7.3288219357747035,  
      longitude: 112.75085479705191,
  }}
  title="RS ROYAL"
/>
<Marker
  coordinate={{
      latitude: -7.26800742419264, 
      longitude: 112.75802927773233,
  }}
  title="RSU SOETOMO"
/>
<Marker
  coordinate={{
      latitude: -7.264316784131521, 
      longitude: 112.75635781239191,
  }}
  title="RS HUSADA UTAMA"
/>
<Marker
  coordinate={{
      latitude: -7.313959256295428,
      longitude:  112.76586041239217,
  }}
  title="RS UBAYA"
/>
<Marker
  coordinate={{
      latitude: -7.323234320507578, 
      longitude: 112.74059870870084, 
  }}
  title="RS ISLAM SURABAYA"
/>
<Marker
  coordinate={{
      latitude: -7.324442373559948, 
      longitude: 112.7315436112424
  }}
  title="RS BHAYANGKARA"
/>

</MapView>
);
}
}