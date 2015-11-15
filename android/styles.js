import { PixelRatio, } from 'react-native';

export const NAV_BAR_HEIGHT = 56;

export default {
  customTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 7,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 17,
    letterSpacing: 0.5,
    margin: 16,
  },
  title: {
    fontSize: 17,
    letterSpacing: 0.5,
    color: '#333',
    fontWeight: '500',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 20,
    textAlign: 'center',
  },
  container: {
    tintColor: '#fff',
  },
  rightButtonStyle: {
    marginRight: 8,
  },
  leftButtonStyle: {
    marginLeft: 8,
  },
  delimiter: {
    borderBottomColor: 'rgba(0, 0, 0, .5)',
    borderBottomWidth: 1 / PixelRatio.get(),
  },
};
