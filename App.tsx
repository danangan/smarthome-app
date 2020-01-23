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

import Profile from './assets/icons/profile.svg';
import Setting from './assets/icons/setting.svg';
import PieChart from './assets/icons/pie-chart.svg';
import Plus from './assets/icons/plus.svg';
import Home from './assets/icons/home.svg';

const iconDimension = {
  width: 120,
  height: 120,
};

const rooms = [
  {
    key: 'livingRoom',
    name: 'Living Room',
    backgroundColor: colorPalette.main,
    icon: <Sofa {...iconDimension} />,
  },
  {
    key: 'bedroom',
    name: 'Bedroom',
    backgroundColor: colorPalette.main,
    icon: <Bed {...iconDimension} />,
  },
  {
    key: 'bathroom',
    name: 'Bathroom',
    backgroundColor: colorPalette.main,
    icon: <Shower {...iconDimension} />,
  },
  {
    key: 'kitchen',
    name: 'Kitchen',
    backgroundColor: colorPalette.main,
    icon: <Kitchen {...iconDimension} />,
  },
];

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.app}>
        <Header />

        <Graph />

        <ScrollView horizontal style={styles.scrollMenuContainer}>
          {rooms.map((item, index) => (
            <View
              {...shadow(colorPalette.main)[11]}
              key={item.key}
              style={[
                styles.scrollableMenu,
                {backgroundColor: item.backgroundColor},
                index === 0 ? {marginLeft: 24} : undefined,
              ]}>
              <View {...shadow(colorPalette.white)[5]}>{item.icon}</View>
              <View {...shadow(colorPalette.white)[5]}>
                <Text style={[styles.scrollMenuTitle]}>{item.name}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
        <View style={styles.menuBar}>
          <View style={styles.menu}>
            <Home height={25} width={25} />
            <View style={styles.menuUnderline} />
          </View>
          <View style={styles.menu}>
            <PieChart height={25} width={25} />
          </View>
          <View style={styles.menu}>
            <Profile height={25} width={25} />
          </View>
          <View style={styles.menu}>
            <Setting height={25} width={25} />
          </View>
          <View style={styles.menu}>
            <Plus height={25} width={25} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  app: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: colorPalette.mainBg,
  },
  scrollMenuContainer: {
    height: 200,
  },
  scrollableMenu: {
    height: 200,
    borderRadius: 24,
    marginRight: 24,
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 36,
  },
  scrollMenuTitle: {
    color: colorPalette.white,
    fontSize: 18,
    marginTop: 12,
    ...fontStyles.titleBold,
    textAlign: 'left',
  },
  menuBar: {
    backgroundColor: colorPalette.main,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 110,
    marginBottom: -35,
    alignItems: 'flex-start',
    paddingTop: 24,
  },
  menu: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    color: colorPalette.white,
    marginTop: 6,
    ...fontStyles.titleBold,
  },
  menuUnderline: {
    height: 2,
    borderRadius: 2,
    backgroundColor: colorPalette.white,
    marginTop: 10,
    width: '60%',
  },
});

export default App;
