import {StyleSheet} from 'react-native';
import {GradientColor3, textColor, titleColor} from '../../Color/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFDFD',
  },
  commonToolbar: {
    marginTop: 10,
    marginBottom: 30,
  },
  otpSection: {
    flex: 1,
  },
  otpLabel: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '700',
    fontFamily: 'PlusJakartaSans-Bold',
    color: titleColor,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
    color: titleColor,
  },
  resendBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  manualVerification: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e1eedf',
    borderRadius: 5,
  },
  manualText: {
    fontSize: 16,
    flex: 1,
    fontWeight: '700',
    fontFamily: 'PlusJakartaSans-Bold',
    color: titleColor,
  },
  manualBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#119500',
    backgroundColor: '#119500',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
  },
  resendContainer: {
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 5,
    borderColor: '#ddd',
  },
  resendText: {
    textDecorationLine: 'underline',
    color: GradientColor3,
    fontWeight: '600',
    fontFamily: 'PlusJakartaSans-Bold',
  },
  counter: {
    color: titleColor,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  imageUploader: {
    borderWidth: 2,
    borderColor: GradientColor3,
    borderStyle: 'dotted',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    marginTop: 15,
    marginBottom: 8,
  },
  uploadText: {
    fontSize: 14,
    color: '#888',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  smallText: {
    fontSize: 12,
    // marginBottom: 20,
    color: '#888',
  },
  label: {
    fontSize: 15,
    color: titleColor,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  buttonTextStyle: {
    color: textColor,
    fontWeight: '700',
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  buttonstyle: {
    flexDirection: 'row',
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '60%',
    // marginBottom: 20,
  },
  buttonContainer: {
    borderWidth: 2,
    borderColor: GradientColor3,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
    width: '100%',
    alignSelf: 'center',
  },
  buttonText: {
    color: GradientColor3,
    fontWeight: '700',
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Bold',
  },

  //
  activityIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityIndicatorBox: {width: '100%', height: '100%', flex: 1},
});
