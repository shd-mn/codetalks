import {StyleSheet} from 'react-native';
import {Colors} from '../../../styles/global';
export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.bg,
  },
  title: {
    fontSize: 28,
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 15,
  },
  recover: {
    marginTop: 'auto',
    marginBottom: 40,
    textAlign: 'center',
    color: Colors.white,
    padding: 10,
  },
});
