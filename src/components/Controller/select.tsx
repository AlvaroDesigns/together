import { Label } from '@/components';
import { useForm } from '@/hooks';
import { Select, SelectItem } from '@heroui/react';
import { Controller } from 'react-hook-form';

interface SelectControllerProps {
  control: ReturnType<typeof useForm>['control'];
  name: string;
  label: string;
  placeholder?: string;
  mt?: string | number;
  mb?: string | number;
  ml?: string | number;
  mr?: string | number;
  items?: Iterable<{ key: string; label: string }>;
  onSelectionChange?: (selectedKeys: string[]) => void;
}

export const SelectController = ({
  control,
  name,
  label,
  placeholder,
  onSelectionChange,
  items = [],
  mt,
  mb,
  ml,
  mr,
}: SelectControllerProps) => {
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
          <Select
            {...field}
            className="max-w-xs"
            items={items}
            label="Tipo"
            placeholder={placeholder}
            variant="bordered"
            selectedKeys={[field.value]}
            isInvalid={Boolean(fieldState.error?.message)}
            color={fieldState.error?.message ? 'danger' : 'default'}
            errorMessage={fieldState.error?.message}
            onSelectionChange={(keys) => {
              if (onSelectionChange) {
                const selectedKeys = Array.from(keys as Set<string>);
                onSelectionChange(selectedKeys);
              }
            }}
          >
            {(op) => <SelectItem key={op.key}>{op.label}</SelectItem>}
          </Select>
        )}
      />
    </div>
  );
};
