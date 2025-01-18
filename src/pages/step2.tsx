import {
  Button,
  CardFlight,
  CardHotel,
  CardOut,
  CardSkeleton,
  CardTransfer,
  CardTrip,
  CardWeather,
  DrawerCustom,
  Hero,
  RootLayout,
  SectionForm,
} from "@/components";

import { subtitle } from "@/components/primitives";
import { ENDPOINT } from "@/constants";
import { sectionSchema } from "@/helpers/schema";
import { useForm, useLoading } from "@/hooks";
import Services from "@/services";
import { useDataStore } from "@/stores";
import { detailsData } from "@/stores/DataStore";
import { DetailsTypes, ItineraryTypes } from "@/stores/DataStore/index.types";
import { VARIANT_TYPE_SECTION } from "@/types";
import { formatDay, formatDayForDays } from "@/utils";
import { Button as ButtonUi, useDisclosure } from "@heroui/react";
import { useTheme } from "@heroui/use-theme";
import axios, { AxiosResponse } from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useFieldArray } from "react-hook-form";

interface RepeatingTypes {
  control: ReturnType<typeof useForm>["control"];
  watch: ReturnType<typeof useForm>["watch"];
  onOpen: () => void;
}

const Repeating = ({ control, watch, onOpen }: RepeatingTypes) => {
  const { setter, itinerary } = useDataStore((state) => state);
  const items = useDataStore((state) => state.itinerary?.items);

  const { fields, remove, append } = useFieldArray({ control, name: "items" });

  if (fields.length === 0 && items && items?.length > 0) {
    items?.forEach((item) => append(item));
  }

  const watchFieldArray: DetailsTypes[] = watch("items");
  const controlledFields: DetailsTypes[] = useMemo(
    () =>
      fields?.map((field, index) => {
        return {
          ...field,
          ...(watchFieldArray[index] as DetailsTypes),
        };
      }),
    [fields, watchFieldArray]
  );

  const onEdit = useCallback(
    (id: number) => {
      if (Array.isArray(items) && items.length === 0) {
        return console.log("No data");
      }

      const product = items?.find((item: { id: number }) => item.id === id);

      setter({ edit: product });
      setTimeout(() => onOpen(), 500);
    },
    [items, onOpen, setter]
  );

  const switchCard = (data: any, index: number | number[] | undefined) => {
    const {
      id,
      startDate,
      endDate,
      name,
      cityName,
      country,
      departure,
      stars,
      departureLabel,
      arrivalTime,
      imageUrl,
      description,
      destination,
      destinationLabel,
      numberFlight,
    } = data;

    const CARDS = {
      TRIP: (
        <CardTrip
          key={`trip-${id}`}
          name={name}
          startDate={startDate}
          endDate={endDate}
          imageUrl={imageUrl}
          arrivalTime={arrivalTime}
          descriptions={description}
          onPressEdit={() => onEdit(id)}
          onPressDelete={() => remove(index)}
        />
      ),
      TRANSFER: (
        <CardTransfer
          key={`transfer-${id}`}
          name={name}
          arrivalTime={arrivalTime}
          startDate={startDate}
          endDate={endDate}
          descriptions={description}
          onPressEdit={() => onEdit(id)}
          onPressDelete={() => remove(index)}
        />
      ),
      HOTEL: (
        <CardHotel
          key={`hotel-${id}`}
          startDate={startDate}
          stars={stars}
          endDate={endDate}
          name={name}
          city={cityName}
          country={country}
          imageUrl={imageUrl}
          descriptions={description}
          onPressEdit={() => onEdit(id)}
          onPressDelete={() => remove(index)}
        />
      ),
      FLIGHT: (
        <CardFlight
          key={`flight-${id}`}
          startDate={startDate}
          departure={departure}
          departureLabel={departureLabel}
          destination={destination}
          destinationLabel={destinationLabel}
          numberFlight={numberFlight}
          descriptions={description}
          arrivalTime={arrivalTime}
          onPressEdit={() => onEdit(id)}
          onPressDelete={() => remove(index)}
        />
      ),
    };

    return CARDS[data.type.toUpperCase() as keyof object];
  };

  return (
    <>
      {controlledFields
        ?.toSorted(
          (a, b) =>
            new Date(a.startDate ?? 0).getTime() -
            new Date(b.startDate ?? 0).getTime()
        )
        .map((item, index: number) => (
          <div className="mb-4" key={`${item.id}-${item.type}`}>
            <p
              className={`${subtitle({
                weight: "bold",
                size: "sm",
              })} flex items-center py-2`}
            >
              DÍA {formatDayForDays(itinerary?.startDate, item.startDate)}
            </p>
            {switchCard(item, index)}
          </div>
        ))}
    </>
  );
};

