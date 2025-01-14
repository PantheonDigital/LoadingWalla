import {Dimensions, StyleSheet} from 'react-native';
import {backgroundColorNew} from '../../Color/color';
export default StyleSheet.create({
  splashContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: backgroundColorNew,
  },
  splashImage: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width / 1.3,
  },
});
