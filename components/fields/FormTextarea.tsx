import type { PropsWithChildren, ReactElement } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { useController } from 'react-hook-form';

import type { TextareaProps } from '@components/common/text/Textarea';
import { Textarea } from '@components/common/text/Textarea';
import { FieldValidation } from '@components/fields/FieldValidation';
import { FieldWrapper } from '@components/fields/FieldWrapper';

interface FormTextareaProps<TFieldValues extends FieldValues>
  extends TextareaProps,
    PropsWithChildren {
  control: Control<TFieldValues, Path<TFieldValues>>;
  name: Path<TFieldValues>;
  label: string;
  wrapperClassName?: string;
}

export const FormTextarea = <TFieldValues extends FieldValues>({
  control,
  name,
  label,
  wrapperClassName,
  ...props
}: FormTextareaProps<TFieldValues>): ReactElement => {
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
      <Textarea
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
