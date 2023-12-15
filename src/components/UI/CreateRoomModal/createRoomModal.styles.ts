import {StyleSheet} from 'react-native';
import {Colors} from '../../../styles/global';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    gap: 15,
    justifyContent: 'center',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,

    height: '50%',
    width: '100%',
    backgroundColor: Colors.primary_dark,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
    color: 'white',
  },
});
