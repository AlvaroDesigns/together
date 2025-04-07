import { Label } from '@/components';
import { useForm } from '@/hooks';
import { Textarea } from '@heroui/react';
import { Controller } from 'react-hook-form';

interface TextAreaControllerProps {
  control: ReturnType<typeof useForm>['control'];
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  mt?: string | number;
  mb?: string | number;
  ml?: string | number;
  mr?: string | number;
}

export const TextAreaController = ({
  control,
  name,
  label,
  placeholder,
  type = 'text',
  mt,
  mb,
  ml,
  mr,
}: TextAreaControllerProps) => {
  return (
    <div
      className="flex flex-col"
      style={{
        marginTop: mt,
        marginBottom: mb,
        marginLeft: ml,
        marginRight: mr,
      }}
    >
      <Label>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <Textarea
            {...field}
            variant="bordered"
            type={type}
            fullWidth={true}
            isInvalid={Boolean(fieldState.error?.message)}
            color={fieldState.error?.message ? 'danger' : 'default'}
            errorMessage={fieldState.error?.message}
            className="max-w-xs"
            classNames={{ inputWrapper: '!min-h-[60px] h-10' }}
            placeholder={placeholder}
          />
        )}
      />
    </div>
  );
};
