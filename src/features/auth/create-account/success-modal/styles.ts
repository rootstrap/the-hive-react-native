import { StyleSheet } from 'react-native';

import { Styles } from 'dripsy';

import { SCREEN_PADDING_BOTTOM, SCREEN_PADDING_X } from 'constants/styles';

const stylesRN = StyleSheet.create({
  content: {
    flex: 1,
  },
});

const styles = Styles.create({
  container: {
    flex: 1,
  },
  header: {
    height: 40,
  },
  title: {
    color: 'black',
    marginBottom: 4,
    marginTop: 24,
    textAlign: 'center',
  },
  centerContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  emojiContainer: {
    marginBottom: 14,
  },
  buttonContainer: {
    paddingBottom: SCREEN_PADDING_BOTTOM,
    paddingX: SCREEN_PADDING_X,
  },
  description: {
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default { ...styles, ...stylesRN };
