import React from 'react';

import { Text, Touchable } from 'design-system';
import { SafeAreaView } from 'dripsy';

import styles from './styles';
import { CreateAccountPropTypes } from './types';

const CreateAccountScreen: React.FunctionComponent<CreateAccountPropTypes> = ({
  navigation: { pop },
}) => {
  return (
    <SafeAreaView sx={styles.container}>
      <Touchable onPress={() => pop()}>
        <Text>Back</Text>
      </Touchable>
    </SafeAreaView>
  );
};

export default CreateAccountScreen;
