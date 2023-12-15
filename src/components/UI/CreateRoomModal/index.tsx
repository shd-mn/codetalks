import React, {Dispatch, SetStateAction, useState} from 'react';
import {Alert, Modal, Text, View} from 'react-native';
import Button from '../Button';
import styles from './createRoomModal.styles';
import Input from '../../Form/Input';
import {firebase} from '@react-native-firebase/database';
import Config from 'react-native-config';

type PropTypes = {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
};

const AddRoomModal = ({modalVisible, setModalVisible}: PropTypes) => {
  const [value, setValue] = useState('');

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Create Room</Text>
          <Input
            placeholder="Enter room name"
            value={value}
            onChange={setValue}
          />
          <Button
            title="Hide Modal"
            onPress={() => setModalVisible(!modalVisible)}
          />
          <Button title="Add Room" onPress={handleCreateRoom} />
        </View>
      </View>
    </Modal>
  );
};

export default AddRoomModal;
