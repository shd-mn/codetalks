import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {Colors} from '../../../styles/global';
type BaseStyleTypes = {
  container: ViewStyle;
  btn_container: ViewStyle;
  title: TextStyle;
};

const baseStyle: BaseStyleTypes = {
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  btn_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: 1,
    padding: 1,
    color: Colors.white,
  },
};
export default {
  primary: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
      backgroundColor: Colors.primary,
    },
  }),
  secondary: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
      backgroundColor: Colors.secondary_dark,
    },
  }),
};
