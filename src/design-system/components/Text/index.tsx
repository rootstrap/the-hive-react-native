import React from 'react';

import { Text as DripsyText } from 'dripsy';

import type { TextProps } from './types';

const Text = ({ children, variant = 'h1', sx }: TextProps) => (
  <DripsyText sx={sx} variant={variant}>
    {children}
  </DripsyText>
);

export { Text };
