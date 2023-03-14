import React from 'react';
import { ImageBackground } from 'react-native';

import { Text, Touchable, images } from 'design-system';
import { SafeAreaView, View } from 'dripsy';
import strings from 'localization';

import EmojiPicker from 'common/EmojiPicker';

import styles from './styles';
import { CreateAccountSuccessPropTypes } from './types';

const confetti = images.confetti();

const CreateAccountSuccessModal: React.FunctionComponent<CreateAccountSuccessPropTypes> = ({
  navigation: { pop },
  route: {
    params: { emoji, displayName },
  },
}) => (
  <SafeAreaView sx={styles.container}>
    <View sx={styles.header} />
    <ImageBackground source={confetti} style={styles.content}>
      <Text variant="h3" sx={styles.title}>
        {strings.SIGN_UP.CREATE_ACCOUNT_SUCCESS.title}
      </Text>
      <View sx={styles.centerContainer}>
        <EmojiPicker emoji={emoji} size="big" containerSx={styles.emojiContainer} />
        <Text variant="h4">{displayName}</Text>
      </View>
    </ImageBackground>
    <View sx={styles.buttonContainer}>
      <Text variant="p-md-regular" sx={styles.description}>
        {strings.SIGN_UP.CREATE_ACCOUNT_SUCCESS.description}
      </Text>
      <Touchable
        testID="begin-button"
        accessibilityState={{
          disabled: false,
        }}
        onPress={() => pop()}>
        {strings.SIGN_UP.CREATE_ACCOUNT_SUCCESS.button}
      </Touchable>
    </View>
  </SafeAreaView>
);

export default CreateAccountSuccessModal;
