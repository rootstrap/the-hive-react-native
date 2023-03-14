import { StyleSheet } from 'react-native';

export const ICON_SIZE = 28;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    marginTop: 16,
  },
  emoji: {
    fontSize: 24,
    opacity: 0.5,
  },
  emojiFocused: {
    opacity: 1,
  },
  label: {
    fontSize: 11,
    fontFamily: 'LeagueSpartan-Medium',
    color: '$main-tab-nav-text',
  },
  labelFocused: {
    color: '$main-tab-nav-text-focused',
  },
});

export default styles;
