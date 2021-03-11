import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image, 
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';
import {images, theme} from '../constants';

import {icons} from '../constants/tabConstants';


// theme
const {COLORS, FONTS, SIZES} = theme;

const GetStartedScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor="#0040c1" barStyle="light-content" />
      <View style={styles.imageContainer}>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/images/getstart.png')}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.welcomeView}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#fff'}}>
            Welcome
          </Text>
        </View>

        <View style={styles.appdescView}>
          <Text style={{fontSize: 16, color: '#fff'}}>
            Manage your Lending and Borrowings.
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#fff',
              paddingTop: 8,
            }}>
            Seamlessy & intuitively
          </Text>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.googlebtn}>
            <Image
              source={icons.google}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor:  COLORS.appcolor,
              }}
            />
            <Text style={styles.googleText}>Sign In with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.createbtn}  onPress={() => navigation.navigate('SignUp')}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#FFF'}}>
              Create an account
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.txtBtn}>
          <Text style={{color: 'skyblue'}}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#0040c1',
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    padding:  Platform.OS === 'ios' ? 25 : 10,
  },
  tinyLogo: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    // paddingLeft: 25,
    padding:  Platform.OS === 'ios' ? 25 : 10,

  },
  welcomeView: {
    flex: 1,
  },
  appdescView: {
    flex: 2,
  },
  buttonView: {
    flex: 2,
  },
  txtBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  googlebtn: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 12,
    borderRadius: 20,
  },
  googleText: {
    color: '#0040c1',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: '20%',
  },
  createbtn: {
    padding: 12,
    borderRadius: 20,
    borderColor: '#fff',
    borderWidth: 2,
    alignItems: 'center',
    marginTop: 12,
  },
});

export default GetStartedScreen;
