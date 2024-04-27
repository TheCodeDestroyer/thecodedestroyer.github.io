import type { FC } from 'react';
import type { FieldError } from 'react-hook-form';

interface FieldValidationProps {
  name: string;
  error?: FieldError | undefined;
  invalid?: boolean;
}

export const FieldValidation: FC<FieldValidationProps> = ({
  name,
  error,
  invalid
}) => {
  if (!error || !invalid) {
    return null;
  }

  return (
    <p className="mt-2 text-sm text-red-400" id={`${name}-error`}>
      {error.message}
    </p>
  );
};
