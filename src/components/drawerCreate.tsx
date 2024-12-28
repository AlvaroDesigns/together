import { Button, DrawerCustom, Status } from "@/components";
import { ENDPOINT } from "@/constants";
import { createItinerary } from "@/helpers/schema";
import { useForm, useLoading } from "@/hooks";
import Services from "@/services";
import { useUserStore } from "@/stores";
import { betweenDates } from "@/utils";
import { getLocalTimeZone, today } from "@internationalized/date";
import {
  Button as ButtonUI,
  DateRangePicker,
  Input,
  useDisclosure,
} from "@nextui-org/react";
import { AxiosResponse } from "axios";
import { useCallback, useState } from "react";
import { Controller } from "react-hook-form";

interface DrawerItFromProps {
  control: ReturnType<typeof useForm>["control"];
}

export function DrawerItFrom({ control }: DrawerItFromProps) {
  return (
    <div className="flex flex-col gap-4 mx-4 mt-2">
      <Controller
        name="title"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            isRequired
            radius="full"
            type="text"
            label="Nombre del itinerario"
            fullWidth={true}
            placeholder="Introduce tu titulo del itinerario"
            classNames={{
              inputWrapper: "!min-h-[60px] h-10",
            }}
            isInvalid={Boolean(fieldState.error?.message)}
            color={fieldState.error?.message ? "danger" : "default"}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name="dates"
        control={control}
        render={({ field, fieldState }) => (
          <DateRangePicker
            {...field}
            isRequired
            radius="full"
            label="Fecha del viaje"
            classNames={{
              inputWrapper: "!min-h-[60px]",
            }}
            visibleMonths={2}
            isInvalid={Boolean(fieldState.error?.message)}
            color={fieldState.error?.message ? "danger" : "default"}
            errorMessage={fieldState.error?.message}
            minValue={today(getLocalTimeZone())}
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
            radius="full"
            type="url"
            label="Url de la imagen"
            fullWidth={true}
            placeholder="Introduce tu imagen"
            classNames={{
              inputWrapper: "!min-h-[60px] h-10",
            }}
            isInvalid={Boolean(fieldState.error?.message)}
            color={fieldState.error?.message ? "danger" : "default"}
            errorMessage={fieldState.error?.message}
            value={field.value}
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
    values: "",
    schema: createItinerary,
  });

  const onSubmit = useCallback(async (value: any) => {
    if (isStatus) {
      onClose();
    }

    const error = Object.entries(errors).length !== 0;
    console.log("error", error, value);

    /* Exit */
    if (error) return;

    /* Start Loading */
    startLoading();

    /* Call API */
    Services()
      .post(`${ENDPOINT.ITINERARY}/${userId}`, {
        title: value.title,
        days: betweenDates(value.dates.start, value.dates.end),
        startDate: value.dates.start,
        endDate: value.dates.end,
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
  }, []);

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
              text={" Su itinerario se ha creado correctamente."}
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
