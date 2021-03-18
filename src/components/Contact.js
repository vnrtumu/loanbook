import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
} from "react-native";

import { dummyData, COLORS, SIZES, FONTS, icons, images } from "../constants";
import { useNavigation } from "@react-navigation/native";


const Contact = ({ customContainerStyle, onPress }) => {
        const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.radius,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        ...customContainerStyle,
        ...styles.shadow,
      }}
      onPress = {() => navigation.navigate('Detail')}
    >
      <Image
        source={require('../assets/images/pic.jpeg')}
        style={{ width: 60, height: 60, borderRadius: 30 }}
      />
      <View style={{ flex: 1, marginLeft: SIZES.radius }}>
        <Text style={{ ...FONTS.h2, fontWeight:'bold' }}>Venkat Reddy</Text>
        <Text style={{ ...FONTS.body3, color: COLORS.red, marginTop: 3 }}>
          20000
        </Text>
      </View>

      <Image source={icons.right_arrow} style={{ width: 25, height: 25, tintColor: COLORS.gray }} />
    </TouchableOpacity>
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

export default Contact;
