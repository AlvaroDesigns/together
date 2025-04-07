import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Button, Input } from '@heroui/react';
import { useState } from 'react';

interface CounterProps {
  label?: string;
  defaultValue: number;
  max?: number;
  min?: number;
}

export const Counter = ({
  label = 'Alojamiento',
  defaultValue = 0,
  max = 10,
  min = 0,
}: CounterProps) => {
  const [count, setCount] = useState(defaultValue);

  return (
    <div className="flex flex-row items-center justify-between w-full gap-2">
      <div className="text-gray-600 dark:text-gray-300">{label}</div>
      <div className="flex flex-row items-center gap-2">
        <Button
          isIconOnly
          aria-label="min"
          isDisabled={count <= min}
          onPress={() => setCount(count - 1)}
        >
          <MinusIcon className="m-1 size-6" />
        </Button>
        <Input
          isReadOnly
          type="number"
          className="w-9"
          classNames={{
            input: 'text-center text-right',
            inputWrapper: 'p-0',
          }}
          value={String(count)}
        />
        <Button
          isIconOnly
          aria-label="max"
          isDisabled={count === max}
          onPress={() => setCount(count + 1)}
        >
          <PlusIcon className="m-1 size-6" />
        </Button>
      </div>
    </div>
  );
};
