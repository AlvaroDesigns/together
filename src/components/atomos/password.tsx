import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Input } from "@heroui/react";
import { useState } from "react";
import { ControllerRenderProps } from "react-hook-form";

interface PasswordProps {
  message?: string;
  field?: ControllerRenderProps;
  value?: string;
  label?: string;
  placeholder?: string;
}

export default function Password({
  message,
  field,
  value,
  label,
  placeholder,
}: PasswordProps) {
  const [hide, setHide] = useState(true);
  return (
    <Input
      {...field}
      isRequired
      variant="bordered"
      classNames={{
        inputWrapper: "!min-h-[60px]",
      }}
      type={hide ? "password" : "text"}
      label={label}
      fullWidth={true}
      isInvalid={Boolean(message)}
      color={message ? "danger" : "default"}
      errorMessage={message}
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
  );
}
