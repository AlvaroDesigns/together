import { Label } from '@/components';
import { useForm } from '@/hooks';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { Input } from '@heroui/react';
import { useState } from 'react';
import { Controller, ControllerRenderProps } from 'react-hook-form';

interface PasswordProps {
  message?: string;
  field?: ControllerRenderProps;
  value?: string;
  label: string;
  placeholder?: string;
  control: ReturnType<typeof useForm>['control'];
  name: string;
  type?: string;
  mt?: string | number;
  mb?: string | number;
  ml?: string | number;
  mr?: string | number;
  fullWidth?: boolean;
  labelPlacement?: boolean;
}

export const PasswordController = ({
  control,
  name,
  mt,
  mb,
  ml,
  mr,
  value,
  label,
  placeholder,
  fullWidth,
  labelPlacement = false,
}: PasswordProps) => {
  const [hide, setHide] = useState(true);

  return (
    <div
      className="flex flex-col"
      style={{
        marginTop: mt,
        marginBottom: mb,
        marginLeft: ml,
        marginRight: mr,
        width: fullWidth ? '100%' : 'auto',
      }}
    >
      {!labelPlacement && <Label>{label}</Label>}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            isRequired
            label={labelPlacement ? label : undefined}
            variant="bordered"
            classNames={{
              inputWrapper: '!min-h-[60px]',
            }}
            type={hide ? 'password' : 'text'}
            fullWidth={true}
            isInvalid={Boolean(fieldState.error?.message)}
            color={fieldState.error?.message ? 'danger' : 'default'}
            errorMessage={fieldState.error?.message}
            endContent={
              <div onClick={() => setHide(!hide)}>
                {hide ? (
                  <EyeIcon className="m-1 size-6" />
                ) : (
                  <EyeSlashIcon className="m-1 size-6" />
                )}
              </div>
            }
            value={value}
            placeholder={placeholder}
          />
        )}
      />
    </div>
  );
};
