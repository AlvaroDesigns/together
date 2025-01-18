import { convertToISO } from "@/utils";
import { DateInput, DatePicker } from "@heroui/react";
import {
  getLocalTimeZone,
  now,
  parseAbsoluteToLocal,
  today,
} from "@internationalized/date";
import { Controller, useForm } from "react-hook-form";

export default function Calendar({
  name,
  control,
  startDate,
  variant = "default",
}: {
  name: string;
  control: ReturnType<typeof useForm>["control"];
  startDate: string | undefined;
  variant?: "default" | "hour";
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return variant === "default" ? (
          <DatePicker
            {...field}
            variant="bordered"
            label=" "
            fullWidth={true}
            granularity="day"
            isInvalid={Boolean(fieldState.error?.message)}
            color={fieldState.error?.message ? "danger" : "default"}
            errorMessage={fieldState.error?.message}
            className="max-w-[284px]"
            value={
              field.value
                ? parseAbsoluteToLocal(field.value)
                : parseAbsoluteToLocal(startDate)
            }
            minValue={
              startDate
                ? parseAbsoluteToLocal(startDate)
                : now(getLocalTimeZone())
            }
            maxValue={today(getLocalTimeZone()).add({ days: 365 })}
            onChange={(e) => field.onChange(convertToISO(e))}
          />
        ) : (
          <DateInput
            {...field}
            hideTimeZone
            granularity={"minute"}
            hourCycle={24}
            variant="bordered"
            label=" "
            fullWidth={true}
            isInvalid={Boolean(fieldState.error?.message)}
            color={fieldState.error?.message ? "danger" : "default"}
            errorMessage={fieldState.error?.message}
            className="max-w-[284px]"
            value={
              field.value
                ? parseAbsoluteToLocal(field.value)
                : parseAbsoluteToLocal(startDate)
            }
            minValue={
              startDate
                ? parseAbsoluteToLocal(startDate)
                : now(getLocalTimeZone())
            }
            maxValue={today(getLocalTimeZone()).add({ days: 365 })}
            onChange={(e) => field.onChange(convertToISO(e))}
          />
        );
      }}
    />
  );
}
