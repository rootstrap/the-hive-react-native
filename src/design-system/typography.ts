export const fontWeights = {
  default: '500',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
} as const;

const createTextSize = ({
  fontSize,
  lineHeight: leading,
  letterSpacing,
}: {
  fontSize: number;
  lineHeight?: number;
  letterSpacing?: number;
}) => ({
  fontSize,
  lineHeight: leading,
  letterSpacing,
});

export const textSizes = {
  'text-xs': createTextSize({
    fontSize: 11,
  }),
  'text-sm': createTextSize({
    fontSize: 12,
  }),
  'text-med': createTextSize({
    fontSize: 14,
  }),
  'text-base': createTextSize({
    fontSize: 16,
  }),
  'text-lg': createTextSize({
    fontSize: 18,
  }),
  'text-xl': createTextSize({
    fontSize: 20,
  }),
  'text-2xl': createTextSize({
    fontSize: 24,
  }),
  'text-3xl': createTextSize({
    fontSize: 28,
  }),
  'text-4xl': createTextSize({
    fontSize: 38,
  }),
} as const;
