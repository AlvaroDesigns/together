import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Input } from "@nextui-org/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface ButtonProps {
  message?: string;
  field?: ReturnType<typeof useForm>["register"];
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
}: ButtonProps) {
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
