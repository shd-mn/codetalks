import {StyleSheet} from 'react-native';
import {Colors} from '../../../styles/global';
export default StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
  },
  input: {
    marginBottom: 3,
    padding: 8,
    paddingHorizontal: 15,
    width: '100%',
    color: Colors.white,
    backgroundColor: Colors.bg_dark,
    borderRadius: 4,
    letterSpacing: 0.8,
  },
  error: {
    position: 'absolute',
    top: '100%',
    fontSize: 13,
    paddingHorizontal: 3,
    color: Colors.danger,
  },
});
