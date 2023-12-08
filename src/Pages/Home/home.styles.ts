import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../styles/global';
const window = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.bg_dark,
  },
  bgImg: {
    position: 'absolute',
    width: window.width,
    height: window.height,
    opacity: 0.1,
  },
  logoContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 70,
    height: 70,
  },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1.5,
    color: Colors.white,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.white,
    marginBottom: 5,
  },
  desc: {fontSize: 16, textAlign: 'center', color: Colors.white, opacity: 0.7},
  btnContainer: {flex: 1, gap: 15, width: '100%'},
});
