import { Styles } from 'dripsy';

import { SCREEN_PADDING_BOTTOM, SCREEN_PADDING_X } from 'constants/styles';

export default Styles.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    paddingX: 16,
  },
  content: {
    paddingX: SCREEN_PADDING_X,
  },
  title: {
    color: 'black',
    marginBottom: 4,
    marginTop: 24,
  },
  description: {
    color: 'black',
    marginBottom: 64,
  },
  emojiContainer: {
    marginBottom: 32,
  },
  bottomContainer: {
    paddingBottom: SCREEN_PADDING_BOTTOM,
  },
  buttons: {
    flexDirection: 'row',
    paddingX: SCREEN_PADDING_X,
  },
  button: {
    flex: 1,
    marginLeft: 20,
  },
  error: {
    color: 'error-500',
  },
});
