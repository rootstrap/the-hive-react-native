import { ComponentProps } from 'react';

import { Text as DripsyText, Theme } from 'dripsy';

type Variant = keyof Theme['text'];

export type TextProps = { variant?: Variant } & Omit<ComponentProps<typeof DripsyText>, 'variant'>;
