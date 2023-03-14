import { Styles } from 'dripsy';

import { SCREEN_PADDING_X } from 'constants/styles';

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
    marginBottom: 4,
    marginTop: 24,
  },
  description: {
    marginBottom: 28,
  },
  inputContainer: {
    marginBottom: 16,
  },
  error: {
    color: 'error-500',
  },
});

export default styles;
