import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {AnimatedRegion, Marker, Circle} from 'react-native-maps';
import {useDispatch, useSelector} from 'react-redux';
import Slider from '@react-native-community/slider';
import GpsIcon2 from '../../../assets/SVG/svg/GpsIcon2';
import ActiveLocation from '../../../assets/SVG/svg/ActiveLocation';
import Button from '../../Components/Button';
import {backgroundColorNew, PrivacyPolicy, textColor} from '../../Color/color';
import {
  addGeofenceRequest,
  clearGeofenceAddedData,
} from '../../Store/Actions/Actions';
import AlertBox from '../../Components/AlertBox';

const getLivePositions = (wsMessages, deviceId) => {
  return wsMessages
    .flatMap(message => message.positions || [])
    .filter(position => position.deviceId === deviceId)
    .map(({deviceId, latitude, longitude, course}) => ({
      deviceId,
      latitude,
      longitude,
      course,
    }));
};

const AddGeozone = ({navigation, route}) => {
  const {deviceId, lat, lon} = route.params;

  const dispatch = useDispatch();
  const mapRef = useRef(null);
  const [livePositions, setLivePositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sliderValue, setSliderValue] = useState(0.5);
  const [geozoneName, setGeozoneName] = useState('');

  const {wsMessages, wsConnected} = useSelector(state => state.wsData);
  const {addGeofenceStatus} = useSelector(state => state.data);

  useEffect(() => {
    if (wsConnected) {
      const position = getLivePositions(wsMessages, deviceId);
      setLivePositions(position);

      if (position.length > 0) {
        setLoading(false);
        updateMarkerPosition(position[position.length - 1]);
      }
    } else {
      setLoading(false);
    }
  }, [wsMessages, wsConnected]);

  const animatedMarkerPosition = useRef(
    new AnimatedRegion({
      latitude: livePositions.length > 0 ? livePositions[0].latitude : lat || 0,
      longitude:
        livePositions.length > 0 ? livePositions[0].longitude : lon || 0,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }),
  ).current;

  const updateMarkerPosition = position => {
    animatedMarkerPosition
      .timing({
        latitude: position.latitude,
        longitude: position.longitude,
        duration: 1000,
        useNativeDriver: false,
      })
      .start();
  };

  const handleSave = () => {
    dispatch(
      addGeofenceRequest(
        `CIRCLE (${lat} ${lon}, ${sliderValue * 5000})`,
        deviceId,
        geozoneName,
      ),
    );
  };

  useEffect(() => {
    if (addGeofenceStatus !== null) {
      if (addGeofenceStatus === 200) {
        AlertBox('Geofence Added Successfully!');
        navigation.navigate('geozones', {deviceId, lat, lon});
        setGeozoneName('');
        setSliderValue(0.5);
        dispatch(clearGeofenceAddedData());
      } else {
        AlertBox('Error in Adding Geofencing.');
        dispatch(clearGeofenceAddedData());
      }
    }
  }, [addGeofenceStatus]);

  const animateToDevicePosition = () => {
    if (livePositions.length > 0 && mapRef.current) {
      const latestPosition = livePositions[livePositions.length - 1];
      mapRef.current.animateToRegion({
        latitude: latestPosition.latitude,
        longitude: latestPosition.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        {loading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color={backgroundColorNew} />
          </View>
        ) : (
          <MapView
            ref={mapRef}
            style={StyleSheet.absoluteFillObject}
            initialRegion={{
              latitude:
                livePositions.length > 0 ? livePositions[0].latitude : lat || 0,
              longitude:
                livePositions.length > 0
                  ? livePositions[0].longitude
                  : lon || 0,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            {livePositions.length > 0 && (
              <>
                <Marker.Animated coordinate={animatedMarkerPosition}>
                  <ActiveLocation size={40} course={50} />
                </Marker.Animated>
                <Circle
                  center={livePositions[livePositions.length - 1]}
                  radius={sliderValue * 5000}
                  fillColor="rgba(135,206,250,0.3)"
                  strokeColor={backgroundColorNew}
                  strokeWidth={1}
                />
              </>
            )}
          </MapView>
        )}
        <TouchableOpacity
          style={styles.gpsButton}
          onPress={animateToDevicePosition}>
          <GpsIcon2 size={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.geozoneContainer}>
          <Text style={styles.geozoneText}>Geofence radius</Text>
          <View style={styles.sliderContainer}>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={1}
              value={sliderValue}
              onValueChange={setSliderValue}
              minimumTrackTintColor={backgroundColorNew}
              maximumTrackTintColor={PrivacyPolicy}
              thumbTintColor={backgroundColorNew}
              thumbImage={require('../../../assets/slider.png')}
            />
            <Text style={styles.textvalue}>
              {((sliderValue * 5000) / 1000).toFixed(1)} KM
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Geozone name:</Text>
            <TextInput
              placeholder="Geozone name"
              placeholderTextColor="#8A8A8A"
              style={styles.textInput}
              value={geozoneName}
              onChangeText={setGeozoneName}
            />
          </View>
        </View>

        <Button
          title="Save"
          onPress={handleSave}
          textStyle={styles.btnText}
          style={styles.btnStyle}
        />
      </View>
    </View>
  );
};

export default AddGeozone;

const styles = StyleSheet.create({
  container: {flex: 1},
  mapContainer: {flex: 1},
  loaderContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  gpsButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    elevation: 3,
    position: 'absolute',
    bottom: 150,
    right: 10,
  },
  bottomContainer: {
    backgroundColor: '#FFF7F5',
    position: 'absolute',
    bottom: 0,
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
    elevation: 3,
    borderColor: '#F7F7F7',
    borderWidth: 1,
  },
  geozoneContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 10,
    borderColor: '#00000029',
    borderWidth: 1,
  },
  geozoneText: {
    marginHorizontal: 15,
    fontSize: 10,
    fontFamily: 'PlusJakartaSans-Regular',
  },
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  slider: {width: '75%'},
  textvalue: {
    width: '20%',
    textAlign: 'center',
    borderRadius: 3,
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 12,
    borderWidth: 0.3,
    paddingVertical: 5,
    marginRight: 5,
    backgroundColor: '#FFFFFF',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  inputLabel: {
    marginRight: 15,
    fontSize: 12,
    fontFamily: 'PlusJakartaSans-Regular',
  },
  textInput: {
    borderBottomWidth: 1,
    flex: 1,
    paddingVertical: 0,
    fontSize: 12,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  btnStyle: {
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 20,
    width: '100%',
  },
  btnText: {
    color: textColor,
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Bold',
  },
});