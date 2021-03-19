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

const HeaderBar = ({ right }) => {
        const navigation = useNavigation();

  return (
    <View style={{ paddingHorizontal: SIZES.padding, flexDirection: "row", marginTop: Platform.OS === 'ios' ? 0 :  SIZES.padding }}>
      <View styl={{ flex: 1, alignItems: "flex-start" }}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.back_arrow}
            resizeMode="contain"
            style={{ width: 25, height: 25, tintColor: COLORS.gray }}
          />
          <Text style={{ marginLeft: SIZES.base, ...FONTS.h2 }}>Back</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <TouchableOpacity>
          <Image source={icons.star} resizeMode="contain" style={{width: 30, height: 30,}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderBar;
