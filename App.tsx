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
import Kitchen from './assets/icons/kitchen.svg';
import Sofa from './assets/icons/sofa.svg';
import Bed from './assets/icons/bed.svg';
import Shower from './assets/icons/shower.svg';

const iconDimension = {
  width: 120,
  height: 120,
};

const rooms = [
  {
    key: 'livingRoom',
    name: 'Living Room',
    backgroundColor: colorPalette.light,
    icon: <Sofa {...iconDimension} />,
  },
  {
    key: 'bedroom',
    name: 'Bedroom',
    backgroundColor: colorPalette.light,
    icon: <Bed {...iconDimension} />,
  },
  {
    key: 'bathroom',
    name: 'Bathroom',
    backgroundColor: colorPalette.light,
    icon: <Shower {...iconDimension} />,
  },
  {
    key: 'kitchen',
    name: 'Kitchen',
    backgroundColor: colorPalette.light,
    icon: <Kitchen {...iconDimension} />,
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
              {backgroundColor: item.backgroundColor},
              index === 0 ? {marginLeft: 24} : undefined,
            ]}>
            {item.icon}
            <Text style={[styles.scrollMenuTitle]}>{item.name}</Text>
          </View>
        ))}
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
    backgroundColor: colorPalette.white,
  },
  graphContainer: {
    marginHorizontal: 24,
    backgroundColor: colorPalette.light,
    height: 240,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollMenu: {},
  scrollableMenu: {
    height: 200,
    width: 200,
    borderRadius: 24,
    marginRight: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 24,
  },
  scrollMenuTitle: {
    color: colorPalette.white,
    fontSize: 18,
    marginTop: 12,
    ...fontStyles.titleBold,
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
  menuBar: {
    backgroundColor: colorPalette.main,
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
});

export default App;
