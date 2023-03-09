export const fontWeights = {
  regular: '400',
  medium: '500',
  bold: '700',
  extraBold: '800',
} as const;

const createTextSize = ({
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight: leading,
  letterSpacing,
 // textTransform,
}: {
  fontFamily?: string;
  fontSize: number;
  fontWeight?: string,
  lineHeight?: number;
  letterSpacing?: number;
 // textTransform?: string;
}) => ({
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight: leading,
  letterSpacing,
 //textTransform,
});

export const textFormats = {
  'h1': createTextSize({
    //fontFamily: 'Spartan',
    fontSize: 32,
    fontWeight: fontWeights.extraBold,
    lineHeight: 40,
    //textTransform: 'uppercase',
  }),
  'h2': createTextSize({
    fontFamily: 'Spartan',
    fontSize: 28,
    fontWeight: fontWeights.extraBold,
    lineHeight: 40,
   // textTransform: 'uppercase',
  }),
  'h3': createTextSize({
    fontFamily: 'Spartan',
    fontSize: 24,
    fontWeight: fontWeights.bold,
    lineHeight: 36,
  }),
  'h4': createTextSize({
    fontFamily: 'Spartan',
    fontSize: 24,
    fontWeight: fontWeights.medium,
    lineHeight: 32,
  }),
  'h5': createTextSize({
    fontFamily: 'Spartan',
    fontSize: 16,
    fontWeight: fontWeights.medium,
    lineHeight: 24,
  }),
  'p-sm-regular': createTextSize({
    fontFamily: 'Spartan',
    fontSize: 14,
    fontWeight: fontWeights.regular,
    lineHeight: 20,
  }),
  'p-sm-medium': createTextSize({
    fontFamily: 'Spartan',
    fontSize: 14,
    fontWeight: fontWeights.medium,
    lineHeight: 20,
  }),
  'p-sm-bold': createTextSize({
    fontFamily: 'Spartan',
    fontSize: 14,
    fontWeight: fontWeights.bold,
    lineHeight: 20,
  }),
  'p-md-regular': createTextSize({
    fontFamily: 'Spartan',
    fontSize: 16,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
  }),
  'p-md-regular-strike-through': createTextSize({
    fontFamily: 'Spartan',
    fontSize: 16,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
  }),
} as const;
