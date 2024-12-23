import { ENDPOINT } from "@/constants";
import { createItinerary } from "@/helpers/schema";
import { useForm, useLoading } from "@/hooks";
import Services from "@/services";
import { betweenDates } from "@/utils";
import {
  Button,
  DateRangePicker,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Input,
  useDisclosure,
} from "@nextui-org/react";
import { AxiosResponse } from "axios";
import { useCallback } from "react";
import { Controller } from "react-hook-form";

export default function DrawerItinerary() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const { isLoading, startLoading, stopLoading } = useLoading();
  const { control, errors, handleSubmit, watch } = useForm({
    values: "",
    schema: createItinerary,
  });
  console.log("errors", watch());
  const onSubmit = useCallback(async (value: any) => {
    const error = Object.entries(errors).length !== 0;
    console.log("error", error, value);

    /* Exit */
    if (error) return;

    console.log("value", {
      title: value.title,
      days: betweenDates(value.dates.start, value.dates.end),
      startDate: value.dates.start,
      endDate: value.dates.end,
      image: value.image,
      date: new Date(),
    });

    /* Start Loading */
    startLoading();

    /* Call API */
    Services()
      .post(`${ENDPOINT.ITINERARY}/1`, {
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
          return console.log("Error");
        }

        onClose();
        // navigate(ROUTES.HOME);
      })
      .catch((error) => console.log("Error", error))
      .finally(() => stopLoading());
  }, []);

  return (
    <>
      <div className="flex gap-2">
        <Button
          radius="full"
          color="primary"
          onPress={onOpen}
          className="bg-gradient-to-r z-50 text-md from-[#009688] to-[#009688] text-white h-14 min-h-[60px] fixed bottom-5 w-[calc(100%-33px)] hover:border-transparent"
        >
          Crear mi plan de viaje
        </Button>
      </div>
      <Drawer
        backdrop="blur"
        placement="bottom"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          {() => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                Crear Itinerario
              </DrawerHeader>
              <DrawerBody>
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
                      value={field.value}
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
                      value={field.value}
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
                      type="text"
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
              </DrawerBody>
              <DrawerFooter>
                <Button
                  radius="full"
                  color="primary"
                  type="submit"
                  isLoading={isLoading}
                  onPress={handleSubmit(onSubmit)}
                  className="bg-gradient-to-r text-md from-[#009688] to-[#009688] text-white h-14 w-full min-h-[60px] hover:border-transparent"
                >
                  Guardar itinerario
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
