jest.mock('react-native-bootsplash', () => ({
  hide: jest.fn().mockResolvedValueOnce(),
}));

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('dripsy', () => ({
  DripsyProvider: jest.fn().mockResolvedValueOnce(),
  makeTheme: jest.fn().mockResolvedValueOnce(),
  styled: jest.fn().mockImplementation(() => jest.fn()),
  Styles: {
    create: jest.fn().mockResolvedValueOnce(),
  },
}));

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('react-native-keyboard-manager', () => ({
  setEnable: jest.fn().mockResolvedValueOnce(),
  setEnableAutoToolbar: jest.fn().mockResolvedValueOnce(),
  setKeyboardDistanceFromTextField: jest.fn(),
}));

jest.mock('@react-navigation/bottom-tabs', () => ({
  createBottomTabNavigator: jest.fn().mockResolvedValueOnce(),
}));
