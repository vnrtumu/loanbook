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
  TouchableOpacity,
} from 'react-native';

import {dummyData, COLORS, SIZES, FONTS, icons, images} from '../constants';

import {HeaderBar, TransactionHistory} from '../components';

const DetailScreen = ({navigation}) => {

  const [transactionHistory, setTransactionHistory] = React.useState(dummyData.transactionHistory);

  function renderHeader() {
    return (
      <View style={{width: '100%', height: 230, ...styles.shadow}}>
        <ImageBackground
          source={images.banner}
          resizeMode="cover"
          style={{
            flex: 1,
            // alignItems: 'center',
          }}>
          {/* Header Section  */}
          <View
            style={{
              marginTop: SIZES.padding * 2,
              width: '100%',
              alignItems: 'flex-start',
              paddingHorizontal: SIZES.padding,
            }}>
            <TouchableOpacity
              style={{height: 25, width: 25}}
              onPress={() => navigation.goBack()}>
              <Image
                source={icons.back_arrow}
                resizeMode="contain"
                style={{flex: 1}}
              />
            </TouchableOpacity>
          </View>

          {/* Balance Section */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: SIZES.padding,
            }}>
            <Image
              source={require('../assets/images/pic.jpeg')}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                alignSelf: 'flex-start',
                marginHorizontal: SIZES.padding,
              }}
            />
            <View>
              <Text
                style={{color: COLORS.white, ...FONTS.h2, fontWeight: 'bold'}}>
                Venkat Reddy
              </Text>
              <Text
                style={{
                  marginTop: SIZES.base,
                  color: COLORS.white,
                  ...FONTS.body3,
                }}>
                +91 87900 10929
              </Text>
              <Text style={{color: COLORS.white, ...FONTS.body5}}></Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }

  function renderTransactionHistory() {
    return (
      <TransactionHistory customContainerStyle={{ ...styles.shadow }} history = {transactionHistory} />
    )
  }
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        {renderHeader()}
        {renderTransactionHistory()}
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingBottom: 130,
    backgroundColor: COLORS.white,
  },
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
