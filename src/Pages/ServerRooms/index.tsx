import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import FloatingButton from '../../components/UI/FloatingButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './serverRooms.styles';
import {Colors} from '../../styles/global';
import AddRoomModal from '../../components/UI/AddRoomModal';

function ServerRooms() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <AddRoomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      <FloatingButton
        icon={<Icon name="plus" size={30} color={Colors.white} />}
        onPress={() => setModalVisible(true)}
      />
    </SafeAreaView>
  );
}

export default ServerRooms;
