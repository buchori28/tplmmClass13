import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, AppRegistry } from 'react-native';
import {Container, Header, Title, Button, Icon, Text, Left, Right, Body } from "native-base";
import MapView from 'react-native-maps';

const {width, height} = Dimensions.get('window');
const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = 0.01;

class Maps extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      initialPosition: {
        latitude : 0,
        longitude : 0,
        latitudeDelta : 0,
        liongitudeDelta  : 0
      },
      markerPosition:{
        latitude : 0,
        longitude : 0,
      }
    }
  };

  watchID: number = null;

  componentDidMount () {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = parseFloat (position.coords.latitude)
      var long = parseFloat (position.coords.longitude)

      var initialRegion = {
        latitude : lat,
        longitude : long,
        latitudeDelta : LATITUDE_DELTA,
        longitudeDelta : LONGITUDE_DELTA
      }
      this.setState({initialPosition : initialRegion})
      this.setState({markerPosition : initialRegion})
    }, (error) => alert(JSON.stringify(error)), 
    {enableHighAccuracy : true, timeout : 20000, maximumAge : 10000})
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lat = parseFloat (position.coords.latitude)
      var long = parseFloat (position.coords.longitude)

      var lastRegion = {
        latitude : lat,
        longitude : long,
        longitudeDelta : LONGITUDE_DELTA,
        latitudeDelta : LATITUDE_DELTA
      }
      this.setState({initialPosition : lastRegion})
      this.setState({markerPosition : lastRegion})
    })
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Maps</Title>
          </Body>
          <Right />
        </Header>
      <MapView
      showsUserLocation
        style={styles.map} 
        region={this.state.initialPosition}
        >
        <MapView.Marker
        coordinate={this.state.markerPosition} >
        </MapView.Marker>
      </MapView>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Maps;