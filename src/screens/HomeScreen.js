import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {images, theme} from '../constants';
const {banner} = images;

const HomeScreen = ({navigation}) => {
  function renderHeader() {
    return (
      <View style={{width: '100%', height: 290}}>
        <ImageBackground source={banner}  resizeMode="cover" style={{ flex:1, alignContent: 'center' }}  />
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={styles.mainContainer}>{renderHeader()}</View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingBottom: 130,
  },
  
});
