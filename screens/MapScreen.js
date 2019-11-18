import React, { Component } from 'react';
// import { ExpoConfigView } from '@expo/samples';
import { StyleSheet, View, Button } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import axios from 'axios'
// import { createStackNavigator, createBottomTabNavigator, navigate } from 'react-navigation';

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

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
        businesses: null
      });
    },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 2000, maximumAge: 1000 }
    );

    let config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer tGrWem7GLpKMgij7n7hopv8l9CaEou_hUomIT9B5cTuyrsMsZ_a-1EeH1E4DpaR_ta8H8Vkleaj7MJSZzgVjOcZRuBwWo4wxRwg1Puo_GBQqagJllJsWLOXg7w7SXXYx`
      },
      params: {
        latitude: this.state.latitude,
        longitude: this.state.latitude
      }
    };
    try {
      const data = await axios.get(`https://api.yelp.com/v3/businesses/search`, config);
      // const { Adata } = JSON.parse(data)
      // this.setState({ businesses: businesses });
      console.log('HERE', data.params);
    } catch (error) {
      console.log(error);
    }
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
      <Marker coordinate={this.state} pinColor='blue' onPress={() => this.props.navigation.navigate('Home')} />
      {/* {this.state.businesses.map(business => (
        <Marker key={business.id} coordinate={{ latitude: business.coordinates.latitude, longitude: business.coordinates.longitude }} onPress={() => this.props.navigation.navigate('Tab')} />
      ))} */}
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
