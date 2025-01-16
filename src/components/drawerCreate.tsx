import { Button, DrawerCustom, Status } from "@/components";
import { ENDPOINT } from "@/constants";
import { createItinerary } from "@/helpers/schema";
import { useForm, useLoading } from "@/hooks";
import Services from "@/services";
import { useUserStore } from "@/stores";
import { betweenDates } from "@/utils";
import { addHour } from "@formkit/tempo";
import { getLocalTimeZone, today } from "@internationalized/date";

import {
  Autocomplete,
  AutocompleteItem,
  Button as ButtonUI,
  DateRangePicker,
  Input,
  useDisclosure,
} from "@nextui-org/react";
import { useAsyncList } from "@react-stately/data";
import { AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { useDebounce } from "use-debounce";

interface DrawerItFromProps {
  control: ReturnType<typeof useForm>["control"];
}

export function DrawerItFrom({ control }: DrawerItFromProps) {
  const [inputValue, setInputValue] = useState(""); // Valor actual del input
  const [debouncedValue] = useDebounce(inputValue, 300);

  const list = useAsyncList({
    async load() {
      if (!inputValue) return { items: [] }; // No cargar si no hay texto

      const resp = await Services().get(
        `${ENDPOINT.DIRECTIONS}?query=${inputValue}`
      );
      console.log("resp", list);

      return {
        items: resp.data.data,
      };
    },
  });

  useEffect(() => {
    list.setFilterText(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="flex flex-col gap-4 mx-4 mt-2">
      <Controller
        name="title"
        control={control}
        render={({ field, fieldState }) => (
          <Autocomplete
            {...field}
            isRequired
            inputValue={inputValue as string}
            isLoading={list.isLoading}
            items={(list?.items as []) || []}
            fullWidth={true}
            label="¿A dónde vas?"
            placeholder="Ej, Madrid, Paris, Japon"
            variant="bordered"
            listboxProps={{
              emptyContent: "El campo está vacío",
            }}
            isInvalid={Boolean(fieldState.error?.message)}
            color={fieldState.error?.message ? "danger" : "default"}
            errorMessage={fieldState.error?.message}
            onInputChange={(value) => {
              setInputValue(value);
              field.onChange(value);
            }}
          >
            {(item: {
              key: string;
              name: string;
              stateName?: string;
              countryName: string;
            }) => (
              <AutocompleteItem
                key={item?.key}
                textValue={`${item?.key}-${item?.countryName}`}
                className="capitalize"
              >
                <div>
                  <p className="text-sm">{item?.name}</p>
                  <p className="text-xs text-gray-500">
                    {item?.stateName && `${item?.stateName} - `}
                    {item?.countryName}
                  </p>
                </div>
              </AutocompleteItem>
            )}
          </Autocomplete>
        )}
      />
      <Controller
        name="dates"
        control={control}
        render={({ field, fieldState }) => (
          <DateRangePicker
            {...field}
            isRequired
            variant="bordered"
            label="Fecha del viaje"
            // visibleMonths={2}
            isInvalid={Boolean(fieldState.error?.message)}
            color={fieldState.error?.message ? "danger" : "default"}
            errorMessage={fieldState.error?.message}
            minValue={today(getLocalTimeZone())}
            maxValue={today(getLocalTimeZone()).add({ days: 365 })}
            classNames={{
              // calendarContent: "w-[500px]",
              // selectorButton: "bg-[#009688] text-white",
              calendar:
                "w-full bg-white shadow-lg border border-default-200/60",
              calendarContent: "w-[300px] bg-red-500/10",
              popoverContent: "w-full bg-red-500/10",
              separator: "w-6 h-6 text-center text-default-500",
              input:
                "w-full border-none outline-none focus:border-none focus:ring-0",
            }}
            calendarProps={{
              classNames: {
                grid: "grid-cols-7",
                gridHeader: "text-sm ",
                cell: "text-sm  text-white",
              },
            }}
          />
        )}
      />
      <Controller
        name="image"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            isRequired
            type="url"
            variant="bordered"
            label="Url de la imagen"
            fullWidth={true}
            placeholder="Introduce tu imagen de internet"
            isInvalid={Boolean(fieldState.error?.message)}
            color={fieldState.error?.message ? "danger" : "default"}
            errorMessage={fieldState.error?.message}
            value={field.value as string}
          />
        )}
      />
    </div>
  );
}

export default function DrawerCreate() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { userId } = useUserStore((state) => state.user);
  const [isStatus, setStatus] = useState(false);

  const { isLoading, startLoading, stopLoading } = useLoading();
  const { control, errors, handleSubmit } = useForm({
    values: undefined,
    schema: createItinerary,
  });

  const onSubmit = useCallback(
    async (value: any) => {
      if (isStatus) {
        return onClose();
      }

      const error = Object.entries(errors).length !== 0;

      /* Exit */
      if (error) return;

      /* Start Loading */
      startLoading();

      /* Call API */
      Services()
        .post(`${ENDPOINT.ITINERARY}/${userId}`, {
          title: value.title,
          days: betweenDates(value.dates.start, value.dates.end),
          startDate: addHour(value?.dates?.start, 1),
          endDate: addHour(value?.dates?.end, 1),
          image: value.image,
          date: new Date(),
        })
        .then((res: AxiosResponse) => {
          const { status } = res;
          if (status !== 201) {
            stopLoading();
            return console.log("Error");
          }

          setStatus(true);
        })
        .catch((error) => console.log("Error", error))
        .finally(() => stopLoading());
    },
    [isStatus]
  );

  return (
    <>
      <ButtonUI
        radius="full"
        color="primary"
        onPress={onOpen}
        className="bg-gradient-to-r z-50 text-md from-[#009688] to-[#009688] text-white h-14 min-h-[60px] fixed bottom-5 w-[calc(100%-33px)] hover:border-transparent"
      >
        Crear mi plan de viaje
      </ButtonUI>
      <DrawerCustom
        backdrop="blur"
        placement="bottom"
        radius="lg"
        size="md"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        header="Crear Itinerario"
        body={
          isStatus ? (
            <Status
              title={"¡Maravilloso!"}
              text={"Su itinerario se ha creado correctamente."}
            />
          ) : (
            <DrawerItFrom control={control} />
          )
        }
        footer={
          <Button onPress={handleSubmit(onSubmit)} isLoading={isLoading}>
            {isStatus ? "Cerrar" : "Guardar itinerario"}
          </Button>
        }
      />
    </>
  );
}
