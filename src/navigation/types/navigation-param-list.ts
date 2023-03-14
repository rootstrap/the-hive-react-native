type CreateAccountScreenParams = {
  email: string;
  password: string;
  dateOfBirth: string;
};

type CreateAccountSuccessScreenParams = {
  emoji: string;
  displayName: string;
};

type NavigationParamList = {
  Account: undefined;
  Chats: undefined;
  Connections: undefined;
  CreateAccount: CreateAccountScreenParams;
  CreateAccountSuccess: CreateAccountSuccessScreenParams;
  Home: undefined;
  MainTab: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Welcome: undefined;
};

export default NavigationParamList;
