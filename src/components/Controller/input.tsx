import { Label } from '@/components';
import { useForm } from '@/hooks';
import { Input } from '@heroui/react';
import { Controller } from 'react-hook-form';

interface InputControllerProps {
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

export const InputController = ({
  control,
  name,
  label,
  placeholder,
  type = 'text',
  mt,
  mb,
  ml,
  mr,
}: InputControllerProps) => {
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
          <Input
            {...field}
            variant="bordered"
            id={field.name}
            type={type}
            fullWidth={true}
            isInvalid={Boolean(fieldState.error?.message)}
            color={fieldState.error?.message ? 'danger' : 'default'}
            errorMessage={fieldState.error?.message}
            classNames={{ inputWrapper: '!min-h-[60px] h-10' }}
            value={field.value}
            placeholder={placeholder}
          />
        )}
      />
    </div>
  );
};
