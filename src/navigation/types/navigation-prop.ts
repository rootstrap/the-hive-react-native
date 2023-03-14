import { NativeStackScreenProps } from '@react-navigation/native-stack';

import NavigationParamList from 'navigation/types/navigation-param-list';

type NavigationProp<ScreenName extends keyof NavigationParamList> = NativeStackScreenProps<
  NavigationParamList,
  ScreenName
>;

export default NavigationProp;
