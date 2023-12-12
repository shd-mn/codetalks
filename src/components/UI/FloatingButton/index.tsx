import React from 'react';
import {ActivityIndicator, View, Text, TouchableOpacity} from 'react-native';

import styles from './floatingButton.styles';

type PropTypes = {
  title?: string;
  isLoading?: boolean;
  icon?: any;
  onPress: () => void;
  theme?: 'primary' | 'secondary';
};

function FloatingButton({
  title,
  icon,
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
          {icon && icon}
          {title && <Text style={styles[`${theme}`].title}>{title}</Text>}
        </View>
      )}
    </TouchableOpacity>
  );
}

export default FloatingButton;
