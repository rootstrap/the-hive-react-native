import React, { ComponentProps } from 'react';

import { Image as DripsyImage, SxProp } from 'dripsy';

import { images } from '../../assets';

type ImageProps = {
  name: keyof typeof images;
  sx?: SxProp;
} & Omit<ComponentProps<typeof DripsyImage>, 'source'>;

const Image = ({ name, sx, ...props }: ImageProps) => (
  <DripsyImage {...props} sx={sx} source={images[name]()} />
);

export { Image };
