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
} from 'react-native';
import {dummyData, COLORS, SIZES, FONTS, icons, images} from '../constants';

const CreateContact = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightGray}}>
      <View style={{paddingHorizontal: SIZES.padding, flexDirection: 'row'}}>
        <View styl={{flex: 1, alignItems: 'flex-start'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={icons.add}
              resizeMode="contain"
              style={{width: 25, height: 25, tintColor: COLORS.black}}
            />
            <Text
              style={{
                marginLeft: SIZES.base,
                ...FONTS.h2,
                color: COLORS.black,
              }}>
              Create New Contact
            </Text>
          </View>
        </View>
      </View>

      <ScrollView>
        <View
          style={{
            flex: 1,
            paddingBottom: SIZES.padding,
            marginTop: SIZES.padding * 2,
          }}>
          {/* Image upload Section */}
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                backgroundColor: COLORS.primary,
                padding: 3,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={icons.camera}
                style={{width: 60, height: 60, borderRadius: 25}}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginTop: SIZES.padding,
              marginHorizontal: SIZES.padding,
              padding: 20,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.secondary,
              ...styles.shadow,
            }}>
            <TextInput
              style={{height: 40}}
              placeholder="Type here to translate!"
            />
            <Text style={{color: COLORS.white, ...FONTS.h3}}>
              Investing Saftey
            </Text>
            <Text
              style={{
                marginTop: SIZES.base,
                color: COLORS.white,
                ...FONTS.body4,
                lineHeight: 18,
              }}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{' '}
            </Text>

            <TouchableOpacity
              style={{marginTop: SIZES.base}}
              onPress={() => console.log('Learn More')}>
              <Text
                style={{
                  textDecorationLine: 'underline',
                  color: COLORS.green,
                  ...FONTS.h3,
                }}>
                Learn More
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default CreateContact;
