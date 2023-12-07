import {StyleSheet, Dimensions} from 'react-native';
const window = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#071A40',
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
    width: 80,
    height: 80,
  },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  desc: {fontSize: 16, textAlign: 'center', color: '#fff'},
  btnContainer: {flex: 1, gap: 15, width: '100%'},
});
