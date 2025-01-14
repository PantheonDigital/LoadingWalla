import React from 'react';
import {Modal, View, Text, StyleSheet} from 'react-native';
import CommonToolbar from './CommonToolbar';
import styles from './style'

const ShowPermitModal = ({modalVisible, setModalVisible, permit}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      statusBarTranslucent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.permitmodalView}>
          <CommonToolbar
            title={'Permit Locations'}
            goBack={() => {
              setModalVisible(!modalVisible);
            }}
            isBack={true}
            isClose={true}
            modal={true}
          />
          <View style={styles.permitcontainer}>
            {permit?.map(p => (
              <View key={p?.id} style={styles.modalTextView}>
                <Text style={styles.modaTtext}>{p?.permit_name}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalView: {
//     margin: 30,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   container: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginTop: 10,
//   },
//   modalTextView: {
//     borderWidth: 1,
//     borderColor: PrivacyPolicy,
//     padding: 8,
//     borderRadius: 5,
//     backgroundColor: '#FFC5B5',
//     margin: 5,
//   },
//   modaTtext: {
//     color: titleColor,
//     fontSize: 14,
//     fontWeight: '700',
//     fontFamily: 'PlusJakartaSans-Bold',
//   },
//   button: {
//     borderWidth: 1,
//     padding: 10,
//     margin: 10,
//   },
// });

export default ShowPermitModal;
