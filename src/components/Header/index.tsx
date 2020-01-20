import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colorPalette, fontStyles, shadow} from '../../styles';

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
        <Text style={[styles.energyConsumption, fontStyles.body]}>
          Energy consumed today:{' '}
          <Text style={fontStyles.bodyBold}>120 kwH</Text>
        </Text>
        <Text style={[fontStyles.body, styles.message]}>
          Keep up the good work!
        </Text>
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
    height: 40,
    width: 40,
    marginRight: 12,
    borderRadius: 24,
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
});
