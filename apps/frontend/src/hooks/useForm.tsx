import { yupResolver } from "@hookform/resolvers/yup";
import { useForm as useReactForm } from "react-hook-form";

interface Props {
  values: any;
  schema: any;
  mod?: string | any;
}

export const useForm = ({ values = undefined, schema, mod = "all" }: Props) => {
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
