import Btn from '@/components/ui/btn';
import { DatePicker as DateP } from '@/components/ui/datepicker';
import { Label } from '@/components/ui/label';
import { capitalCase } from '@/utils';

import { addDay, addMonth, format } from '@formkit/tempo';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { Input, Popover, PopoverContent, PopoverTrigger } from '@heroui/react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

interface CalendarControllerProps {
  control: ReturnType<typeof useForm>['control'];
  name: string;
  label: string;
  mt?: string | number;
  mb?: string | number;
  ml?: string | number;
  mr?: string | number;
  fullWidth?: boolean;
  variant?: 'default' | 'hour';
  placement?: 'bottom' | 'top';
  mode?: 'single' | 'range';
  minDate?: string | Date | null;
  maxDate?: string | Date | null;
}

const getLiteralDates = (value: { from: Date; to: Date } | Date, mode: string) => {
  if (mode === 'range' && 'from' in value && 'to' in value) {
    const f = capitalCase(format(value.from, 'ddd. D MMM YYYY', 'Es'));
    const t = capitalCase(format(value.to, 'ddd. D MMM YYYY', 'Es'));

    return `${f} - ${t}`;
  }

  return capitalCase(format(value as Date, 'ddd. D MMM YYYY', 'Es'));
};

export const CalendarController2 = ({
  control,
  name,
  label,
  placement = 'bottom',
  mode = 'single',
  mt,
  mb,
  ml,
  mr,
  minDate,
  maxDate,
  fullWidth = false,
}: CalendarControllerProps) => {
  const [isPopoverOpen, setPopoverOpen] = useState(false); // Estado para controlar el Popover

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
            <Popover
              offset={5}
              placement={placement}
              isOpen={isPopoverOpen}
              onOpenChange={(open) => setPopoverOpen(open)}
            >
              <PopoverTrigger asChild>
                <Input
                  {...field}
                  isReadOnly
                  variant="bordered"
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
                  value={
                    field.value
                      ? getLiteralDates(field.value, mode)
                      : 'Introduce una fecha'
                  }
                  endContent={
                    <CalendarDaysIcon className="absolute cursor-pointer pointer-events-none right-3 size-5 text-default-400" />
                  }
                />
              </PopoverTrigger>
              <PopoverContent>
                <div className="w-full px-1 py-2">
                  <div className="flex flex-col w-full gap-2 mt-2">
                    <DateP
                      required
                      excludeDisabled
                      mode={mode}
                      selected={field.value}
                      onSelect={field.onChange}
                      className="border rounded-md dark:border-default-200/50"
                      disabled={{
                        before: minDate
                          ? new Date(minDate as string | Date)
                          : addDay(new Date()),
                        after: maxDate
                          ? new Date(maxDate as string | Date)
                          : addMonth(new Date(), 24),
                      }}
                      {...(mode === 'range' && { required: true })}
                      footer={
                        <div className="flex flex-col gap-3 mt-2">
                          <Btn
                            variant="bordered"
                            size="sm"
                            onPress={() => setPopoverOpen(false)}
                          >
                            Cerrar
                          </Btn>
                        </div>
                      }
                    />
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        )}
      />
    </div>
  );
};

