import { convertToISO, formatDay } from "@/utils";
import { DateInput, DatePicker } from "@heroui/react";
import { parseDate } from "@internationalized/date";
import { Controller, useForm } from "react-hook-form";

export default function Calendar({
  name,
  control,
  startDate,
  endDate,
  variant = "default",
}: {
  name: string;
  control: ReturnType<typeof useForm>["control"];
  startDate: string | undefined;
  endDate?: string | undefined;
  variant?: "default" | "hour";
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        console.log(
          field.value
            ? parseDate(formatDay(new Date(field.value)))
            : parseDate(formatDay(new Date(startDate)))
        );
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
                ? parseDate(formatDay(new Date(field.value)))
                : parseDate(formatDay(new Date(startDate)))
            }
            minValue={
              startDate
                ? parseDate(formatDay(new Date(startDate)))
                : parseDate(formatDay(new Date()))
            }
            maxValue={
              endDate
                ? parseDate(formatDay(new Date(endDate)))
                : parseDate(formatDay(new Date())).add({ days: 365 })
            }
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
                ? parseDate(formatDay(new Date(field.value)))
                : parseDate(formatDay(new Date(startDate)))
            }
            minValue={
              startDate
                ? parseDate(formatDay(new Date(startDate)))
                : parseDate(formatDay(new Date()))
            }
            maxValue={
              endDate
                ? parseDate(formatDay(new Date(endDate)))
                : parseDate(formatDay(new Date())).add({ days: 365 })
            }
            onChange={(e) => field.onChange(convertToISO(e))}
          />
        );
      }}
    />
  );
}
