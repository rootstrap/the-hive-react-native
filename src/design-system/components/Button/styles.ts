import { Styles } from 'dripsy';

export default Styles.create({
  container: {
    alignItems: 'center',
    borderRadius: 'medium',
    padding: 16,
  },
  label: {
    flex: 1,
    textAlign: 'center',
  },
  primary: {
    backgroundColor: '$Button-Primary-Background',
  },
  primaryDisabled: {
    backgroundColor: '$Button-Primary-Disabled-Background',
  },
  primaryDisabledText: {
    color: '$Button-Primary-Disabled-Text',
  },
  primaryPressed: {
    backgroundColor: '$Button-Primary-Pressed-Background',
  },
  primaryPressedText: {
    color: '$Button-Primary-Pressed-Text',
  },
  primaryText: {
    color: '$Button-Primary-Label',
  },
  secondary: {
    backgroundColor: '$Button-Secondary-Background',
  },
  secondaryDisabled: {
    backgroundColor: '$Button-Secondary-Disabled-Background',
  },
  secondaryDisabledText: {
    color: '$Button-Secondary-Disabled-Text',
  },
  secondaryPressed: {
    backgroundColor: '$Button-Secondary-Pressed-Background',
  },
  secondaryPressedText: {
    color: '$Button-Secondary-Pressed-Text',
  },
  secondaryText: {
    color: '$Button-Secondary-Label',
  },
  tertiary: {
    backgroundColor: '$Button-Tertiary-Background',
  },
  tertiaryDisabled: {
    backgroundColor: '$Button-Tertiary-Disabled-Background',
  },
  tertiaryDisabledText: {
    color: '$Button-Tertiary-Disabled-Text',
  },
  tertiaryPressed: {
    backgroundColor: '$Button-Tertiary-Pressed-Background',
  },
  tertiaryPressedText: {
    color: '$Button-Tertiary-Pressed-Text',
  },
  tertiaryText: {
    color: '$Button-Tertiary-Label',
  },
  large: {
    width: 'large',
  },
  medium: {
    width: 'medium',
  },
  small: {
    width: 'small',
  },
  icon: {
    height: 20,
    width: 20,
  },
  leftIcon: {
    paddingRight: 8,
  },
  rightIcon: {
    paddingLeft: 8,
  },
});
