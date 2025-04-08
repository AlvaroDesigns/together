import { Label } from '@/components/ui/label';
import { addHour } from '@formkit/tempo';

import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { TimeInput } from '@heroui/react';
import { Controller, useForm } from 'react-hook-form';

interface TimePickerControllerProps {
  control: ReturnType<typeof useForm>['control'];
  name: string;
  label: string;
  mt?: string | number;
  mb?: string | number;
  ml?: string | number;
  mr?: string | number;
  fullWidth?: boolean;
  minDate?: string | Date | null;
}

export const TimePickerController = ({
  control,
  name,
  label,
  mt,
  mb,
  ml,
  mr,
  fullWidth = false,
}: TimePickerControllerProps) => {
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
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <div className="flex flex-col">
            <Label>{label}</Label>
            <TimeInput
              {...field}
              defaultValue={addHour(new Date())}
              variant="bordered"
              hourCycle={24}
              labelPlacement="outside"
              fullWidth={true}
              className="cursor-pointer"
              classNames={{
                inputWrapper: '!min-h-[60px] h-full cursor-pointer',
                input: 'text-left cursor-pointer w-full h-full',
              }}
              isInvalid={Boolean(fieldState.error?.message)}
              color={fieldState.error?.message ? 'danger' : 'default'}
              errorMessage={fieldState.error?.message}
              value={field.value}
              onChange={field.onChange}
              endContent={
                <CalendarDaysIcon className="absolute cursor-pointer pointer-events-none right-3 size-5 text-default-400" />
              }
            />
          </div>
        )}
      />
    </div>
  );
};
