import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {colorPalette, fontStyles, shadow} from '../../styles';

interface IInfoBox {
  style?: StyleProp<ViewStyle>;
  title: string;
  description: string;
}

const InfoBox: React.FC<IInfoBox> = ({style, title, description}) => (
  <View style={[styles.infoBox, style || {}]} {...shadow(colorPalette.main)[5]}>
    <Text style={[styles.infoBoxTitle, fontStyles.bodyBold]}>{title}</Text>

    <Text style={[styles.infoBoxDesc, fontStyles.body]}>{description}</Text>
  </View>
);

const InfoBoxes: Array<{title: string; description: string}> = [
  {
    title: '120 kwH',
    description: 'Energy consumed',
  },
  {
    title: '30 kwH',
    description: 'Energy saved',
  },
];

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <View {...shadow(colorPalette.main)[5]}>
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
          {InfoBoxes.map(item => (
            <InfoBox {...item} key={item.title} />
          ))}
        </View>
      </View>
    </View>
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
  headerContainer: {
    marginBottom: 24,
  },
  avatar: {
    height: 50,
    width: 50,
    marginRight: 12,
    borderRadius: 25,
    marginLeft: 6,
    borderWidth: 2,
    borderColor: colorPalette.main,
  },
  headerText: {
    color: colorPalette.main,
    fontSize: 30,
  },
  overview: {
    marginHorizontal: 24,
  },
  infoBoxTitle: {
    color: colorPalette.main,
    fontSize: 16,
  },
  infoBoxDesc: {
    color: colorPalette.gray,
    fontSize: 12,
    marginBottom: 6,
  },
  energyConsumptionSummary: {
    flexDirection: 'row',
  },
  infoBox: {
    backgroundColor: colorPalette.white,
    width: 150,
    padding: 12,
    borderRadius: 6,
    marginRight: 12,
  },
});
