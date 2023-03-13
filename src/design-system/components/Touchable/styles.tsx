import { Styles } from 'dripsy';

import { SxPropWithTintColor } from 'design-system/types';
import { colorFromCurrentTheme } from 'design-system/utils';

export default Styles.create({
  container: {
    alignItems: 'center',
    borderRadius: 16,
    padding: 16,
  },
  primary: {
    backgroundColor: 'primary-500',
  },
  primaryDisabled: {
    backgroundColor: 'n-100',
  },
  primaryDisabledIcon: {
    tintColor: colorFromCurrentTheme('n-400'),
  } as NonNullable<SxPropWithTintColor>,
  primaryDisabledText: {
    color: 'n-400',
  },
  primaryIcon: {
    tintColor: colorFromCurrentTheme('white'),
  } as NonNullable<SxPropWithTintColor>,
  primaryPressed: {
    backgroundColor: 'primary-600',
  },
  primaryPressedIcon: {
    tintColor: colorFromCurrentTheme('white'),
  } as NonNullable<SxPropWithTintColor>,
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
  secondaryDisabledIcon: {
    tintColor: colorFromCurrentTheme('n-400'),
  } as NonNullable<SxPropWithTintColor>,
  secondaryDisabledText: {
    color: 'n-400',
  },
  secondaryIcon: {
    tintColor: colorFromCurrentTheme('primary-500'),
  } as NonNullable<SxPropWithTintColor>,
  secondaryPressed: {
    backgroundColor: 'primary-500',
  },
  secondaryPressedIcon: {
    tintColor: colorFromCurrentTheme('white'),
  } as NonNullable<SxPropWithTintColor>,
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
  tertiaryDisabledIcon: {
    tintColor: colorFromCurrentTheme('n-400'),
  } as NonNullable<SxPropWithTintColor>,
  tertiaryDisabledText: {
    color: 'n-400',
  },
  tertiaryIcon: {
    tintColor: colorFromCurrentTheme('primary-500'),
  } as NonNullable<SxPropWithTintColor>,
  tertiaryPressed: {
    backgroundColor: 'transparent',
  },
  tertiaryPressedIcon: {
    tintColor: colorFromCurrentTheme('primary-600'),
  } as NonNullable<SxPropWithTintColor>,
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
