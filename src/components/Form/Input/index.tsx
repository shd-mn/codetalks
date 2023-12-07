import React from 'react';
import {TextInput} from 'react-native';
import styles from './input.styles';
type InputTypes = {
  placeholder: string;
};
function Input({placeholder}: InputTypes) {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.container}
      placeholderTextColor="#a2a2a2"
    />
  );
}

export default Input;
