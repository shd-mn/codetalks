import React, {Dispatch, SetStateAction, useState} from 'react';
import {Alert, Modal, Text, View} from 'react-native';
import Button from '../Button';
import styles from './createRoomModal.styles';
import Input from '../../Form/Input';

type PropTypes = {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
};

const AddRoomModal = ({modalVisible, setModalVisible}: PropTypes) => {
  const [value, setValue] = useState('');
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Input
              placeholder="Create Server Room"
              value={value}
              onChange={setValue}
            />
            <Button
              title="Hide Modal"
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddRoomModal;
