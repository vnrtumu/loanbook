import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import {dummyData, COLORS, SIZES, FONTS, icons, images} from '../constants';

import { Contact } from "../components";


const Portfolio = ({ navigation })  => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
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
              Portfolio
            </Text>
          </View>
        </View>
      </View>
        <ScrollView>
        <View  style={{ paddingBottom: 130 }}>
              <Contact />
              <Contact />
              <Contact />
              <Contact />
              <Contact />
        </View>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});

export default Portfolio;
