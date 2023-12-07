import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './Button.styles';

type PropTypes = {
  title: string;
  onPress: () => void;
};

function Button({title, onPress}: PropTypes) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
