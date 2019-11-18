import React, { Component } from 'react';
// import { ExpoConfigView } from '@expo/samples';
import { StyleSheet, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import axios from 'axios'

export default class MapScreen extends Component {
  // return <ExpoConfigView />; // from default template

  constructor(props) {
    super(props);
    this.state = {
      latitude: 40.7050758,
      longitude: -74.0091604,
      error: 0
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null
      });
    },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 2000, maximumAge: 1000 }
    );

    // let config = {
    //   headers: { 'Authorization': `Bearer ${process.env.YELP_API_KEY}` },
    //   params: {
    //     latitude: this.state.latitude,
    //     longitude: this.state.latitude
    //   }
    // };
    // const { data } = axios.get('https://api.yelp.com/v3/businesses/search', config).then(response => console.log(response));
  }

  render() {
    return <MapView
      style={styles.map}
      region={{
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: 0.017,
        longitudeDelta: 0.019,
      }}>
      <Marker coordinate={this.state} />
    </MapView>
  }
}

MapScreen.navigationOptions = {
  title: 'My Area',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});
