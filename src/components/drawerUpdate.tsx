import { ENDPOINT } from "@/constants";
import { sectionSchema } from "@/helpers/schema";
import { useForm, useLoading } from "@/hooks";
import Services from "@/services";
import { useDataStore } from "@/stores";
import { VARIANT_TYPE_SECTION } from "@/types";
import { formatDay } from "@/utils";
import { AxiosResponse } from "axios";
import { useCallback, useEffect } from "react";
import Button from "./button";
import DrawerCustom from "./drawerCustom";
import SectionForm from "./Form/sectionForm";

interface DrawerUpdateProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenChange: (isOpen: boolean) => void;
}

export const DrawerUpdate = ({
  isOpen,
  onClose,
  onOpenChange,
}: DrawerUpdateProps) => {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const { itinerary, setter, editId, isEdits } = useDataStore((state) => state);

  const { items } = itinerary || {};
  const product = items?.find((item: { id: number }) => item.id === editId);

  const { control, reset, handleSubmit, watch } = useForm({
    values: {
      type: VARIANT_TYPE_SECTION.FLIGHT,
      startDate: itinerary?.startDate,
      ...product,
    },
    schema: sectionSchema,
  });

  const TYPE = watch("type");

  useEffect(() => {
    if (isOpen && editId) {
      if (product) {
        reset(product);
      }
    }
  }, [isOpen, editId, items, reset]);

  const handleDrawerClose = useCallback(
    (isOpen: boolean) => {
      onOpenChange(isOpen);
      if (!isOpen) {
        if (isEdits) {
          setter({ editId: null });
        }
        reset({ type: VARIANT_TYPE_SECTION.FLIGHT });
      }
    },
    [isEdits, isOpen]
  );

  const ServiceDetails = async (value: any, data: any | object) => {
    return await Services()
      .post(`${ENDPOINT.DETAILS}/${itinerary?.id}`, {
        type: value.type,
        days: 1,
        startDate: value.startDate || itinerary?.startDate,
        endDate: data.endDate || value?.endDate,
        departure: data?.depart?.iata || value.departure,
        departureLabel: data?.depart?.cityName,
        destination: data?.arrive?.iata || value.destination,
        destinationLabel: data?.arrive?.cityName,
        arrivalTime:
          data?.depart?.time && data?.arrive?.time
            ? `${data?.depart?.time}-${data?.arrive?.time}`
            : null,
        stars: Number(value.category),
        placeUrl: null,
        numberFlight: value?.numberFlight?.toUpperCase(),
        description: value?.description?.split("\n").trim(),
        imageUrl: value?.image_url,
        cityName: value?.city,
        region: null,
        country: value?.country,
        name: value?.name || value?.transferName,
        collapse: false,
      })
      .then((res: AxiosResponse) => {
        const { data } = res;
      })
      .catch((error) => console.log("Error", error))
      .finally(() => {
        stopLoading();
        onClose();
      });
  };

  const onSubmit = async (value: any) => {
    startLoading();

    if (TYPE === VARIANT_TYPE_SECTION.FLIGHT) {
      const date = formatDay(value.startDate);

      const res = await Services().get(
        `${ENDPOINT.FLIGHTS}?flightNumber=${value?.numberFlight}&date=${date}`
      );
      const dt = res?.data || {};
      /* Call API */
      return ServiceDetails(value, { items, ...dt });
    }

    /* Call API */
    return ServiceDetails(value, items);
  };

  return (
    <DrawerCustom
      isOpen={isOpen}
      header="Configura tu viaje"
      onOpenChange={handleDrawerClose}
      body={<SectionForm type={TYPE} control={control} reset={reset} />}
      footer={
        <Button isLoading={isLoading} onPress={handleSubmit(onSubmit)}>
          Guardar Actividad
        </Button>
      }
    />
  );
};

export default DrawerUpdate;
