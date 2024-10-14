import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import {
  clearGpsTripsData,
  clearSummaryReportData,
  fetchAddressRequest,
  fetchGpsTripsRequest,
  fetchSummaryReportRequest,
  fetchTokenRequest,
} from '../../Store/Actions/Actions';
import moment from 'moment';
import DownloadIcon from '../../../assets/SVG/svg/DownloadIcon';
import CalendarIcon from '../../../assets/SVG/CalendarIcon';
import RightArrow from '../../../assets/SVG/svg/RightArrow';
import {backgroundColorNew} from '../../Color/color';
import {websocketDisconnect} from '../../Store/Actions/WebSocketActions';
import {convertToCSV} from '../../Utils/CSVutils';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';
import styles from './style';
import * as Constants from '../../Constants/Constant';
import {useTranslation} from 'react-i18next';

const convertMillisToTime = millis => {
  const hours = Math.floor(millis / (1000 * 60 * 60));
  const minutes = Math.floor((millis % (1000 * 60 * 60)) / (1000 * 60));
  return `${hours}h ${minutes}m`;
};

const TripItem = React.memo(({item, onShowAddress}) => {
  const {t} = useTranslation();
  console.log(8888888888, item);
  return (
    <View style={styles.tripItemContainer}>
      <View style={styles.statusIndicatorContainer}>
        <View style={styles.greenIndicator} />
        <View style={styles.line} />
        <View style={styles.redIndicator} />
      </View>
      <View style={styles.tripDetailsContainer}>
        <TripDetail
          address={item?.startAddress}
          time={item?.startTime}
          lat={item?.startLat}
          lng={item?.startLon}
          itemId={item.startPositionId}
          onShowAddress={onShowAddress}
        />
        <TripStats
          distance={item?.distance}
          averageSpeed={item?.averageSpeed}
          duration={item?.duration}
          t={t}
        />
        <TripDetail
          address={item?.endAddress}
          time={item?.endTime}
          lat={item?.endLat}
          lng={item?.endLon}
          itemId={item.endPositionId}
          onShowAddress={onShowAddress}
        />
      </View>
    </View>
  );
});

const TripDetail = ({address, time, lat, lng, itemId, onShowAddress}) => {
  const {fullAddressData, fullAddressCustomId} = useSelector(
    state => state.data,
  );

  return (
    <View style={styles.detailContainer}>
      {address || (fullAddressCustomId === itemId && fullAddressData) ? (
        <Text style={styles.locHistoryAddressText}>
          {address || fullAddressData}
        </Text>
      ) : (
        <ShowFullAddress
          lat={lat}
          lng={lng}
          itemId={itemId}
          onShowAddress={onShowAddress}
        />
      )}
      <Text style={styles.locHistoryTimeText}>
        {moment(time).utcOffset('+05:30').format('DD/MM/YYYY hh:mm A')}
      </Text>
    </View>
  );
};

const ShowFullAddress = ({lat, lng, itemId, onShowAddress}) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity
      style={styles.showAddressContainer}
      onPress={() => onShowAddress(itemId, lat, lng)}>
      <Text style={styles.showAddressText}>{t(Constants.SHOW_FULL_ADDRESS)}</Text>
      <RightArrow size={15} color={'#EF4D23'} />
    </TouchableOpacity>
  );
};

const TripStats = ({distance, averageSpeed, duration, t}) => (
  <View style={styles.tripStatsContainer}>
    <StatBox
      value={`${(distance / 1000).toFixed(2)} KM`}
      label={t(Constants.TOT_DIS)}
    />
    <VerticalLine />
    <StatBox
      value={`${(averageSpeed * 1.852).toFixed(2)} km/h`}
      label={t(Constants.AVG_SPEED)}
    />
    {/* <VerticalLine />
    <StatBox
      value={`${(averageSpeed * 1.852).toFixed(2)} km/h`}
      label="Max Speed"
    /> */}
    <VerticalLine />
    <StatBox value={convertMillisToTime(duration)} label={t(Constants.DURATION)} />
  </View>
);

