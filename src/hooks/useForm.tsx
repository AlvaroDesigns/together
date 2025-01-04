import { yupResolver } from "@hookform/resolvers/yup";
import { useForm as useReactForm } from "react-hook-form";
import { ObjectSchema } from "yup";

interface Props {
  schema: ObjectSchema<Record<string, unknown>>;
  mod?: "all" | "onBlur" | "onChange" | "onSubmit" | "onTouched" | undefined;
  values?: any;
}

export const useForm = ({ values = {}, schema, mod = "all" }: Props) => {
  const {
    control,
    watch,
    handleSubmit,
    getValues,
    setValue,
    reset,
    formState: { errors },
  } = useReactForm({
    defaultValues: values,
    resolver: yupResolver(schema),
    mode: mod,
  });

  return { control, watch, errors, reset, handleSubmit, setValue, getValues };
};
