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
import Graph from './src/components/Graph';
import Header from './src/components/Header';
import {colorPalette, shadow, fontStyles} from './src/styles';

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
      <Header />

      <Graph />

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

const styles = StyleSheet.create({
  app: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: colorPalette.mainBg,
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
