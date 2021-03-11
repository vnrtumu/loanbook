import React, {Component} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import ImageLoader from '../components/ImageLoader';
import AsyncStorage from '@react-native-community/async-storage';

export default class SplashScreen extends Component {
  componentDidMount() {
    // AsyncStorage.getItem('token').then((token) => {
    //   if (token) {
    setTimeout(() => {
      this.props.navigation.navigate('Onboard');
    }, 2000);
    //   } else {
    //     setTimeout(() => {
    //       this.props.navigation.navigate('OnBoard');
    //     }, 2000);
    //   }
    // });
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#fff" barStyle="light-content" />

        <ImageLoader
          style={styles.image}
          source={require('../assets/images/splash.png')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    
  },
});
