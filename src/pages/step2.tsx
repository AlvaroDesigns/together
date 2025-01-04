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
import { VARIANT_TYPE_SECTION } from "@/types";
import { formatDayForDays } from "@/utils";
import { Button as ButtonUi, useDisclosure } from "@nextui-org/react";
import { useTheme } from "@nextui-org/use-theme";
import { AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";

export default function Step2() {
  const { theme } = useTheme();

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { setter, itinerary, edit } = useDataStore((state) => state);

  const { isLoading, startLoading, stopLoading } = useLoading();
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [data, setData] = useState<
    | {
        id: number;
        title?: string | undefined;
        days: number;
        date: string | undefined;
        startDate: string | undefined;
        endDate: string | undefined;
        image: string | undefined;
        userId: number;
        items?: {
          id: number;
          type: string;
          startDate: string;
          [key: string]: unknown;
        }[];
      }
    | []
    | unknown
  >([]);

  const { control, errors, handleSubmit, watch, reset } = useForm({
    values: edit,
    schema: sectionSchema,
  });

  const TYPE = watch("type");

  const ServiceDetails = async (value, data) => {
    return await Services()
      .post(`${ENDPOINT.DETAILS}/${data?.itemId}`, {
        type: TYPE || VARIANT_TYPE_SECTION.FLIGHT,
        days: 1,
        startDate: value.startDate,
        endDate: value?.startDate,
        departure: data?.departure?.split(",")[0] || value.departure,
        departureLabel: data?.departureLabel,
        destination: data?.arrivadas?.split(",")[0] || value.destination,
        destinationLabel: data?.arrivadasLabel,
        arrivalTime: data?.arrivalTime || null,
        stars: Number(value.category),
        placeUrl: null,
        numberFlight: value.numberFlight,
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

        setter({ itinerary: data });
      })
      .catch((error) => console.log("Error", error))
      .finally(() => {
        stopLoading();
        if (!isLoadingPage) {
          onClose();
        }
      });
  };

  const onEdit = useCallback(
    (id: number) => {
      console.log(data, itinerary);

      if (Array.isArray(data) && data.length === 0) {
        return console.log("No data");
      }

      const product = data?.items.find(
        (item: { id: number }) => item.id === id
      );
      setter({ edit: product });
      onOpen();
    },
    [data]
  );

  const onSubmit = useCallback(
    (value: any) => {
      console.log(errors);

      startLoading();

      if (TYPE === VARIANT_TYPE_SECTION.FLIGHT) {
        return Services()
          .get(`${ENDPOINT.FLIGHTS}?flightNumber=${value?.numberFlight}`)
          .then((res: AxiosResponse) => {
            const { data } = res;

            /* Call API */
            ServiceDetails(value, data);
          });
      }

      return ServiceDetails(value, {});
      /* Call API */
    },
    [TYPE]
  );

  useEffect(() => {
    /* Call API */
    Services()
      .get(`${ENDPOINT.DETAILS}/${itinerary?.itemId}`)
      .then((res: AxiosResponse) => {
        const { data } = res;

        /* Set */
        setter({ itinerary: data });
        setData(data);
      })
      .finally(() => setTimeout(() => setIsLoadingPage(false), 500));
  }, []);
  /*
  useEffect(() => {
    try {
      // const response = axios.request(options);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }, []);
*/

  const switchCard = (data) => {
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
          onPressEdit={() => onEdit(id)}
        />
      ),
    };

    return CARDS[data.type.toUpperCase() as keyof object];
  };

  return (
    <RootLayout>
      <Hero
        loading={Boolean(!data?.items)}
        startDate={itinerary?.startDate}
        endDate={itinerary?.endDate}
        title={itinerary?.title}
        days={itinerary?.days}
        image={itinerary?.image}
      />
      <div
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
      </div>
      <section className="relative flex flex-col mx-4 mt-5 mb-3">
        <CardWeather />
      </section>
      <section className="relative flex flex-col mx-4 mb-3">
        {Array.isArray(data) && data.length === 0 ? (
          <CardSkeleton count={5} />
        ) : !Array.isArray(data) && Array.isArray(data?.items) ? (
          data?.items?.length > 0 ? (
            data?.items
              ?.toSorted((a, b) => a.id - b.id)
              .map((item: { id: string; type: string; startDate: Date }) => (
                <div className="mb-4" key={`${item.id}-${item.type}`}>
                  <p
                    className={`${subtitle({
                      weight: "bold",
                      size: "sm",
                    })} flex items-center py-2`}
                  >
                    DÍA {formatDayForDays(itinerary?.startDate, item.startDate)}
                  </p>
                  {switchCard(item)}
                </div>
              ))
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
          className="bg-gradient-to-r shadow-medium z-50 text-md from-[#009688] to-[#009688] text-white h-14 min-h-[60px] fixed bottom-5 w-[calc(100%-33px)] hover:border-transparent"
          onPress={onOpen}
        >
          Añadir sección
        </ButtonUi>
        <DrawerCustom
          isOpen={isOpen}
          header="Configura tu viaje"
          onOpenChange={onOpenChange}
          body={<SectionForm control={control} type={TYPE} reset={reset} />}
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
