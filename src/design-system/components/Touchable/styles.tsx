import { Styles } from 'dripsy';

export default Styles.create({
  container: {
    alignItems: 'center',
    borderRadius: 16,
    marginX: 16,
    padding: 16,
  },
  primary: {
    backgroundColor: 'primary-500',
  },
  primaryDisabled: {
    backgroundColor: 'n-100',
  },
  primaryDisabledText: {
    color: 'n-400',
  },
  primaryIcon: {
    // tintColor: 'white', // TODO: check how to assign tint color without TS error
  },
  primaryPressed: {
    backgroundColor: 'primary-600',
  },
  primaryPressedText: {
    color: 'white',
  },
  primaryText: {
    color: 'white',
  },
  secondary: {
    backgroundColor: 'primary-200',
  },
  secondaryDisabled: {
    backgroundColor: 'transparent',
  },
  secondaryDisabledText: {
    color: 'n-400',
  },
  secondaryIcon: {
    // tintColor: 'primary-500', // TODO: check how to assign tint color without TS error
  },
  secondaryPressed: {
    backgroundColor: 'primary-500',
  },
  secondaryPressedText: {
    color: 'white',
  },
  secondaryText: {
    color: 'primary-500',
  },
  tertiary: {
    backgroundColor: 'transparent',
  },
  tertiaryDisabled: {
    backgroundColor: 'transparent',
  },
  tertiaryDisabledText: {
    color: 'n-400',
  },
  tertiaryIcon: {
    // tintColor: 'primary-500', // TODO: check how to assign tint color without TS error
  },
  tertiaryPressed: {
    backgroundColor: 'transparent',
  },
  tertiaryPressedText: {
    color: 'primary-600',
  },
  tertiaryText: {
    color: 'primary-500',
  },
  rowContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    height: 20,
    width: 20,
  },
  leftIcon: {
    marginRight: 8,
  },
  rightIcon: {
    marginLeft: 8,
  },
});