/*


import { CalendarDaysIcon } from '@heroicons/react/24/outline';

import { Controller, useForm } from 'react-hook-form';

import { DatePicker as DateP } from '@/components/ui/datepicker';

import { Input, Popover, PopoverContent, PopoverTrigger } from '@heroui/react';

import Btn from '@/components/ui/btn';
import { Label } from '@/components/ui/label';
import { capitalCase, formatDay } from '@/utils';
import { addDay, addMonth, format } from '@formkit/tempo';
import { useState } from 'react';

interface CalendarControllerProps {
  control: ReturnType<typeof useForm>['control'];
  name: string;
  label: string;
  mt?: string | number;
  mb?: string | number;
  ml?: string | number;
  mr?: string | number;
  fullWidth?: boolean;
  variant?: 'default' | 'hour';
  placement?: 'bottom' | 'top';
  mode?: 'single' | 'range';
  minDate?: string | Date | null;
  isHour?: boolean;
}

const getLiteralDates = (value: { from: Date; to: Date } | Date, mode: string) => {
  console.log('value', value);
  if (mode === 'range' && 'from' in value && 'to' in value) {
    const f = capitalCase(format(value.from, 'ddd. D MMM YYYY', 'Es'));
    const t = capitalCase(format(value.to, 'ddd. D MMM YYYY', 'Es'));

    return `${f} - ${t}`;
  }

  return capitalCase(format(value as Date, 'ddd. D MMM YYYY HH:mm', 'Es'));
};

export const CalendarController2 = ({
  control,
  name,
  label,
  placement = 'bottom',
  mode = 'single',
  isHour = false,
  mt,
  mb,
  ml,
  mr,
  minDate,
  fullWidth = false,
}: CalendarControllerProps) => {
  const [isPopoverOpen, setPopoverOpen] = useState(false); // Estado para controlar el Popover
  const [timeValue, setTimeValue] = useState<string>('00:00');

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>, field: any) => {
    const time = e.target.value;
    setTimeValue(time);

    if (field.value) {
      // const [hours, minutes] = time.split(':').map(Number);
      const updatedDate = new Date(field.value); // Crear una copia de la fecha seleccionada
      const d = formatDay(updatedDate, 'YYYY-MM-DD');

      //updatedDate.setHours(hours, minutes, 0, 0); // Ajustar la hora y los minutos

      field.onChange(new Date(`${d}T${time}`)); // Actualizar el valor del campo con la nueva fecha y hora
    }
  };

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
        render={({ field, fieldState }) => {
          console.log('timeValue', timeValue);
          return (
            <div className="flex flex-col">
              <Label>{label}</Label>
              <Popover
                offset={5}
                placement={placement}
                // isOpen={isPopoverOpen}
                //onOpenChange={(open) => setPopoverOpen(open)}
              >
                <PopoverTrigger asChild>
                  <Input
                    {...field}
                    isReadOnly
                    variant="bordered"
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
                    value={
                      field.value
                        ? getLiteralDates(field.value, mode)
                        : 'Introduce una fecha'
                    }
                    endContent={
                      <CalendarDaysIcon className="absolute cursor-pointer pointer-events-none right-3 size-5 text-default-400" />
                    }
                  />
                </PopoverTrigger>
                <PopoverContent>
                  <div className="w-full px-1 py-2">
                    <div className="flex flex-col w-full gap-2 mt-2">
                      <DateP
                        timeZone={Intl.DateTimeFormat().resolvedOptions().timeZone}
                        mode={mode}
                        selected={field.value}
                        onSelect={(date: { from: Date; to: Date } | Date) => {
                          if (date) {
                            // Asegúrate de que el valor seleccionado sea una instancia válida de Date
                            const updatedDate = new Date(date as Date);
                            field.onChange(updatedDate); // Actualiza el valor del campo en el formulario
                          }
                        }}
                        className="border rounded-md dark:border-default-200/50"
                        disabled={{
                          before: minDate
                            ? new Date(minDate as string | Date)
                            : addDay(new Date()),
                          after: addMonth(new Date(), 24),
                        }}
                        {...(mode === 'range' && { required: true })}
                        footer={
                          <div className="flex flex-col gap-3 mt-2">
                            {isHour && (
                              <input
                                type="time"
                                value={timeValue}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                  handleTimeChange(e, field)
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-default-200/50 focus:ring-2 focus:ring-red-500"
                              />
                            )}
                            <Btn
                              variant="bordered"
                              size="sm"
                              onPress={() => setPopoverOpen(false)}
                            >
                              Cerrar
                            </Btn>
                          </div>
                        }
                      />
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          );
        }}
      />
    </div>
  );
};


*/
