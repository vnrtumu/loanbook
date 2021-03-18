import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {
  HeaderBar,
  CurrencyLabel,
  TextButton,
  TransactionHistory,
} from '../components';

import {dummyData, COLORS, SIZES, FONTS, icons, images} from '../constants';

const Settings = ({route}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          flexDirection: 'row',
        }}>
        <View
          styl={{
            flex: 1,
            alignItems: 'flex-start',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                marginLeft: SIZES.base,
                ...FONTS.h2,
                color: COLORS.black,
              }}>
              Settings
            </Text>
          </View>
        </View>
      </View>
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default Settings;
