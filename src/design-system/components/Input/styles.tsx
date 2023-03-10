import { Styles } from 'dripsy';

export default Styles.create({
  content: {
    alignItems: 'center',
    backgroundColor: '$TextInput-Background',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    height: 48,
  },
  name: {
    marginBottom: 8,
  },
  error: {
    color: '$TextInput-Error',
    marginTop: 5,
    minHeight: 24,
  },
  input: {
    color: '$TextInput-Value',
    flex: 1,
    paddingX: 16,
  },
  toggle: {
    width: 30,
    aspectRatio: 1,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    width: 24,
  },
});
