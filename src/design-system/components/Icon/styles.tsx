import { Styles } from 'dripsy';

import { DripsyStylesPropWithTintColor } from 'design-system/types';
import { colorFromCurrentTheme } from 'design-system/utils';

const styles = Styles.create<DripsyStylesPropWithTintColor>({
  touchableContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 40,
    minWidth: 40,
  },
  focused: {
    tintColor: colorFromCurrentTheme('$main-tab-nav-icon-focused'),
  },
  unfocused: {
    tintColor: colorFromCurrentTheme('$main-tab-nav-icon-unfocused'),
  },
});

export default styles;
