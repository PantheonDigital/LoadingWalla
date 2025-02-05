import {StyleSheet} from 'react-native';

import {
  privacyPolicy,
  textColor,
  GradientColor2,
  GradientColor3,
  pageBackground,
  inputColor,
  PrivacyPolicy,
  titleColor,
  white,
} from '../../Color/color';

export default StyleSheet.create({
  Container: {flex: 1, backgroundColor: '#FFFDFD'},
  truckItemBgStyle: {
    padding: 20,
    marginRight: 10,
    // marginBottom: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  truckItemUnselectBgStyle: {
    padding: 20,
    backgroundColor: inputColor,
    borderRadius: 8,
    marginRight: 10,
    // marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addLorryBtnTouchStyle: {
    marginLeft: 30,
    marginRight: 30,
  },
  MainContainer: {
    backgroundColor: white,
    flex: 1,
  },
  DashboardHeaderView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    elevation: 5,
    maxHeight: 60,
    padding: 10,
    backgroundColor: 'white',
    zIndex: 9999,
  },
  backIconView: {
    backgroundColor: '#fff',
    width: 38,
    height: 38,
    marginBottom: 24,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addLorryBtn: {
    flexDirection: 'row',
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 20,
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 38,
  },
  postLoadButton: {
    flexDirection: 'row',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitile: {
    color: textColor,
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Medium',
  },
  postLoadButtonTitile: {
    fontWeight: 'bold',
    color: textColor,
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  addLorryButtonTitile: {
    fontWeight: 'bold',
    color: textColor,
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  backgroundView: {
    flex: 1,
    // padding: 10,
    // backgroundColor: pageBackground,
    // height: "100%",
    justifyContent: 'center',
  },
  backgroundViewContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: pageBackground,
    height: '100%',
    justifyContent: 'center',
  },
  horizontalLine: {backgroundColor: '#AFAFAF', height: 1, marginVertical: 10},
  verticalLine: {
    backgroundColor: '#AFAFAF',
    width: 2,
    marginHorizontal: 15,
    height: '100%',
  },
  rowdirection: {flexDirection: 'row', alignItems: 'center'},
  smallImageHeaderTitle: {
    fontSize: 15,
    color: titleColor,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  textStyle: {
    color: PrivacyPolicy,
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  dashboardHeaderVerifiedTitle: {
    fontSize: 12,
    color: GradientColor2,
    fontFamily: 'PlusJakartaSans-SemiBold',
    marginLeft: 5,
  },
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  verifyTruck: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#ccc',
    paddingVertical: 3,
    paddingHorizontal: 15,
    marginRight: 10,
    elevation: 2,
    backgroundColor: white,
  },
  point: {
    height: 8,
    width: 8,
    backgroundColor: PrivacyPolicy,
    borderRadius: 4,
    marginRight: 20,
    marginLeft: 10,
  },
  title: {
    fontWeight: '700',
    color: 'black',
    fontSize: 22,
    width: '80%',
    textAlign: 'center',
    fontFamily: 'PlusJakartaSans-Medium',
  },
  rowDirection: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  bookingItem: (selected, id) => ({
    flex: 1,
    margin: 10,
    backgroundColor: selected === id ? GradientColor2 : '#000',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: GradientColor2,
  }),
  bookingTextItem: (selected, id) => ({
    color: selected === id ? '#fff' : '#000',
    fontFamily:
      selected === id ? 'PlusJakartaSans-SemiBold' : 'PlusJakartaSans-Regular',
    fontSize: 12,
  }),
  tabView: {
    flex: 1,
    marginTop: 60,
    paddingVertical: 10,
  },
  buttonTextStyle: {
    color: textColor,
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'PlusJakartaSans-Bold',
  },
  buttonstyle: {
    borderRadius: 8,
    justifyContent: 'center',
    padding: 14,
  },
  touchStyle: {
    marginBottom: 20,
    width: '50%',
    alignSelf: 'center',
  },
  addLorryTouchStyle: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
  },
  truckTypeItem: {
    // width: 60,
    height: 45,
    paddingHorizontal: 10,
    minWidth: 45,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f19e72',
  },
  TyuckTypeUnSelectItem: {
    height: 45,
    paddingHorizontal: 10,
    minWidth: 45,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: inputColor,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seeMoreModalView1: {
    backgroundColor: 'rgba(0,0,0, 0.4)',
    flex: 1,
  },
  seeMoreModalView2: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seeMoreModalView3: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    height: '55%',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  addLorryScrollView: {
    padding: 15,
    backgroundColor: 'white',
    flex: 1,
  },
  truckItemBgStyle: {
    padding: 20,
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f19e72',
  },
  unseleckBackground: {
    padding: 20,
    backgroundColor: inputColor,
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seeMoreTxt: {
    color: GradientColor2,
    fontWeight: '500',
    fontSize: 15,
    fontFamily: 'PlusJakartaSans-Medium',
  },
  skipTxt: {
    color: PrivacyPolicy,
    fontFamily: 'PlusJakartaSans-SemiBold',
    textDecorationLine: 'underline',
  },
  skipTxtBdColor: {
    borderColor: PrivacyPolicy,
  },
  skipTxtView: {
    alignItems: 'center',
    marginVertical: 20,
  },
  noteTxt: {
    marginLeft: 30,
    marginRight: 30,
    fontWeight: '400',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 15,
    color: titleColor,
  },
  searchLoadStyle: {
    flexDirection: 'row',
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  searchLoadTextStyle: {
    color: textColor,
    fontWeight: '700',
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  addLorryView1: {marginTop: 30, padding: 20},
  addLorryView2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  activeTxt: {fontSize: 18, fontWeight: '700', color: '#352422'},
  findLoadsContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#FFFDFD',
  },
  postItemView: {marginTop: 18},
  label: {
    fontWeight: '700',
    fontSize: 18,
    color: titleColor,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  ItemView: {marginTop: 20},
  postLoadBackgroundViewContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    // backgroundColor: pageBackground,
    // height: '100%',
    // borderWidth: 1,
  },
  scrollViewBox: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
  selectTrucType: {minWidth: '45%', maxWidth: '50%'},
});
