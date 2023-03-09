import { ComponentProps } from 'react';

import { Text as DripsyText, Theme } from 'dripsy';

type TextVariant = keyof Theme['text'];

export type TextProps = { variant?: TextVariant } & Omit<ComponentProps<typeof DripsyText>, 'variant'>;