const StatBox = ({value, label}) => (
  <View style={styles.statBox}>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const StopBox = ({label, value}) => (
  <View style={styles.stopBox}>
    <Text style={styles.locHistoryStopText}>{label}</Text>
    <Text style={styles.locHistoryStopCount}>{value}</Text>
  </View>
);

const VerticalLine = () => <View style={styles.locHistoryVerticalLine} />;

const LocationHistory = ({navigation, route}) => {
  const {deviceId, name, from, to} = route?.params;
  // console.log(777777, route);
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const [initialLoading, setInitialLoading] = useState(true);

  const {
    gpsTripsLoading,
    gpsTripsData,
    gpsTokenData,
    gpsSummaryData,
    gpsTripsError,
    gpsSummaryError,
  } = useSelector(state => state.data);

  const {wsConnected} = useSelector(state => state.wsData);

  const handleDownload = async () => {
    if (gpsTripsData && gpsTripsData.length > 0) {
      const csvData = convertToCSV(gpsTripsData);

      const path = `${RNFS.DocumentDirectoryPath}/gps_replay_data.csv`;

      // Write the file to the device
      await RNFS.writeFile(path, csvData, 'utf8')
        .then(() => {
          // Share the file
          Share.open({
            url: `file://${path}`,
            type: 'text/csv',
            filename: 'gps_replay_data',
            showAppsToView: true,
          })
            .then(res => console.log('File shared:', res))
            .catch(err => console.error('Error sharing file:', err));
        })
        .catch(err => {
          console.error('Error writing file:', err);
        });
    } else {
      // alert('No data available to download.');
    }
  };

  useEffect(() => {
    if (gpsTokenData) {
      setTimeout(() => setInitialLoading(false), 1000);
    }
  }, [gpsTokenData]);

  useEffect(() => {
    if (wsConnected) {
      dispatch(websocketDisconnect());
    }
  }, [wsConnected, dispatch]);

  useEffect(() => {
    if (!gpsTokenData) {
      dispatch(fetchTokenRequest());
    }
  }, [gpsTokenData, dispatch]);

  const handleShowAddress = (itemId, lat, lng) => {
    dispatch(fetchAddressRequest(lat, lng, itemId));
  };

  useFocusEffect(
    useCallback(() => {
      if (gpsTokenData) {
        dispatch(
          fetchSummaryReportRequest(
            gpsTokenData.email,
            gpsTokenData.password,
            deviceId,
            encodeURIComponent(from),
            encodeURIComponent(to),
            false,
          ),
        );
        dispatch(
          fetchGpsTripsRequest(
            gpsTokenData.email,
            gpsTokenData.password,
            deviceId,
            from,
            to,
          ),
        );
      }

      return () => {
        dispatch(clearGpsTripsData());
        dispatch(clearSummaryReportData());
      };
    }, [dispatch, deviceId, from, to, gpsTokenData]),
  );

  const handleRetry = () => {
    if (gpsTokenData) {
      dispatch(
        fetchSummaryReportRequest(
          gpsTokenData.email,
          gpsTokenData.password,
          deviceId,
          from,
          to,
          false,
        ),
      );
      dispatch(
        fetchGpsTripsRequest(
          gpsTokenData.email,
          gpsTokenData.password,
          deviceId,
          from,
          to,
        ),
      );
    }
  };

  const renderItem = useCallback(
    ({item}) => <TripItem item={item} onShowAddress={handleShowAddress} />,
    [],
  );

  const calculateAverageSpeed = () => {
    if (gpsTripsData && gpsTripsData.length > 0) {
      const totalSpeed = gpsTripsData.reduce(
        (acc, trip) => acc + (trip.averageSpeed || 0),
        0,
      );
      return (totalSpeed / gpsTripsData.length).toFixed(2);
    }
    return '0.00';
  };

  const shouldCalculateAverageSpeed =
    gpsSummaryData &&
    gpsSummaryData.length > 0 &&
    (gpsSummaryData[0]?.averageSpeed === 0 ||
      gpsSummaryData[0]?.averageSpeed === 'NaN');

  const averageSpeed = !shouldCalculateAverageSpeed
    ? (gpsSummaryData[0]?.averageSpeed * 1.852).toFixed(2)
    : calculateAverageSpeed();

  if (initialLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={backgroundColorNew} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.locHistoryHeaderBox}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.locHistoryTimeText}>{t(Constants.TRIP_SUM)}</Text>
          <Text style={styles.locHistoryTimeText}>
            {t(Constants.VEHICLE_NUM)}<Text style={styles.vehicleNumberText}>{name}</Text>
          </Text>
        </View>
        <View style={styles.summaryContainer}>
          <StopBox
            label={t(Constants.TOT_DIS)}
            value={
              gpsSummaryData && gpsSummaryData.length > 0
                ? `${(gpsSummaryData[0]?.distance / 1000).toFixed(2)} KM`
                : '0.00 KM'
            }
          />
          <StopBox label={t(Constants.AVG_SPEED)} value={`${averageSpeed} KM/H`} />
          <View style={styles.iconButtonsContainer}>
            <TouchableOpacity
              style={styles.downloadIconBox}
              onPress={handleDownload}>
              <DownloadIcon size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.locHistoryCalendarIconBox}
              onPress={() =>
                navigation.navigate('quickfilters', {
                  deviceId,
                  name,
                  navigationPath: 'LocationHistory',
                })
              }>
              <CalendarIcon size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* <View
        style={{
          // borderWidth: 1,
          // backgroundColor: '#FFE9E3',
          borderRadius: 8,
          marginHorizontal: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          elevation: 2,
          backgroundColor: '#FFFFFF',
        }}>
        <View style={{flex: 0.5, paddingVertical: 5}}>
          <Text style={{textAlign: 'center'}}>History</Text>
        </View>
        <View style={{flex: 0.5, paddingVertical: 5}}>
          <Text style={{textAlign: 'center'}}>Stops</Text>
        </View>
      </View> */}
      {gpsTripsError || gpsSummaryError ? (
        <View style={styles.locHistoryErrorContainer}>
          <Text style={styles.locHistoryErrorText}>
            Failed to fetch data. Please try again.
          </Text>
          <TouchableOpacity style={styles.retryButton} onPress={handleRetry}>
            <Text style={styles.retryButtonText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      ) : gpsTripsLoading ? (
        <ActivityIndicator
          size="large"
          color={backgroundColorNew}
          style={styles.locHistoryLoader}
        />
      ) : (
        <FlatList
          data={gpsTripsData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={
            <View style={styles.noDataView}>
              <Text style={styles.locHistorynoDataText}>{t(Constants.NO_TRIPS)}</Text>
            </View>
          }
          style={styles.tableContainer}
        />
      )}
    </View>
  );
};

export default LocationHistory;

