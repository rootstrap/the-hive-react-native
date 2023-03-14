import { Styles } from 'dripsy';

import { SCREEN_PADDING_BOTTOM, SCREEN_PADDING_X } from 'constants/styles';

const styles = Styles.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingX: 16,
  },
  back: {
    backgroundColor: 'primary-200',
    borderRadius: 20,
    marginRight: 22,
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
    marginBottom: 28,
  },
  inputContainer: {
    marginBottom: 16,
  },
  bottomContainer: {
    paddingBottom: SCREEN_PADDING_BOTTOM,
  },
  error: {
    color: 'error-500',
  },
});

export default styles;
