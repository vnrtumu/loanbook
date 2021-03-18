import React, {useState} from 'react';
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
import DateTimePicker from '@react-native-community/datetimepicker';

import {dummyData, COLORS, SIZES, FONTS, icons, images} from '../constants';

const CreateContact = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  

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
            <Image
              source={icons.add}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.black,
              }}
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
          <View
            style={{
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                backgroundColor: COLORS.secondary,
                padding: 3,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={icons.camera}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 25,
                }}
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
              style={{
                height: 40,
                borderBottomWidth: 1,
                borderBottomColor: COLORS.white,
                color: COLORS.white,
                ...FONTS.body2,
              }}
              placeholderTextColor={COLORS.black}
              placeholder="Name"
              autoCompleteType="off"
              autoCorrect={false}
            />

           

            <TextInput
              style={{
                height: 40,
                borderBottomWidth: 1,
                borderBottomColor: COLORS.white,
                color: COLORS.white,
                marginTop: SIZES.radius,
                ...FONTS.body2,
              }}
              placeholderTextColor={COLORS.black}
              placeholder="Phone"
              autoCompleteType="off"
              autoCorrect={false}
            />

            <TextInput
              style={{
                height: 40,
                borderBottomWidth: 1,
                borderBottomColor: COLORS.white,
                color: COLORS.white,
                marginTop: SIZES.radius,
                ...FONTS.body2,
              }}
              placeholderTextColor={COLORS.black}
              placeholder="Alternate Number"
              autoCompleteType="off"
              autoCorrect={false}
            />

            <TextInput
              style={{
                height: 40,
                borderBottomWidth: 1,
                borderBottomColor: COLORS.white,
                color: COLORS.white,
                marginTop: SIZES.radius,
                ...FONTS.body2,
              }}
              placeholderTextColor={COLORS.black}
              placeholder="Princple Amount"
              autoCompleteType="off"
              autoCorrect={false}
            />
            <TextInput
              style={{
                height: 40,
                borderBottomWidth: 1,
                borderBottomColor: COLORS.white,
                color: COLORS.white,
                marginTop: SIZES.radius,
                ...FONTS.body2,
              }}
              placeholderTextColor={COLORS.black}
              placeholder="Rate Of Interest"
              autoCompleteType="off"
              autoCorrect={false}
            />

            

            <TextInput
              style={{
                height: 40,
                borderBottomWidth: 1,
                borderBottomColor: COLORS.white,
                color: COLORS.white,
                marginTop: SIZES.radius,
                ...FONTS.body2,
              }}
              placeholderTextColor={COLORS.black}
              placeholder="Type of Intrest"
              autoCompleteType="off"
              autoCorrect={false}
            />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          position: 'relative',
          padding: SIZES.padding,
          justifyContent: 'space-between',
          alignContent: 'space-between',
        }}>
        <Text
          style={{
            color: COLORS.black,
            marginLeft: SIZES.padding,
            ...FONTS.body2,
          }}>
          Cancel
        </Text>
        <Text
          style={{
            color: COLORS.black,
            marginRight: SIZES.padding,
            ...FONTS.body2,
          }}>
          Save
        </Text>
      </View>
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
