import { Styles } from 'dripsy';

export default Styles.create({
  container: {
    alignItems: 'center',
    borderRadius: 'medium',
    padding: 16,
  },
  primary: {
    backgroundColor: '$Button-Primary-Background',
  },
  primaryText: {
    color: '$Button-Primary-Label',
  },
  secondary: {
    backgroundColor: '$Button-Secondary-Background',
  },
  secondaryText: {
    color: '$Button-Secondary-Label',
  },
  tertiary: {
    backgroundColor: '$Button-Tertiary-Background',
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
});
