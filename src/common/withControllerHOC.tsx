import React, { ComponentProps } from 'react';
import { Controller, FieldValues, Path, UseControllerProps } from 'react-hook-form';

import { Input } from 'design-system';

type Props<T extends FieldValues> = {
  id: Path<T>;
} & Omit<UseControllerProps<T>, 'name'> &
  ComponentProps<typeof Input>;

const useInputWithController = <T extends FieldValues>(WrappedComponent: React.ElementType) => {
  const ComponentWithController = ({ id, control, rules, defaultValue, ...props }: Props<T>) => (
    <Controller
      name={id}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { onChange, name, value, ...rest }, formState: { errors } }) => (
        <WrappedComponent
          onChangeText={onChange}
          error={errors[name]?.message}
          value={value !== null && value !== undefined ? `${value}` : undefined}
          {...rest}
          {...props}
        />
      )}
    />
  );
  return ComponentWithController;
};

export default useInputWithController;
