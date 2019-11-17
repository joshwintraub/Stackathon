import React from 'react';
// import { ExpoConfigView } from '@expo/samples';
import { StyleSheet } from 'react-native'
import MapView from 'react-native-maps'

export default function TabScreen() {
  // return <ExpoConfigView />; // from default template
  return <MapView
    style={styles.map}
    region={{
      latitude: 40.705018,
      longitude: -74.009272,
      latitudeDelta: 0.017,
      longitudeDelta: 0.019,
    }}
  >
  </MapView>
}

TabScreen.navigationOptions = {
  title: 'app.json',
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
