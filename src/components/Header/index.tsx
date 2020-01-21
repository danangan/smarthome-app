import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colorPalette, fontStyles, shadow} from '../../styles';
import Lamp from '../../../assets/icons/lamp.svg';

export default function Header() {
  return (
    <>
      <View style={styles.header}>
        <View {...shadow}>
          <Image
            style={styles.avatar}
            source={require('../../../assets/images/avatar.jpg')}
          />
        </View>
        <Text style={[styles.headerText, fontStyles.titleRegular]}>
          Hi, <Text style={fontStyles.titleExtraBold}>Danang!</Text>
        </Text>
      </View>
      <View style={styles.overview}>
        <View style={styles.energyConsumptionSummary}>
          <Lamp height={50} width={40} style={{marginRight: 10}} />
          <View>
            <Text style={[styles.energyConsumption, fontStyles.body]}>
              Energy consumed today:{' '}
              <Text style={fontStyles.bodyBold}>120 kwH</Text>
            </Text>
            <Text style={[fontStyles.body, styles.message]}>
              Keep up the good work!
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 24,
    marginTop: 24,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 50,
    width: 50,
    marginRight: 12,
    borderRadius: 25,
  },
  headerText: {
    color: colorPalette.black,
    fontSize: 24,
  },
  headerNameText: {
    color: colorPalette.light,
  },
  overview: {
    marginHorizontal: 24,
    marginBottom: 36,
    borderRadius: 24,
    fontSize: 18,
  },
  energyConsumption: {
    color: colorPalette.black,
    fontSize: 18,
    marginBottom: 6,
  },
  message: {
    fontSize: 14,
  },
  energyConsumptionSummary: {
    flexDirection: 'row',
  },
});
