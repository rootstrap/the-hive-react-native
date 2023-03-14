export type { NativeStackScreenProps } from '@react-navigation/native-stack';

const AuthStackScreens = {
  CreateAccount: 'CreateAccount',
  SignIn: 'SignIn',
  SignUp: 'SignUp',
  Welcome: 'Welcome',
} as const;

const MainStackScreens = {
  Home: 'Home',
  Chats: 'Chats',
  Connections: 'Connections',
  Account: 'Account',
} as const;

export enum Stacks {
  AuthStack = 'AuthStack',
  MainStack = 'MainStack',
}

// NOTE: in case you want to include params you can append
/*

Record<...> & {
  [*-StackScreens.*]: {
    params
  };
};

*/

export type AuthStackParamList = Record<
  typeof AuthStackScreens[keyof typeof AuthStackScreens],
  undefined
>;

export type MainStackParamList = Record<
  typeof MainStackScreens[keyof typeof MainStackScreens],
  undefined
>;
