import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Defs, LinearGradient, Stop} from 'react-native-svg';
import {LineChart} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {shadow, colorPalette, fontStyles} from '../../styles';

export default function Graph() {
  const data = [120, 110, 90, 95, 100, 80, 120, 50, 60, 70, 150, 120];

  const Gradient = () => (
    <Defs key={'gradient'}>
      <LinearGradient id={'gradient'} x1={'0'} y1={'0%'} x2={'0%'} y2={'100%'}>
        <Stop offset={'100%'} stopColor={colorPalette.light} />
        <Stop offset={'0%'} stopColor={colorPalette.accent} />
      </LinearGradient>
    </Defs>
  );

  return (
    <View {...shadow} style={styles.graphContainer}>
      <Text style={[styles.title, fontStyles.body]}>
        Energy consumption trends
      </Text>
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
  );
}

const styles = StyleSheet.create({
  graphContainer: {
    marginHorizontal: 24,
    backgroundColor: colorPalette.white,
    height: 200,
    borderRadius: 24,
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
});
