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
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
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
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.padding,
          }}>
          <Image
            source={require('../assets/images/pic.jpeg')}
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              alignSelf: 'flex-start',
              marginHorizontal: SIZES.padding,
            }}
          />
          <View style={{marginTop: SIZES.padding}}>
            <Text
              style={{
                color: COLORS.secondary,
                ...FONTS.h2,
                fontWeight: 'bold',
              }}>
              Venkat Reddy
            </Text>
            <Text
              style={{
                marginTop: SIZES.base,
                color: COLORS.secondary,
                ...FONTS.body3,
              }}>
              Address: Kotha reddy Palem
            </Text>
            <Text style={{color: COLORS.white, ...FONTS.body5}}></Text>
          </View>
        </View>
        <View style={{marginHorizontal: SIZES.padding}}>
          <View style={{flexDirection: 'row', marginVertical: SIZES.padding}}>
            <Image
              source={icons.call}
              resizeMode="contain"
              style={{width: 25, height: 25, marginRight: SIZES.padding}}
            />
            <Text
              style={{color: COLORS.gray, fontSize: 22, alignSelf: 'center'}}>
              87900 10929
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={icons.mail}
              resizeMode="contain"
              style={{width: 25, height: 25, marginRight: SIZES.padding}}
            />
            <Text
              style={{color: COLORS.gray, fontSize: 22, alignSelf: 'center'}}>
              venkysri452@gmail.com
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              borderBottomColor: COLORS.gray,
              borderBottomWidth: 1,
              marginTop: SIZES.padding,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            <View style={{alignItems: 'flex-start'}}>
              <Text
                style={{color: COLORS.green, ...FONTS.h2, fontWeight: 'bold'}}>
                + $20000
              </Text>
              <Text style={{color: COLORS.gray, ...FONTS.body3}}>
                Lended amount
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: COLORS.gray,
                borderRightWidth: 1,
                marginVertical: -20,
              }}
            />
            <View style={{alignItems: 'flex-start'}}>
              <Text style={{color: 'red', ...FONTS.h2, fontWeight: 'bold'}}>
                - $20000
              </Text>
              <Text style={{color: COLORS.gray, ...FONTS.body3}}>
                Borrowed amount
              </Text>
            </View>
          </View>

          <View
            style={{
              borderBottomColor: COLORS.gray,
              borderBottomWidth: 1,
            }}
          />
        </View>
        <View style={{marginHorizontal: SIZES.padding, marginTop: SIZES.padding * 2, }}>
          <View style={{flexDirection: 'row', marginVertical: SIZES.padding}}>
            <Image
              source={icons.group}
              resizeMode="contain"
              style={{width: 25, height: 25, marginRight: SIZES.padding, tintColor: COLORS.primary}}
            />
            <Text
              style={{color: COLORS.gray, fontSize: 22, alignSelf: 'center'}}>
              Tell Your Friend
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginVertical: SIZES.padding}}>
            <Image
              source={icons.feedback}
              resizeMode="contain"
              style={{width: 25, height: 25, marginRight: SIZES.padding, tintColor: COLORS.primary}}
            />
            <Text
              style={{color: COLORS.gray, fontSize: 22, alignSelf: 'center'}}>
              Rate us on PlayStore
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginVertical: SIZES.padding,}}>
            <Image
              source={icons.logout}
              resizeMode="contain"
              style={{width: 25, height: 25, marginRight: SIZES.padding, tintColor: 'red'}}
            />
            <Text
              style={{color: 'red', fontSize: 22, alignSelf: 'center'}}>
              Log out
            </Text>
          </View>
        </View>
        
      </ScrollView>
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
