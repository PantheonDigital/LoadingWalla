import React, {useEffect, useState, useMemo, useRef, useCallback} from 'react';
import {
  Animated,
  Easing,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {AnimatedRegion, Marker, Polyline} from 'react-native-maps';
import {backgroundColorNew} from '../../Color/color';
import PlayIcon from '../../../assets/SVG/svg/PlayIcon';
import Slider from '@react-native-community/slider';
import AlertsIcon from '../../../assets/SVG/svg/AlertsIcon';
import {
  fetchAddressRequest,
  fetchGpsStopsRequest,
  fetchPositionsRequest,
  fetchSummaryReportRequest,
} from '../../Store/Actions/Actions';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import moment from 'moment';
import PauseIcon from '../../../assets/SVG/svg/PauseIcon';
import FilterIcon from '../../../assets/SVG/svg/FilterIcon';
import PrevIcon from '../../../assets/SVG/svg/PrevIcon';
import NextIcon from '../../../assets/SVG/svg/NextIcon';
import {websocketDisconnect} from '../../Store/Actions/WebSocketActions';
import StopsIcon from '../../../assets/SVG/svg/StopsIcon';
import useConvertMillisToTime from '../../hooks/useConvertMillisToTime';
import styles from './style';
import * as Constants from '../../Constants/Constant';
import {useTranslation} from 'react-i18next';
import useTrackScreenTime from '../../hooks/useTrackScreenTime';
import PlayJourneyShimmer from '../../Components/Shimmer/PlayJourneyShimmer';
import TruckNavigationIcon from '../../../assets/SVG/svg/TruckNavigationIcon';
import VehicleIconSvg from '../../../assets/SVG/svg/VehicleIconSvg';

export default function PlayJourney({navigation, route}) {
  useTrackScreenTime('PlayJourney');
  const {deviceId, from, to, name, item} = route.params;
  // console.log(1111, 'PlayJourney Parmas----->', route);
  const {t} = useTranslation();

  const [sliderValue, setSliderValue] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [currentStopIndex, setCurrentStopIndex] = useState(0);
  const [mapType, setMapType] = useState('standard');
  const [currentStop, setCurrentStop] = useState(null);

  const {convertMillisToTime} = useConvertMillisToTime();
  const mapRef = useRef(null);
  // const markerRefs = useRef([]);

  const dispatch = useDispatch();
  const {
    gpsTokenData,
    gpsReplayLoading,
    gpsReplayData,
    gpsStopsData,
    gpsStopsLoading,
    fullAddressCustomId,
    fullAddressData,
    gpsSummaryLoading,
    gpsSummaryData,
  } = useSelector(state => {
    // console.log(55555, 'playJourney---->', state.data);
    return state.data;
  });

  const {wsConnected} = useSelector(state => state.wsData);

  const loading = gpsReplayLoading || gpsStopsLoading || gpsSummaryLoading;

  useEffect(() => {
    if (wsConnected) {
      dispatch(websocketDisconnect());
    }
  }, [wsConnected]);

  const toggleMapType = () => {
    setMapType(prevType => (prevType === 'standard' ? 'hybrid' : 'standard'));
  };

  // useFocusEffect(
  //   useCallback(() => {
  //     const defaultFrom =
  //       from || moment().utcOffset(330).startOf('day').toISOString();
  //     const defaultTo =
  //       to || moment().utcOffset(330).endOf('day').toISOString();

  //     const fetchData = async () => {
  //       await dispatch(
  //         fetchPositionsRequest(
  //           gpsTokenData?.email,
  //           gpsTokenData?.password,
  //           deviceId,
  //           defaultFrom,
  //           defaultTo,
  //         ),
  //       );

  //       await dispatch(
  //         fetchGpsStopsRequest(
  //           gpsTokenData?.email,
  //           gpsTokenData?.password,
  //           deviceId,
  //           defaultFrom,
  //           defaultTo,
  //         ),
  //       );

  //       await dispatch(
  //         fetchSummaryReportRequest(
  //           gpsTokenData?.email,
  //           gpsTokenData?.password,
  //           deviceId,
  //           defaultFrom,
  //           defaultTo,
  //           false,
  //         ),
  //       );
  //     };

  //     fetchData();

  //     return () => {};
  //   }, [dispatch, from, to, deviceId, gpsTokenData]),
  // );
  useFocusEffect(
    useCallback(() => {
      const defaultFrom =
        from || moment().utcOffset(330).startOf('day').toISOString();
      const defaultTo =
        to || moment().utcOffset(330).endOf('day').toISOString();

      const fetchData = async () => {
        await dispatch(
          fetchPositionsRequest(
            gpsTokenData?.email,
            gpsTokenData?.password,
            deviceId,
            defaultFrom,
            defaultTo,
          ),
        );
        await dispatch(
          fetchGpsStopsRequest(
            gpsTokenData?.email,
            gpsTokenData?.password,
            deviceId,
            defaultFrom,
            defaultTo,
          ),
        );
        await dispatch(
          fetchSummaryReportRequest(
            gpsTokenData?.email,
            gpsTokenData?.password,
            deviceId,
            defaultFrom,
            defaultTo,
            false,
          ),
        );
      };

      fetchData();
    }, [dispatch, from, to, deviceId, gpsTokenData]),
  );

  useEffect(() => {
    if (gpsStopsData && gpsStopsData.length > 0) {
      setCurrentStop(gpsStopsData[0]);
    }
  }, [gpsStopsData]);

  // useEffect(() => {
  //   if (markerRefs.current[currentStopIndex]) {
  //     markerRefs.current[currentStopIndex].showCallout();
  //   }
  // }, [currentStopIndex, gpsStopsData]);

  const coordinates = useMemo(
    () =>
      gpsReplayData?.map(point => ({
        latitude: point.latitude,
        longitude: point.longitude,
        course: point.course,
        speed: point.speed,
        time: point.deviceTime,
      })),
    [gpsReplayData],
  );

  const initialRegion = useMemo(() => {
    if (coordinates?.length) {
      const {latitude, longitude} = coordinates[0];
      return {
        latitude,
        longitude,
        latitudeDelta: 1,
        longitudeDelta: 1,
      };
    }
    return null;
  }, [coordinates]);

  const animation = useState(new Animated.Value(0))[0];

  useEffect(() => {
    if (isPlaying) {
      Animated.timing(animation, {
        toValue: 1,
        duration: playbackSpeed * 1000 * coordinates.length, // Adjust duration
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    } else {
      animation.stopAnimation(); // Pause the animation
    }
  }, [isPlaying, playbackSpeed, coordinates.length]);

  useEffect(() => {
    animation.addListener(({value}) => {
      const totalSegments = coordinates.length - 1;
      const currentSegmentIndex = Math.floor(value * totalSegments);
      const nextSegmentIndex = currentSegmentIndex + 1;

      if (nextSegmentIndex < coordinates.length) {
        const start = coordinates[currentSegmentIndex];
        const end = coordinates[nextSegmentIndex];
        const segmentProgress = (value * totalSegments) % 1;

        const newPosition = {
          latitude:
            start.latitude + (end.latitude - start.latitude) * segmentProgress,
          longitude:
            start.longitude +
            (end.longitude - start.longitude) * segmentProgress,
          course: start.course,
        };

        setCurrentPosition(newPosition);

        if (mapRef.current) {
          mapRef.current.animateToRegion(
            {
              latitude: newPosition.latitude,
              longitude: newPosition.longitude,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            },
            1000,
          );
        }
      }
    });
  }, [animation, coordinates]);

  // useEffect(() => {
  //   let interval = null;

  //   if (isPlaying && currentIndex < coordinates?.length) {
  //     const adjustedPlaybackSpeed = playbackSpeed * 1000; // Adjust playback speed

  //     interval = setInterval(() => {
  //       setCurrentIndex(prevIndex => {
  //         const newIndex = prevIndex + 1;
  //         const newPosition = coordinates[newIndex];

  //         if (newPosition) {
  //           // Set the new currentPosition
  //           setCurrentPosition(newPosition);

  //           // Animate marker movement
  //           animatedMarkerPosition
  //             .timing({
  //               latitude: newPosition.latitude,
  //               longitude: newPosition.longitude,
  //               duration: 4000 / adjustedPlaybackSpeed, // Adjusted duration for smoother movement
  //               useNativeDriver: true,
  //             })
  //             .start();

  //           setSliderValue(newIndex / (coordinates?.length - 1));
  //         }

  //         return newIndex;
  //       });
  //     }, 1000 / adjustedPlaybackSpeed); // Interval based on adjusted speed
  //   } else {
  //     clearInterval(interval);
  //   }

  //   return () => clearInterval(interval);
  // }, [isPlaying, currentIndex, coordinates, playbackSpeed]);

  const animatedMarkerPosition = useRef(
    new AnimatedRegion({
      latitude: coordinates?.[0]?.latitude || 0,
      longitude: coordinates?.[0]?.longitude || 0,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }),
  ).current;

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };
  const handleTogglePlayback = () => setIsPlaying(prev => !prev);

  const changePlaybackSpeed = speed => {
    setPlaybackSpeed(speed);
    if (isPlaying) {
      togglePlayback();
      togglePlayback();
    }
  };

  const goToNextStop = () => {
    if (currentStopIndex < gpsStopsData?.length - 1) {
      const newIndex = currentStopIndex + 1;
      setCurrentStopIndex(newIndex);
      const nextStop = gpsStopsData[newIndex];

      // Fetch the address for the next stop if not already fetched
      if (!nextStop.address && fullAddressCustomId !== nextStop.positionId) {
        dispatch(
          fetchAddressRequest(
            nextStop.latitude,
            nextStop.longitude,
            nextStop.positionId,
          ),
        );
      }

      animatedMarkerPosition
        .timing({
          latitude: nextStop.latitude,
          longitude: nextStop.longitude,
          duration: 500,
          useNativeDriver: true,
        })
        .start();

      setCurrentStop(nextStop);
      mapRef.current?.animateToRegion({
        latitude: nextStop.latitude,
        longitude: nextStop.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  };

  const goToPrevStop = () => {
    if (currentStopIndex > 0) {
      const newIndex = currentStopIndex - 1;
      setCurrentStopIndex(newIndex);
      const prevStop = gpsStopsData[newIndex];

      // Fetch the address for the previous stop if not already fetched
      if (!prevStop.address && fullAddressCustomId !== prevStop.positionId) {
        dispatch(
          fetchAddressRequest(
            prevStop.latitude,
            prevStop.longitude,
            prevStop.positionId,
          ),
        );
      }

      animatedMarkerPosition
        .timing({
          latitude: prevStop.latitude,
          longitude: prevStop.longitude,
          duration: 1000,
          useNativeDriver: false,
        })
        .start();

      setCurrentStop(prevStop);
      mapRef.current?.animateToRegion({
        latitude: prevStop.latitude,
        longitude: prevStop.longitude,
        latitudeDelta: 1,
        longitudeDelta: 1,
      });
    }
  };

  const totalStops = gpsStopsData ? gpsStopsData.length : 0;
  const totalRun = gpsSummaryData[0]?.distance / 1000;

  const totalDuration =
    gpsStopsData && gpsStopsData.length > 0
      ? gpsStopsData.reduce((acc, stop) => acc + stop.duration, 0)
      : 0;

  const formatDuration = duration => {
    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor((duration / (1000 * 60)) % 60);
    const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    const hoursStr = hours < 10 ? `0${hours}` : hours;
    const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
    const secondsStr = seconds < 10 ? `0${seconds}` : seconds;

    return `${hoursStr}:${minutesStr}:${secondsStr}`;
  };

  const isDataAvailable = () => {
    return (
      gpsTokenData &&
      gpsReplayData?.length > 0 &&
      gpsStopsData?.length > 0 &&
      gpsSummaryData?.length > 0
    );
  };

  const handleMarkerPress = (stop, index) => {
    // Fetch the address if it's not available and not already being fetched
    if (!stop.address && fullAddressCustomId !== stop.positionId) {
      dispatch(
        fetchAddressRequest(stop.latitude, stop.longitude, stop.positionId),
      );
    }
  };

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.playJourneyBottomContainer}>
          <View style={styles.controlsContainer}>
            <PlayJourneyShimmer />
          </View>
        </View>
      )}
      {!loading && !isDataAvailable() && (
        <View style={styles.noDataContainer}>
          <TouchableOpacity
            style={styles.calendarIconBox}
            onPress={() =>
              navigation.navigate('quickfilters', {
                deviceId,
                navigationPath: 'PlayJourney',
                name,
              })
            }>
            <FilterIcon size={20} color={backgroundColorNew} />
          </TouchableOpacity>
        </View>
      )}
      {!loading && isDataAvailable() && (
        <>
          <TouchableOpacity
            style={styles.calendarIconBox}
            onPress={() =>
              navigation.navigate('quickfilters', {
                deviceId,
                navigationPath: 'PlayJourney',
                name,
              })
            }>
            <FilterIcon size={25} color={backgroundColorNew} />
          </TouchableOpacity>
          <View style={styles.container}>
            {!loading && (
              <View style={styles.mapView}>
                {initialRegion && (
                  // <MapView
                  //   ref={mapRef}
                  //   style={StyleSheet.absoluteFillObject}
                  //   initialRegion={initialRegion}
                  //   // onLayout={handleMapLayout}
                  //   mapType={mapType}>
                  //   <Polyline
                  //     coordinates={coordinates}
                  //     strokeColor="blue"
                  //     strokeWidth={3}
                  //   />
                  //   {currentPosition && (
                  //     <Marker.Animated
                  //       coordinate={{
                  //         latitude: currentPosition.latitude,
                  //         longitude: currentPosition.longitude,
                  //       }}>
                  //       <View style={styles.markerContainer}>
                  //         <View style={styles.addressContainer}>
                  //           <Text style={styles.kmText}>
                  //             {`${Math.floor(
                  //               currentPosition.speed * 1.852,
                  //             )} km/h`}
                  //           </Text>
                  //           <Text style={styles.kmText}>
                  //             {`${moment(currentPosition.time)
                  //               .utcOffset(330)
                  //               .format('D MMM YYYY, h:mm A')}`}
                  //           </Text>
                  //         </View>
                  //         <View style={styles.arrowBottom} />
                  //         <View style={styles.truckIconContainer}>
                  //           <TruckNavigationIcon
                  //             size={50}
                  //             course={currentPosition.course}
                  //           />
                  //         </View>
                  //       </View>
                  //     </Marker.Animated>
                  //   )}
                  //   {gpsStopsData?.map((stop, index) => (
                  //     <Marker
                  //       key={`stop-${index}`}
                  //       ref={el => (markerRefs.current[index] = el)}
                  //       coordinate={{
                  //         latitude: stop.latitude,
                  //         longitude: stop.longitude,
                  //       }}
                  //       onPress={() => handleMarkerPress(stop, index)}>
                  //       <View style={styles.markerContainer}>
                  //         <View style={styles.addressContainer}>
                  //           <Text style={styles.kmText}>
                  //             {fullAddressCustomId === stop.positionId
                  //               ? fullAddressData
                  //               : stop.address || 'Click below to Show Address'}
                  //           </Text>
                  //         </View>
                  //         <View style={styles.arrowBottom} />
                  //         <View style={styles.truckIconContainer}>
                  //           <StopsIcon size={40} number={index + 1} />
                  //         </View>
                  //       </View>
                  //     </Marker>
                  //   ))}
                  // </MapView>

                  <MapView
                    ref={mapRef}
                    style={StyleSheet.absoluteFillObject}
                    initialRegion={initialRegion}
                    mapType={mapType}>
                    <Polyline
                      coordinates={coordinates}
                      strokeColor="blue"
                      strokeWidth={3}
                    />
                    {currentPosition && (
                      <Marker
                        coordinate={{
                          latitude: currentPosition.latitude,
                          longitude: currentPosition.longitude,
                        }}
                        rotation={currentPosition.course}
                        anchor={{x: 0.5, y: 0.5}}>
                        <VehicleIconSvg width={50} height={50} />
                      </Marker>
                    )}
                    {/* Render Stops */}
                    {gpsStopsData?.map((stop, index) => (
                      <Marker
                        key={`stop-${index}`}
                        coordinate={{
                          latitude: stop.latitude,
                          longitude: stop.longitude,
                        }}>
                        <StopsIcon size={40} number={index + 1} />
                      </Marker>
                    ))}
                  </MapView>
                )}
                <TouchableOpacity
                  style={styles.mapToggleButton}
                  onPress={toggleMapType}>
                  <Image
                    source={
                      mapType === 'standard'
                        ? require('../../../assets/satellite-view.png')
                        : require('../../../assets/satellites.png')
                    }
                    style={styles.playJourneyTouchableOpacityStyle}
                  />
                </TouchableOpacity>
                <View style={styles.extraButtonBox}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('stops', {deviceId, from, to})
                    }
                    style={styles.stopsBtnStyle}>
                    <AlertsIcon size={20} />
                    <Text style={styles.alertButtonText}>
                      {t(Constants.STOPS)}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.ctrlBtn}
                    onPress={goToPrevStop}>
                    <PrevIcon size={30} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.ctrlBtn}
                    onPress={goToNextStop}>
                    <NextIcon size={30} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
          <View style={styles.playJourneyBottomContainer}>
            <View style={styles.controlsContainer}>
              <TouchableOpacity
                style={styles.playPauseButton}
                // onPress={togglePlayback}>
                onPress={handleTogglePlayback}>
                {isPlaying ? (
                  <PauseIcon size={20} color={backgroundColorNew} />
                ) : (
                  <PlayIcon size={20} color={backgroundColorNew} />
                )}
              </TouchableOpacity>
              <View style={styles.playJourneySliderContainer}>
                <Slider
                  style={styles.playJourneySlider}
                  minimumValue={0}
                  maximumValue={1}
                  minimumTrackTintColor={backgroundColorNew}
                  maximumTrackTintColor="#FFDCD3"
                  thumbTintColor={backgroundColorNew}
                  value={sliderValue}
                  onValueChange={value => {
                    setSliderValue(value);
                    const newIndex = Math.round(
                      value * (coordinates?.length - 1),
                    );
                    setCurrentIndex(newIndex);
                    const newPosition = coordinates[newIndex];
                    setCurrentPosition(newPosition);
                    animatedMarkerPosition
                      .timing({
                        latitude: newPosition.latitude,
                        longitude: newPosition.longitude,
                        duration: 500,
                        useNativeDriver: true,
                      })
                      .start();
                    if (mapRef.current && newPosition) {
                      mapRef.current.animateToRegion({
                        latitude: newPosition?.latitude,
                        longitude: newPosition?.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                      });
                    }
                  }}
                />
              </View>
              <View style={styles.speedButtonsContainer}>
                <TouchableOpacity
                  style={[
                    styles.speedButton,
                    playbackSpeed === 1 && styles.activeSpeedButton,
                  ]}
                  onPress={() => changePlaybackSpeed(1)}>
                  <Text
                    style={[
                      styles.speedButtonText,
                      playbackSpeed === 1 && styles.activeSpeedButtonText,
                    ]}>
                    1X
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.speedButton,
                    playbackSpeed === 2 && styles.activeSpeedButton,
                  ]}
                  onPress={() => changePlaybackSpeed(2)}>
                  <Text
                    style={[
                      styles.speedButtonText,
                      playbackSpeed === 2 && styles.activeSpeedButtonText,
                    ]}>
                    2X
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.totalBox}>
              <View style={styles.stopBox}>
                <Text style={[styles.stopText, {color: '#3BA700'}]}>
                  {t(Constants.TOT_DIS)}
                </Text>
                <Text style={styles.stopCount}>
                  {Math.abs(totalRun).toFixed(2)} KM
                </Text>
              </View>
              <View style={styles.verticalLine} />
              <View style={styles.stopBox}>
                <Text style={[styles.stopText, {color: '#F50000'}]}>
                  {t(Constants.TOT_STOPS)}: {totalStops}
                </Text>
                <Text style={styles.stopCount}>
                  {formatDuration(totalDuration)}
                </Text>
              </View>
              <View style={styles.verticalLine} />
              <View style={styles.stopBox}>
                <Text style={[styles.stopText, {color: '#E0BD00'}]}>
                  {t(Constants.ENG_HRS)}
                </Text>
                <Text style={styles.stopCount}>
                  {convertMillisToTime(gpsSummaryData[0]?.engineHours)}
                </Text>
              </View>
            </View>
          </View>
        </>
      )}
    </View>
  );
}
