import React from 'react';
import {
  Alert,
  Platform,
  StyleSheet
} from 'react-native';
import MapView from 'react-native-maps'

const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = 0.01;

const initialRegion = {
  latitude: -6.78825,
  longitude: 106.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

class Maps extends React.Component {

  map = null;

  state = {
    region: {
      latitude: -37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    ready: true,
    filteredMarkers: []
  };

  setRegion(region) {
    if(this.state.ready) {
      setTimeout(() => this.map.mapview.animateToRegion(region), 10);
    }
    //this.setState({ region });
  }

  componentDidMount() {
    console.log('Component did mount');
    this.getCurrentPosition();
  }

  getCurrentPosition() {
    try {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const region = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          };
          this.setRegion(region);
        },
        (error) => {
          //TODO: better design
          switch (error.code) {
            case 1:
              if (Platform.OS === "ios") {
                Alert.alert("", "Lorem ipsum dolor sit amet ");
              } else {
                Alert.alert("", "Lorem ipsum dolor sit amet ");
              }
              break;
            default:
              Alert.alert("", "Kesalahan dalam mendeteksi lokasi");
          }
        }
      );
    } catch(e) {
      alert(e.message || "");
    }
  };

  onMapReady = (e) => {
    if(!this.state.ready) {
      this.setState({ready: true});
    }
  };

  onRegionChange = (region) => {
    console.log('onRegionChange', region);
  };

  onRegionChangeComplete = (region) => {
    console.log('onRegionChangeComplete', region);
  };

  render() {

    const { region } = this.state;

    return (
      <MapView
        showsUserLocation
        ref={ map => { this.map = map }}
        initialRegion={initialRegion}
        onMapReady={this.onMapReady}
        showsMyLocationButton={false}
        onRegionChange={this.onRegionChange}
        onRegionChangeComplete={this.onRegionChangeComplete}
        style={StyleSheet.absoluteFill}
        textStyle={{ color: '#bc8b00' }}
        containerStyle={{backgroundColor: 'white', borderColor: '#BC8B00'}}>

       
        <MapView.Marker
        coordinate={initialRegion} >
        </MapView.Marker>

      </MapView>
    );
  }
}

export default Maps;