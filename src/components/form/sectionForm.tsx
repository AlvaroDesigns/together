import {
  Divider,
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Textarea,
} from "@heroui/react";

import { Calendar, Label, Stars } from "@/components";
import { TRANSFER_DATA, TRIP } from "@/data";
import { useForm } from "@/hooks";
import { useDataStore } from "@/stores";
import { VARIANT_TYPE_SECTION, VariantTypeSection } from "@/types";
import { Controller } from "react-hook-form";

interface SectionFormProps {
  control: ReturnType<typeof useForm>["control"];
  reset: ReturnType<typeof useForm>["reset"];
  type: VariantTypeSection | undefined;
}

export default function SectionForm({
  control,
  reset,
  type = VARIANT_TYPE_SECTION.FLIGHT,
}: SectionFormProps) {
  const { itinerary } = useDataStore((state) => state);

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
          render={({ field, fieldState }) => {
            return (
              <Select
                {...field}
                className="max-w-xs"
                items={TRIP}
                label="Tipo"
                placeholder="Selecciona un tipo de viaje"
                variant="bordered"
                selectedKeys={[field.value]}
                isInvalid={Boolean(fieldState.error?.message)}
                color={fieldState.error?.message ? "danger" : "default"}
                errorMessage={fieldState.error?.message}
                onSelectionChange={handleChange}
              >
                {(op) => <SelectItem key={op.key}>{op.label}</SelectItem>}
              </Select>
            );
          }}
        />
      </div>
      {type === VARIANT_TYPE_SECTION.FLIGHT && (
        <>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Fecha de salida</Label>
            <Calendar
              name="startDate"
              control={control}
              startDate={itinerary?.startDate}
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
      {type === VARIANT_TYPE_SECTION.TRANSFER && (
        <>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Fecha del servicio</Label>
            <Calendar
              name="startDate"
              control={control}
              startDate={itinerary?.startDate}
            />
          </div>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Nombre del Servicio</Label>
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <Select
                  {...field}
                  className="max-w-xs"
                  items={TRANSFER_DATA}
                  label="Tipo"
                  selectedKeys={[field.value]}
                  placeholder="Selecciona un transporte"
                  variant="bordered"
                  isInvalid={Boolean(fieldState.error?.message)}
                  color={fieldState.error?.message ? "danger" : "default"}
                  errorMessage={fieldState.error?.message}
                >
                  {(transfer) => <SelectItem>{transfer.label}</SelectItem>}
                </Select>
              )}
            />
          </div>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Descripción</Label>
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
                  value={field.value}
                  classNames={{ inputWrapper: "!min-h-[60px] h-10" }}
                  placeholder="Introduce tu descripcion"
                />
              )}
            />
          </div>
        </>
      )}
      {type === VARIANT_TYPE_SECTION.HOTEL && (
        <>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Fecha de entrada</Label>
            <Calendar
              name="startDate"
              control={control}
              startDate={itinerary?.startDate}
            />
          </div>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Fecha de salida</Label>
            <Calendar
              name="endDate"
              control={control}
              startDate={itinerary?.startDate}
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
                  value={field.value}
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
                  value={field.value}
                >
                  <Radio value="1">
                    <Stars count={1} />
                  </Radio>
                  <Radio value="2">
                    <Stars count={2} />
                  </Radio>
                  <Radio value="3">
                    <Stars count={3} />
                  </Radio>
                  <Radio value="4">
                    <Stars count={4} />
                  </Radio>
                  <Radio value="5">
                    <Stars count={5} />
                  </Radio>
                  <Radio value="none">
                    <p className="dark:text-gray-600"> Sin categoría</p>
                  </Radio>
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
                  value={field.value}
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
                  value={field.value}
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
                  value={field.value}
                  className="max-w-xs"
                  classNames={{ inputWrapper: "!min-h-[60px] h-10" }}
                  placeholder="Introduce tu descripcion"
                />
              )}
            />
          </div>
        </>
      )}
      {type === VARIANT_TYPE_SECTION.TRIP && (
        <>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Duración de la actividad</Label>
            <Calendar
              name="startDate"
              control={control}
              startDate={itinerary?.startDate}
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
                  value={field.value}
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
                  value={field.value}
                  classNames={{ inputWrapper: "!min-h-[60px] h-10" }}
                  placeholder="Ej: https://www.italia.com/..."
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
                  value={field.value}
                  className="max-w-xs"
                  classNames={{ inputWrapper: "!min-h-[60px] h-10" }}
                  placeholder="Introduce tu descripcion"
                />
              )}
            />
          </div>
        </>
      )}
    </div>
  );
}
