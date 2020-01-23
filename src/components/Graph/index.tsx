import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  Defs,
  LinearGradient as LinearGradientSVG,
  Stop,
} from 'react-native-svg';
import {LineChart} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {shadow, colorPalette, fontStyles} from '../../styles';

export default function Graph() {
  const data = [120, 110, 90, 95, 100, 80, 120, 50, 60, 70, 150, 120];

  const Gradient = () => (
    <Defs key={'gradient'}>
      <LinearGradientSVG
        id={'gradient'}
        x1={'0'}
        y1={'0%'}
        x2={'0%'}
        y2={'100%'}>
        <Stop offset={'100%'} stopColor={colorPalette.main} />
        <Stop offset={'0%'} stopColor={colorPalette.accent} />
      </LinearGradientSVG>
    </Defs>
  );

  return (
    <>
      <View {...shadow(colorPalette.main)[11]} style={styles.tabsContainer}>
        <View style={[styles.tab, styles.activeTab]}>
          <Text style={[styles.tabText, styles.activeTabText]}>Last week</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.tabText}>Last 2 weeks</Text>
        </View>
        <View style={[styles.tab]}>
          <Text style={styles.tabText}>Last month</Text>
        </View>
      </View>
      <View {...shadow(colorPalette.main)[11]} style={styles.graphContainer}>
        <LineChart
          style={{height: 160}}
          data={data}
          curve={shape.curveBasis}
          svg={{
            strokeWidth: 5,
            stroke: 'url(#gradient)',
          }}>
          <Gradient />
        </LineChart>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  graphContainer: {
    marginHorizontal: 24,
    borderRadius: 12,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 48,
  },
  title: {
    marginTop: 12,
    marginLeft: 18,
    fontSize: 14,
    color: colorPalette.black,
  },
  tabsContainer: {
    marginHorizontal: 24,
    marginBottom: 24,
    flexDirection: 'row',
    borderRadius: 6,
    borderColor: colorPalette.main,
    borderWidth: 3,
  },
  tab: {
    flex: 1,
    textAlign: 'center',
    padding: 12,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  tabText: {
    textAlign: 'center',
    fontSize: 12,
    color: colorPalette.main,
    ...fontStyles.bodyBold,
  },
  activeTab: {
    backgroundColor: colorPalette.main,
  },
  activeTabText: {
    color: colorPalette.white,
  },
});
