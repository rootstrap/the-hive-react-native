import { Styles } from 'dripsy';

export default Styles.create({
  content: {
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    height: 48,
  },
  name: {
    alignSelf: 'flex-start',
    borderRadius: 4,
    flexDirection: 'row',
    marginBottom: 8,
    paddingX: 4,
  },
  required: {
    paddingLeft: 4,
  },
  error: {
    color: 'error-700',
    paddingTop: 8,
    paddingX: 16,
  },
  input: {
    flex: 1,
    paddingX: 16,
    lineHeight: 16,
  },
  toggle: {
    width: 30,
    aspectRatio: 1,
    marginRight: 6,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  leftIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    width: 24,
  },
});
