import {
  DatePicker,
  DateRangePicker,
  Divider,
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";

import { Label, Stars } from "@/components";
import { useForm } from "@/hooks";
import { getLocalTimeZone, today } from "@internationalized/date";
import { Controller } from "react-hook-form";

// eslint-disable-next-line react-refresh/only-export-components
export const TRIP = [
  { key: "flight", label: "Vuelo" },
  { key: "hotel", label: "Hotel" },
  { key: "transfer", label: "Transfer" },
  { key: "trip", label: "Actividad" },
  { key: "rent", label: "Rent a car" },
];

export const TRANSFER_DATA = [
  { key: "Tren", label: "Tren" },
  { key: "Bus", label: "Bus" },
  { key: "Bicileta", label: "Bicicleta" },
  { key: "Patinete", label: "Patinete" },
  { key: "Uber", label: "Uber" },
  { key: "Cabify", label: "Cabify" },
  { key: "Bold", label: "Bold" },
  { key: "Grab", label: "Grab" },
  { key: "Taxi", label: "Taxi" },
  { key: "Otros", label: "Otros" },
];

interface SectionFormProps {
  control: ReturnType<typeof useForm>["control"];
  reset: ReturnType<typeof useForm>["reset"];
  type: "flight" | "hotel" | "transfer" | "trip" | "rent";
}

export default function SectionForm({
  control,
  reset,
  type,
}: SectionFormProps) {
  const handleChange = (item: { currentKey: string }) => {
    if (type) {
      reset({ type: item?.currentKey });
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col mx-4">
        <Label>Tipo de actividad</Label>
        <Controller
          name="type"
          control={control}
          render={({ field, fieldState }) => (
            <Select
              {...field}
              className="max-w-xs"
              items={TRIP}
              label="Tipo"
              placeholder="Selecciona un tipo de viaje"
              variant="bordered"
              isInvalid={Boolean(fieldState.error?.message)}
              color={fieldState.error?.message ? "danger" : "default"}
              errorMessage={fieldState.error?.message}
              onSelectionChange={handleChange}
            >
              {(animal) => <SelectItem>{animal.label}</SelectItem>}
            </Select>
          )}
        />
      </div>
      {type === "flight" && (
        <>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Fecha de salida</Label>
            <Controller
              name="startDate"
              control={control}
              render={({ field, fieldState }) => (
                <DatePicker
                  {...field}
                  variant="bordered"
                  label=" "
                  className="max-w-[284px]"
                  classNames={{ inputWrapper: "!min-h-[60px] h-10" }}
                  fullWidth={true}
                  isInvalid={Boolean(fieldState.error?.message)}
                  color={fieldState.error?.message ? "danger" : "default"}
                  errorMessage={fieldState.error?.message}
                  minValue={today(getLocalTimeZone())}
                  defaultValue={today(getLocalTimeZone())}
                />
              )}
            />
          </div>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Numero de vuelo</Label>
            <Controller
              name="numberFlight"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  variant="bordered"
                  type="text"
                  fullWidth={true}
                  isInvalid={Boolean(fieldState.error?.message)}
                  color={fieldState.error?.message ? "danger" : "default"}
                  errorMessage={fieldState.error?.message}
                  classNames={{ inputWrapper: "!min-h-[60px] h-10" }}
                  value={field.value}
                  placeholder="Ej: FR1234"
                />
              )}
            />
          </div>
        </>
      )}
      {type === "transfer" && (
        <>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Fecha del servicio</Label>
            <Controller
              name="startDate"
              control={control}
              render={({ field, fieldState }) => (
                <DatePicker
                  {...field}
                  variant="bordered"
                  label=" "
                  className="max-w-[284px]"
                  classNames={{ inputWrapper: "!min-h-[60px] h-10" }}
                  fullWidth={true}
                  isInvalid={Boolean(fieldState.error?.message)}
                  color={fieldState.error?.message ? "danger" : "default"}
                  errorMessage={fieldState.error?.message}
                  minValue={today(getLocalTimeZone())}
                  defaultValue={today(getLocalTimeZone())}
                />
              )}
            />
          </div>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Nombre del Servicio</Label>
            <Controller
              name="transferName"
              control={control}
              render={({ field, fieldState }) => (
                <Select
                  {...field}
                  className="max-w-xs"
                  items={TRANSFER_DATA}
                  label="Tipo"
                  placeholder="Selecciona un transporte"
                  variant="bordered"
                  isInvalid={Boolean(fieldState.error?.message)}
                  color={fieldState.error?.message ? "danger" : "default"}
                  errorMessage={fieldState.error?.message}
                >
                  {(animal) => (
                    <SelectItem onPress={() => setSelected(animal.key)}>
                      {animal.label}
                    </SelectItem>
                  )}
                </Select>
              )}
            />
          </div>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Descripcion</Label>
            <Controller
              name="description"
              control={control}
              render={({ field, fieldState }) => (
                <Textarea
                  {...field}
                  variant="bordered"
                  type="text"
                  fullWidth={true}
                  isInvalid={Boolean(fieldState.error?.message)}
                  color={fieldState.error?.message ? "danger" : "default"}
                  errorMessage={fieldState.error?.message}
                  className="max-w-xs"
                  classNames={{ inputWrapper: "!min-h-[60px] h-10" }}
                  placeholder="Enter tu descripcion"
                />
              )}
            />
          </div>
        </>
      )}
      {type === "hotel" && (
        <>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Fecha de entrada</Label>
            <Controller
              name="startDate"
              control={control}
              render={({ field, fieldState }) => (
                <DatePicker
                  {...field}
                  variant="bordered"
                  label=" "
                  fullWidth={true}
                  isInvalid={Boolean(fieldState.error?.message)}
                  color={fieldState.error?.message ? "danger" : "default"}
                  errorMessage={fieldState.error?.message}
                  className="max-w-[284px]"
                  minValue={today(getLocalTimeZone())}
                  defaultValue={today(getLocalTimeZone())}
                />
              )}
            />
          </div>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Fecha de salida</Label>
            <Controller
              name="endDate"
              control={control}
              render={({ field, fieldState }) => (
                <DatePicker
                  {...field}
                  variant="bordered"
                  label=" "
                  fullWidth={true}
                  isInvalid={Boolean(fieldState.error?.message)}
                  color={fieldState.error?.message ? "danger" : "default"}
                  errorMessage={fieldState.error?.message}
                  className="max-w-[284px]"
                  minValue={today(getLocalTimeZone())}
                  defaultValue={today(getLocalTimeZone())}
                />
              )}
            />
          </div>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Nombre del hotel</Label>
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  variant="bordered"
                  type="text"
                  fullWidth={true}
                  isInvalid={Boolean(fieldState.error?.message)}
                  color={fieldState.error?.message ? "danger" : "default"}
                  errorMessage={fieldState.error?.message}
                  classNames={{ inputWrapper: "!min-h-[60px] h-10" }}
                  placeholder="Ej: Hotel Roma"
                />
              )}
            />
          </div>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Categoría</Label>
            <Controller
              name="category"
              control={control}
              render={({ field, fieldState }) => (
                <RadioGroup
                  {...field}
                  isInvalid={Boolean(fieldState.error?.message)}
                  color={fieldState.error?.message ? "danger" : "default"}
                  errorMessage={fieldState.error?.message}
                >
                  <Radio value="one">
                    <Stars count={1} />
                  </Radio>
                  <Radio value="two">
                    <Stars count={2} />
                  </Radio>
                  <Radio value="three">
                    <Stars count={3} />
                  </Radio>
                  <Radio value="four">
                    <Stars count={4} />
                  </Radio>
                  <Radio value="five">
                    <Stars count={5} />
                  </Radio>
                  <Radio value="none">Sin categoría</Radio>
                </RadioGroup>
              )}
            />
          </div>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Ciudad</Label>
            <Controller
              name="city"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  variant="bordered"
                  type="text"
                  fullWidth={true}
                  isInvalid={Boolean(fieldState.error?.message)}
                  color={fieldState.error?.message ? "danger" : "default"}
                  errorMessage={fieldState.error?.message}
                  classNames={{ inputWrapper: "!min-h-[60px] h-10" }}
                  placeholder="Ej: Roma"
                />
              )}
            />
          </div>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>País</Label>
            <Controller
              name="country"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  variant="bordered"
                  type="text"
                  fullWidth={true}
                  isInvalid={Boolean(fieldState.error?.message)}
                  color={fieldState.error?.message ? "danger" : "default"}
                  errorMessage={fieldState.error?.message}
                  classNames={{ inputWrapper: "!min-h-[60px] h-10" }}
                  placeholder="Ej: Italia"
                />
              )}
            />
          </div>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Descripcion</Label>
            <Controller
              name="description"
              control={control}
              render={({ field, fieldState }) => (
                <Textarea
                  {...field}
                  variant="bordered"
                  type="text"
                  fullWidth={true}
                  isInvalid={Boolean(fieldState.error?.message)}
                  color={fieldState.error?.message ? "danger" : "default"}
                  errorMessage={fieldState.error?.message}
                  className="max-w-xs"
                  classNames={{ inputWrapper: "!min-h-[60px] h-10" }}
                  placeholder="Enter tu descripcion"
                />
              )}
            />
          </div>
        </>
      )}
      {type === "trip" && (
        <>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Fecha de la actividad</Label>
            <Controller
              name="startDate"
              control={control}
              render={({ field, fieldState }) => (
                <DatePicker
                  {...field}
                  variant="bordered"
                  label=" "
                  fullWidth={true}
                  isInvalid={Boolean(fieldState.error?.message)}
                  color={fieldState.error?.message ? "danger" : "default"}
                  errorMessage={fieldState.error?.message}
                  className="max-w-[284px]"
                  minValue={today(getLocalTimeZone())}
                  defaultValue={today(getLocalTimeZone())}
                />
              )}
            />
          </div>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Nombre de la actividad</Label>
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  variant="bordered"
                  type="text"
                  fullWidth={true}
                  isInvalid={Boolean(fieldState.error?.message)}
                  color={fieldState.error?.message ? "danger" : "default"}
                  errorMessage={fieldState.error?.message}
                  classNames={{ inputWrapper: "!min-h-[60px] h-10" }}
                  placeholder="Ej: Coliseo"
                />
              )}
            />
          </div>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Url imagen de la actividad</Label>
            <Controller
              name="image_url"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  variant="bordered"
                  type="url"
                  fullWidth={true}
                  isInvalid={Boolean(fieldState.error?.message)}
                  color={fieldState.error?.message ? "danger" : "default"}
                  errorMessage={fieldState.error?.message}
                  classNames={{ inputWrapper: "!min-h-[60px] h-10" }}
                  placeholder="Ej: https://www.italia.com/..."
                />
              )}
            />
          </div>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Duración de la actividad</Label>
            <Controller
              name="range"
              control={control}
              render={({ field, fieldState }) => (
                <DateRangePicker
                  {...field}
                  hideTimeZone
                  visibleMonths={2}
                  variant="bordered"
                  label=" "
                  fullWidth={true}
                  isInvalid={Boolean(fieldState.error?.message)}
                  color={fieldState.error?.message ? "danger" : "default"}
                  errorMessage={fieldState.error?.message}
                  className="max-w-[284px]"
                  minValue={today(getLocalTimeZone())}
                />
              )}
            />
          </div>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Descripcion</Label>
            <Controller
              name="description"
              control={control}
              render={({ field, fieldState }) => (
                <Textarea
                  {...field}
                  variant="bordered"
                  type="text"
                  fullWidth={true}
                  isInvalid={Boolean(fieldState.error?.message)}
                  color={fieldState.error?.message ? "danger" : "default"}
                  errorMessage={fieldState.error?.message}
                  className="max-w-xs"
                  classNames={{ inputWrapper: "!min-h-[60px] h-10" }}
                  placeholder="Enter tu descripcion"
                />
              )}
            />
          </div>
        </>
      )}
    </div>
  );
}
