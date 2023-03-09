import { ComponentProps } from 'react';
import { Controller } from 'react-hook-form';

type Rules = ComponentProps<typeof Controller>['rules'];

export type Validations<T> = {
  [Property in keyof T]: Rules;
};
