export const fontWeights = {
  default: '400',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
} as const;

export const textVariants = {
  h1: {
    fontSize: 32,
    fontWeight: fontWeights.extraBold,
    lineHeight: 40,
    textTransform: 'uppercase',
  },
  h2: {
    fontSize: 28,
    fontWeight: fontWeights.extraBold,
    lineHeight: 40,
    textTransform: 'uppercase',
  },
  h3: {
    fontSize: 24,
    fontWeight: fontWeights.bold,
    lineHeight: 36,
  },
  h4: {
    fontSize: 24,
    fontWeight: fontWeights.medium,
    lineHeight: 32,
  },
  h5: {
    fontSize: 16,
    fontWeight: fontWeights.medium,
    lineHeight: 24,
  },
  'p-sm-regular': {
    fontSize: 14,
    fontWeight: fontWeights.regular,
    lineHeight: 20,
  },
  'p-sm-medium': {
    fontSize: 14,
    fontWeight: fontWeights.medium,
    lineHeight: 20,
  },
  'p-sm-bold': {
    fontSize: 14,
    fontWeight: fontWeights.bold,
    lineHeight: 20,
  },
  'p-md-regular': {
    fontSize: 16,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
  },
  'p-md-regular-line': {
    fontSize: 16,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
    textDecorationLine: 'line-through',
  },
  'button-lg': {
    fontSize: 16,
    fontWeight: fontWeights.bold,
    lineHeight: 20,
  },
  'button-md': {
    fontSize: 14,
    fontWeight: fontWeights.bold,
    lineHeight: 20,
  },
  'button-sm': {
    fontSize: 12,
    fontWeight: fontWeights.semiBold,
    lineHeight: 20,
  },
  'link-lg': {
    fontSize: 16,
    fontWeight: fontWeights.medium,
    lineHeight: 20,
  },
  'link-md': {
    fontSize: 14,
    fontWeight: fontWeights.medium,
    lineHeight: 16,
  },
  'text-xs': {
    fontSize: 11,
    fontWeight: fontWeights.medium,
    lineHeight: 12,
  },
  'text-sm': {
    fontSize: 12,
    fontWeight: fontWeights.medium,
    lineHeight: 16,
  },
  'text-md': {
    fontSize: 14,
    fontWeight: fontWeights.medium,
    lineHeight: 16,
  },
  'text-lg': {
    fontSize: 16,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
    // letter-spacing: -0.025em; // TODO: see how translate this
  },
} as const;
