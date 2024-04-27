import type { PropsWithChildren, ReactElement } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { useController } from 'react-hook-form';

import type { InputProps } from '@components/common/text/Input';
import { Input } from '@components/common/text/Input';
import { FieldValidation } from '@components/fields/FieldValidation';
import { FieldWrapper } from '@components/fields/FieldWrapper';

interface FormInputProps<TFieldValues extends FieldValues>
  extends InputProps,
    PropsWithChildren {
  control: Control<TFieldValues, Path<TFieldValues>>;
  name: Path<TFieldValues>;
  label: string;
  wrapperClassName?: string;
}

export const FormInput = <TFieldValues extends FieldValues>({
  control,
  name,
  label,
  wrapperClassName,
  ...props
}: FormInputProps<TFieldValues>): ReactElement => {
  const {
    field: { ref, ...fieldProps },
    fieldState: { error }
  } = useController({
    name,
    control
  });
  const invalid = Boolean(error);

  return (
    <FieldWrapper name={name} label={label} className={wrapperClassName}>
      <Input
        {...props}
        {...fieldProps}
        fwRef={ref}
        name={name}
        invalid={invalid}
      />
      <FieldValidation name={name} error={error} invalid={invalid} />
    </FieldWrapper>
  );
};
