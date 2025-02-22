import { Button, DrawerCustom, Status } from "@/components";
import { ENDPOINT } from "@/constants";
import { createItinerary } from "@/helpers/schema";
import { useForm, useLoading } from "@/hooks";
import Services from "@/services";
import { useUserStore } from "@/stores";
import { getLocalTimeZone, today } from "@internationalized/date";

import { betweenDates, formatDay } from "@/utils";
import { addHour } from "@formkit/tempo";
import {
  Autocomplete,
  AutocompleteItem,
  Button as ButtonUI,
  DateRangePicker,
  useDisclosure,
} from "@heroui/react";
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
              latitude: number;
            }) => (
              <AutocompleteItem
                key={`${item?.key}-${item?.countryName}-${item.latitude}`}
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
            isInvalid={Boolean(fieldState.error?.message)}
            color={fieldState.error?.message ? "danger" : "default"}
            errorMessage={fieldState.error?.message}
            minValue={today(getLocalTimeZone())}
            maxValue={today(getLocalTimeZone()).add({ days: 365 })}
            classNames={{
              calendar:
                "w-full bg-white shadow-lg border border-default-200/60",
              calendarContent: "w-[300px] bg-primary/10",
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
    async (value: { title: string; dates: { start: Date; end: Date } }) => {
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
        .get(`${ENDPOINT.IMAGE}?query=${value.title}`)
        .then((res) => {
          Services()
            .post(`${ENDPOINT.ITINERARY}/${userId}`, {
              title: value.title,
              days: betweenDates(
                value.dates.start.toISOString(),
                value.dates.end.toISOString()
              ),
              startDate: formatDay(
                addHour(value?.dates?.start, 1),
                "YYYY-MM-DD HH:mm:ss"
              ),
              endDate: formatDay(
                addHour(value?.dates?.end, 1),
                "YYYY-MM-DD HH:mm:ss"
              ),
              image: res.data?.src,
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
        });
    },
    [isStatus, userId]
  );

  return (
    <>
      <ButtonUI
        radius="full"
        color="primary"
        onPress={onOpen}
        className="bg-gradient-to-r z-50 text-md bg-primary text-white h-14 min-h-[60px] fixed bottom-5 w-[calc(100%-33px)] hover:border-transparent"
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
