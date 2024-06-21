import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {PrivacyPolicy, backgroundColorNew, titleColor} from '../Color/color';
import SettingIcon from '../../assets/SVG/svg/SettingIcon';
import FuelIcon from '../../assets/SVG/svg/FuelIcon';
import BatteryIcon from '../../assets/SVG/svg/BatteryIcon';
import NetworkIcon from '../../assets/SVG/svg/NetworkIcon';
import GeoFencingIcon from '../../assets/SVG/svg/GeoFencingIcon';
import DamageIcon from '../../assets/SVG/svg/DamageIcon';

const GpsItem = ({navigation, item, icon}) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.imgContainer}>
          <View style={styles.imgBox}>
            <Image source={{uri: item.image}} style={styles.image} />
          </View>
          <View />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('trackingtruck', {item: item})}
          style={styles.textContainer}>
          <Text style={styles.highlightText}>{item.model}</Text>
          <View style={styles.ignBox}>
            <Text>Active</Text>
            <View style={styles.verticalLine} />
            <Text>Ignition on</Text>
          </View>
          <View style={styles.iconBox}>
            <FuelIcon size={20} />
            <BatteryIcon size={20} />
            <NetworkIcon size={20} />
            <GeoFencingIcon size={20} />
            <DamageIcon size={20} />
          </View>
        </TouchableOpacity>
        <View>
          <View style={styles.distanceBox}>
            <Text style={styles.highlightText}>300 KM</Text>
            <Text style={styles.distanceText}>Today Distance</Text>
          </View>
        </View>
      </View>
      <View style={styles.expiryDate}>
        <Text
          style={
            item.status === 'Expired' ? styles.expiredText : styles.activeText
          }>
          Expire on Feb 20, 2025
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('GpsSetting')}>
          <SettingIcon
            size={20}
            color={
              item.status === 'Expired' ? backgroundColorNew : PrivacyPolicy
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GpsItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 20,
    elevation: 2,
  },
  itemContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  modelText: {
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  expiredText: {
    color: backgroundColorNew,
    fontFamily: 'PlusJakartaSans-Italic',
    fontSize: 12,
  },
  activeText: {
    color: PrivacyPolicy,
    fontFamily: 'PlusJakartaSans-Italic',
    fontSize: 12,
  },
  expiryDate: {
    // borderWidth: 1,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  highlightText: {
    color: titleColor,
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 16,
    textAlign: 'left',
  },
  distanceBox: {
    // borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 6,
    // elevation: 2,
    backgroundColor: '#f7f7f7',
  },
  distanceText: {
    color: PrivacyPolicy,
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 12,
    textAlign: 'right',
  },
  iconBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1,
    marginVertical: 10,
    // paddingVertical: 5,
  },
  verticalLine: {
    backgroundColor: '#AFAFAF',
    width: 2,
    marginHorizontal: 10,
    height: '80%',
  },
  ignBox: {flexDirection: 'row', alignItems: 'center'},
  imgContainer: {
    // borderWidth: 1,
    padding: 5,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  imgBox: {
    backgroundColor: '#f7f7f7',
    borderRadius: 6,
    width: 60,
    height: 60,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
