import { Label, Stars } from '@/components';
import { useForm } from '@/hooks';
import { Radio, RadioGroup } from '@heroui/react';
import { Controller } from 'react-hook-form';

interface RadioGroupControllerProps {
  control: ReturnType<typeof useForm>['control'];
  name: string;
  label: string;
  mt?: string | number;
  mb?: string | number;
  ml?: string | number;
  mr?: string | number;
}

export const RadioGroupController = ({
  control,
  name,
  label,
  mt,
  mb,
  ml,
  mr,
}: RadioGroupControllerProps) => {
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
          <RadioGroup
            {...field}
            isInvalid={Boolean(fieldState.error?.message)}
            color={fieldState.error?.message ? 'danger' : 'default'}
            errorMessage={fieldState.error?.message}
            value={String(field.value)}
          >
            <Radio value="1">
              <Stars count={1} />
            </Radio>
            <Radio value="2">
              <Stars count={2} />
            </Radio>
            <Radio value="3">
              <Stars count={3} />
            </Radio>
            <Radio value="4">
              <Stars count={4} />
            </Radio>
            <Radio value="5">
              <Stars count={5} />
            </Radio>
            <Radio value="none">
              <p className="dark:text-gray-600"> Sin categoría</p>
            </Radio>
          </RadioGroup>
        )}
      />
    </div>
  );
};
