import { useForm } from '@/hooks';
import { Divider } from '@heroui/react';
import { CalendarController2 } from './calendar2';
import { InputController } from './input';
import { PasswordController } from './password';
import { RadioGroupController } from './radiogroup';
import { SelectController } from './select';
import { TextAreaController } from './textarea';
import { TimePickerController } from './timePicker';

const CALENDAR = 'Calendar';
const TIME = 'Time';
const INPUT = 'Input';
const SELECT = 'Select';
const TEXT_AERA = 'TextArea';
const RADIO_GROUP = 'RadioGroup';
const DIVIDER = 'Divider';
const PASSWORD = 'Password';

interface Payload {
  key: 'Calendar' | 'Input' | 'Select' | 'TextArea' | 'Divider' | 'RadioGroup';
  label: string;
  placeholder?: string;
  type?: string;
  control: ReturnType<typeof useForm>['control'];
  name: string;
  startDate?: string;
  endDate?: string;
  options?: { label: string; value: string }[];
  value?: string;
  defaultValue?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  isMulti?: boolean;
  isLoading?: boolean;
}

export const resolverForm = (payload: Payload) => {
  const { key, ...rest } = payload;

  const id = crypto.randomUUID();

  const handlerMap = {
    [INPUT]: <InputController key={`${key}-${id}`} ml="1rem" mr="1rem" {...rest} />,
    [SELECT]: <SelectController key={`${key}-${id}`} ml="1rem" mr="1rem" {...rest} />,
    [TEXT_AERA]: (
      <TextAreaController key={`${key}-${id}`} ml="1rem" mr="1rem" {...rest} />
    ),
    [RADIO_GROUP]: (
      <RadioGroupController key={`${key}-${id}`} ml="1rem" mr="1rem" {...rest} />
    ),
    [CALENDAR]: (
      <CalendarController2 key={`${key}-${id}`} ml="1rem" mr="1rem" {...rest} />
    ),
    [TIME]: <TimePickerController key={`${key}-${id}`} ml="1rem" mr="1rem" {...rest} />,
    [PASSWORD]: (
      <PasswordController fullWidth key={`${key}-${id}`} ml="1rem" mr="1rem" {...rest} />
    ),
    [DIVIDER]: <Divider className="mt-5 mb-3" />,
  };

  return handlerMap[key] || null;
};
