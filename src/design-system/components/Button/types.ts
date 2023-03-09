import { ComponentProps } from 'react';
import { ImageSourcePropType } from 'react-native';
import { Pressable as DripsyPressable, SxProp, Theme } from 'dripsy';

type Variant = keyof Theme['button'];

export type ButtonProps = {
    disabled?: boolean,
    label: string;
    onPress: () => void;
    containerSx?: SxProp, 
    labelSx?: SxProp,
    variant?: Variant;
    leftIcon?: ImageSourcePropType,
    rightIcon?: ImageSourcePropType,
} & Omit<ComponentProps<typeof DripsyPressable>, 'variant'>;
