import { Styles } from 'dripsy';

const styles = Styles.create({
  label: {
    marginBottom: 8,
  },
  required: {
    color: 'error-500',
  },
  container: {
    alignItems: 'center',
    borderColor: 'primary-300',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    height: 48,
    paddingX: 16,
    width: '100%',
  },
  date: {
    flex: 1,
  },
});

export default styles;
