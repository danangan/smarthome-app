/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, ScrollView} from 'react-native';

const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
};

const colorPalette = {
  light: '#45BF55',
  lighter: '#97ED8A',
  main: '#168039',
  dark: '#044D29',
  darker: '#00261C',
  grey: '#bbb',
  lightGrey: '#efefef',
  black: '#222',
  white: '#fff',
};

const rooms = [
  {
    key: 'livingRoom',
    name: 'Living Room',
  },
  {
    key: 'bedroom',
    name: 'Bedroom',
  },
  {
    key: 'kitchen',
    name: 'Kitchen',
  },
];

const App = () => {
  return (
    <SafeAreaView style={styles.app}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Hi, <Text style={fontStyles.titleBold}>Danang!</Text>
        </Text>
      </View>
      <View style={styles.overview}>
        <Text style={[styles.energyConsumption, fontStyles.body]}>
          Your energy consumption today
        </Text>
        <Text style={styles.energyConsumptionSum}>120 kwH</Text>
      </View>
      <View style={styles.graphContainer} {...shadow}>
        <Text>Graph goes here</Text>
      </View>
      <ScrollView horizontal style={styles.scrollMenu}>
        {rooms.map((item, index) => (
          <View
            {...shadow}
            key={item.key}
            style={[
              styles.scrollableMenu,
              styles[item.key],
              index === 0 ? {marginLeft: 24} : undefined,
            ]}>
            <Text style={styles.scrollMenuTitle}>{item.name}</Text>
          </View>
        ))}
        <View style={[styles.scrollableMenu, styles.addMore]}>
          <Text style={styles.scrollMenuTitle}>Add More</Text>
        </View>
      </ScrollView>
      <View style={styles.menuBar}>
        <View>
          <Text>Analytics</Text>
        </View>
        <View>
          <Text>Profile</Text>
        </View>
        <View>
          <Text>Setup a new device</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const fontStyles = StyleSheet.create({
  title: {
    fontFamily: 'Raleway-Light',
  },
  titleBold: {
    fontFamily: 'Raleway-Regular',
  },
  body: {
    fontFamily: 'OpenSans-Light',
  },
});

const styles = StyleSheet.create({
  app: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: colorPalette.white,
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 24,
  },
  headerText: {
    color: colorPalette.light,
    fontSize: 30,
    fontFamily: 'Raleway-Light',
  },
  header: {
    paddingHorizontal: 24,
    marginTop: 24,
    marginBottom: 12,
  },
  overview: {
    backgroundColor: 'white',
    marginHorizontal: 24,
    marginBottom: 36,
    borderRadius: 24,
  },
  overviewTitle: {
    fontFamily: 'Raleway-SemiBold',
    marginBottom: 6,
    color: colorPalette.black,
  },
  energyConsumption: {
    fontFamily: 'OpenSans-Regular',
    color: colorPalette.black,
    fontSize: 20,
  },
  energyConsumptionSum: {
    fontSize: 24,
    fontFamily: 'OpenSans-Bold',
  },
  graphContainer: {
    marginHorizontal: 24,
    backgroundColor: colorPalette.light,
    height: 240,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollMenu: {
    maxHeight: 260,
    marginVertical: 24,
  },
  scrollableMenu: {
    height: 240,
    width: 200,
    borderRadius: 24,
    marginLeft: 18,
    justifyContent: 'flex-end',
    padding: 12,
  },
  scrollMenuTitle: {
    color: 'white',
    fontFamily: 'Raleway-Bold',
    fontSize: 24,
  },
  livingRoom: {
    backgroundColor: colorPalette.lighter,
  },
  bedroom: {
    backgroundColor: colorPalette.light,
  },
  kitchen: {
    backgroundColor: colorPalette.main,
  },
  addMore: {
    backgroundColor: colorPalette.darker,
    marginRight: 24,
  },
  menuBar: {
    backgroundColor: colorPalette.main,
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
});

export default App;
