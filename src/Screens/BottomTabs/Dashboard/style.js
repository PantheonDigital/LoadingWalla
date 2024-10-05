import {StyleSheet} from 'react-native';
import {
  textColor,
  pageBackground,
  white,
  black,
  PrivacyPolicy,
  titleColor,
  GradientColor3,
  GradientColor2,
} from '../../../Color/color';

export default StyleSheet.create({
  dashboardSwiper: width => ({
    height: width / 2
  }),
  setFlex: {flex: 1},
  dashboardLoadContainer: {
    flex: 1, 
    backgroundColor: '#FFFFFF', 
    marginBottom: 60
  },
  activeDotStyle: {width: 15},
  contentShimmer: {flex: 1}, 
  searchContainer: {
    backgroundColor: pageBackground,
    flex: 1,
  },
  searchPadding: {
    padding: 20
  },
  searchCloseBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  myLorryFlatList: {flex: 1, paddingHorizontal: 5},
  dashboardContainer: {
    flex: 1, 
    backgroundColor: '#FFFFFF', 
    marginBottom: 60
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
  backgroundView: {
    padding: 20,
    backgroundColor: pageBackground,
    height: '100%',
  },
  title: {
    fontWeight: '700',
    color: black,
    fontSize: 22,
    width: '80%',
    textAlign: 'center',
    fontFamily: 'PlusJakartaSans-Medium',
  },
  MainContainer: {
    flex: 1,
    backgroundColor: '#FFFDFD',
    // padding: 20,
  },
  findLocationBox: {
    paddingHorizontal: 10,
    backgroundColor: pageBackground,
    elevation: 2,
    alignItems: 'center',
  },
  locationModalStyle: {
    elevation: 2,
    zIndex: 10,
    maxHeight: 250,
    borderRadius: 10,
    backgroundColor: '#fff',
    position: 'absolute',
    width: '100%',
    top: 80,
  },
  DashboardHeaderView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    elevation: 5,
    maxHeight: 60,
    padding: 10,
    backgroundColor: white,
    zIndex: 9999,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  locationTitle: {
    fontSize: 16,
    color: titleColor,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  searchLocationView: top => ({
    elevation: 2,
    zIndex: 10,
    borderRadius: 10,
    maxHeight: 250,
    padding: 10,
    backgroundColor: white,
    position: 'absolute',
    width: '100%',
    top: top,
  }),
  truckTitle: {
    fontSize: 14,
    color: 'black',
    fontWeight: '700',
    fontFamily: 'PlusJakartaSans-Medium',
  },
  truckItem: {
    padding: 20,
    marginRight: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f19e72',
  },
  unseleckBackground: {
    padding: 20,
    backgroundColor: '#ddd',
    borderRadius: 8,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  findBtnStyle: {
    flexDirection: 'row',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 50,
  },
  scrollView: {
    marginTop: 60,
    padding: 10,
    backgroundColor: '#FFFDFD',
    // borderWidth: 1,
    // marginBottom: 60,
  },
  touchStyle: {
    marginVertical: 20,
    width: '50%',
    alignSelf: 'center',
  },
  buttonstyle: {
    flexDirection: 'row',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    color: textColor,
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'PlusJakartaSans-Bold',
  },

  lottieView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFFDFD',
    overflow: 'hidden',
  },
  lottieText: {
    fontSize: 18,
    color: PrivacyPolicy,
    fontFamily: 'PlusJakartaSans-Medium',
  },
  lottie: {height: 250, width: 250},

  //
  card: {
    borderRadius: 8,
    elevation: 2,
    backgroundColor: white,
    padding: 10,
    margin: 10,
    marginBottom: 10,
  },
  horizontalLine: {backgroundColor: '#AFAFAF', height: 1, marginVertical: 10},
  verticalLine: {
    backgroundColor: '#AFAFAF',
    width: 2,
    marginHorizontal: 15,
    height: '100%',
  },
  textStyle: {
    color: PrivacyPolicy,
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  rowdirection: {flexDirection: 'row', alignItems: 'center'},
  smallImageHeaderTitle: {
    fontSize: 15,
    color: titleColor,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  point: {
    height: 8,
    width: 8,
    backgroundColor: PrivacyPolicy,
    borderRadius: 4,
    marginRight: 20,
    marginLeft: 10,
  },
  findButtonContainer: {
    marginLeft: 20,
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: GradientColor3,
    borderColor: GradientColor3,
  },
  findButtonText: {
    fontSize: 13,
    color: white,
    fontFamily: 'PlusJakartaSans-Bold',
    textAlign: 'center',
  },
  btnContainer: {flexDirection: 'row', justifyContent: 'flex-end'},
  searchFilter: {
    backgroundColor: white,
    flexDirection: 'row',
    elevation: 2,
    marginTop: 18,
    borderRadius: 8,
    marginHorizontal: 1,
  },
  locationIcon: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  searchInput: {
    flex: 4,
    // marginLeft: 10,
    alignSelf: 'center',
    color: PrivacyPolicy,
  },
  loactionModalStyle: {paddingHorizontal: 15},

  ///////

  Container: {flex: 1, backgroundColor: '#FFFDFD', marginBottom: 60},

  button: {
    borderRadius: 20,
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 38,
  },
  buttonTitile: {
    color: textColor,
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Medium',
  },
  backgroundView2: {
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
    // paddingVertical: 10,
    // borderWidth: 1,
    backgroundColor: '#FFFDFD',
  },

  buttonstyle2: {
    borderRadius: 8,
    justifyContent: 'center',
    padding: 14,
  },
  touchStyle2: {
    marginBottom: 20,
    width: '50%',
    alignSelf: 'center',
  },

  // MyTabBar
  tabsContainer: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#E2E2E2',
    borderRadius: 8,
    padding: 3,
    // borderWidth: 1,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    gap: 8,
    // borderWidth: 1,
  },
  tabBgColor: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
    borderRadius: 5,
    // borderWidth: 1,
  },
});
