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
    tintColor: colorFromCurrentTheme('$touchable-icon-primary-disabled'),
  } as NonNullable<SxPropWithTintColor>,
  primaryDisabledText: {
    color: 'n-400',
  },
  primaryIcon: {
    tintColor: colorFromCurrentTheme('$touchable-icon-primary'),
  } as NonNullable<SxPropWithTintColor>,
  primaryPressed: {
    backgroundColor: 'primary-600',
  },
  primaryPressedIcon: {
    tintColor: colorFromCurrentTheme('$touchable-icon-primary-pressed'),
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
    tintColor: colorFromCurrentTheme('$touchable-icon-secondary-disabled'),
  } as NonNullable<SxPropWithTintColor>,
  secondaryDisabledText: {
    color: 'n-400',
  },
  secondaryIcon: {
    tintColor: colorFromCurrentTheme('$touchable-icon-secondary'),
  } as NonNullable<SxPropWithTintColor>,
  secondaryPressed: {
    backgroundColor: 'primary-500',
  },
  secondaryPressedIcon: {
    tintColor: colorFromCurrentTheme('$touchable-icon-secondary-pressed'),
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
    tintColor: colorFromCurrentTheme('$touchable-icon-secondary-disabled'),
  } as NonNullable<SxPropWithTintColor>,
  tertiaryDisabledText: {
    color: 'n-400',
  },
  tertiaryIcon: {
    tintColor: colorFromCurrentTheme('$touchable-icon-tertiary'),
  } as NonNullable<SxPropWithTintColor>,
  tertiaryPressed: {
    backgroundColor: 'transparent',
  },
  tertiaryPressedIcon: {
    tintColor: colorFromCurrentTheme('$touchable-icon-tertiary-pressed'),
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