export default function Step2() {
  const { theme } = useTheme();

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { setter, itinerary, edit } = useDataStore((state) => state);
  const items = useDataStore((state) => state.itinerary?.items);

  const { isLoading, startLoading, stopLoading } = useLoading();
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [data, setData] = useState<ItineraryTypes | null>(null);

  const { control, watch } = useForm({
    values: { items },
    schema: sectionSchema,
  });

  const {
    control: controlForm,
    reset: resetForm,
    watch: watchForm,
    handleSubmit,
  } = useForm({
    values: edit,
    schema: sectionSchema,
  });

  const TYPE = watchForm("type");
  const ServiceDetails = async (value: any, data: any | object) => {
    return await Services()
      .post(`${ENDPOINT.DETAILS}/${itinerary?.id}`, {
        type: TYPE || VARIANT_TYPE_SECTION.FLIGHT,
        days: 1,
        startDate: value.startDate,
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
        numberFlight: value?.numberFlight,
        description: value?.description?.split("\n"),
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
        if (!isLoadingPage) {
          onClose();
        }
      });
  };

  const onSubmit = useCallback(
    async (value: any) => {
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
    },
    [TYPE]
  );

  useEffect(() => {
    axios
      .all([
        Services().get(
          `${ENDPOINT.OPERATIVE}?query=${itinerary?.title}`,
          "weather"
        ),
        Services().get(`${ENDPOINT.DETAILS}/${itinerary?.id}`, "details"),
      ])
      .then(
        axios.spread((weatherData, details) => {
          const { data: weatherDataInfo } = weatherData || {};
          const { data } = details || {};

          const weather = {
            ...weatherDataInfo?.intervals[0].values,
          };

          /* Set */
          setter({ itinerary: { ...data, weather } });
          setData({ ...data, weather });
        })
      )
      .finally(() => setTimeout(() => setIsLoadingPage(false), 1000));
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setter({ edit: detailsData });
    }
  }, [isOpen, setter]);

  return (
    <RootLayout>
      <Hero
        loading={!items}
        startDate={itinerary?.startDate}
        endDate={itinerary?.endDate}
        title={itinerary?.title}
        days={itinerary?.days}
        image={itinerary?.image}
      />
      <section
        className="z-[30] flex"
        data-height="250"
        data-style="curve"
        data-position="bottom"
      >
        <svg
          className="absolute w-full left-0 top-[270px] h-[70px] transform rotate-180 scale-y-[-1]"
          aria-hidden="true"
          fill={`${theme === "dark" ? "#000" : "#fff"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path d="M 0 0 c 0 0 200 50 500 50 s 500 -50 500 -50 v 101 h -1000 v -100 z" />
        </svg>
      </section>
      {data?.weather && data?.weather?.temperatureMax && (
        <section className="relative flex flex-col mx-4 mt-5 mb-3">
          <CardWeather
            humidity={data?.weather?.humidityAvg}
            max={data?.weather?.temperatureMax}
            min={data?.weather?.temperatureMin}
          />
        </section>
      )}
      <section className="relative flex flex-col mx-4 mb-3">
        {!isLoadingPage && data?.items ? (
          data?.items?.length > 0 ? (
            <Repeating control={control} watch={watch} onOpen={onOpen} />
          ) : (
            <div className="my-8">
              <CardOut />
            </div>
          )
        ) : (
          <CardSkeleton count={5} />
        )}
        <ButtonUi
          radius="full"
          color="primary"
          className="bg-gradient-to-r shadow-medium z-50 text-md bg-primary text-white h-14 min-h-[60px] fixed bottom-5 w-[calc(100%-33px)] hover:border-transparent"
          onPress={onOpen}
        >
          Añadir sección
        </ButtonUi>
        <DrawerCustom
          isOpen={isOpen}
          header="Configura tu viaje"
          onOpenChange={onOpenChange}
          body={
            <SectionForm
              data={edit}
              type={edit?.type}
              control={controlForm}
              reset={resetForm}
            />
          }
          footer={
            <Button isLoading={isLoading} onPress={handleSubmit(onSubmit)}>
              Guardar Actividad
            </Button>
          }
        />
      </section>
    </RootLayout>
  );
}
