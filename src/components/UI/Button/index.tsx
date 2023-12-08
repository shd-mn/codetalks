import React from 'react';
import {ActivityIndicator, View, Text, TouchableOpacity} from 'react-native';

import styles from './buttonn.styles';

type PropTypes = {
  title: string;
  isLoading?: boolean;
  iconStart?: any;
  iconEnd?: any;
  onPress: () => void;
  theme?: 'primary' | 'secondary';
};

function Button({
  title,
  iconStart,
  iconEnd,
  isLoading = false,
  theme = 'primary',
  onPress,
}: PropTypes) {
  return (
    <TouchableOpacity
      style={styles[`${theme}`].container}
      onPress={onPress}
      disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <View style={styles[`${theme}`].btn_container}>
          {iconStart && iconStart}
          <Text style={styles[`${theme}`].title}>{title}</Text>
          {iconEnd && iconEnd}
        </View>
      )}
    </TouchableOpacity>
  );
}

export default Button;
