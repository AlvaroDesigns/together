import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

export const Counter = ({
  label = "Alojamiento",
  defaultValue = 0,
}: {
  label?: string;
  defaultValue: number;
}) => {
  const [count, setCount] = useState(defaultValue);

  return (
    <div className="flex flex-row items-center w-full gap-2">
      <div className="min-w-52 dark:text-gray-300">{label}</div>
      <div className="flex flex-row items-center w-full gap-2">
        <Button
          isIconOnly
          aria-label="Like"
          isDisabled={count === 0}
          onPress={() => setCount(count - 1)}
        >
          <MinusIcon className="m-1 size-6" />
        </Button>
        <Input type="number" className="w-9" value={String(count)} />
        <Button
          isIconOnly
          aria-label="Like"
          onPress={() => setCount(count + 1)}
        >
          <PlusIcon className="m-1 size-6" />
        </Button>
      </div>
    </div>
  );
};
