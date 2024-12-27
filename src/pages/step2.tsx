import { subtitle } from "@/components/primitives";

import {
  Button,
  DrawerFrom,
  Hero,
  RootLayout,
  SectionForm,
} from "@/components";

import CardFlight from "@/components/cards/cardflight";
import CardHotel from "@/components/cards/cardHotel";
import CardSkeleton from "@/components/cards/cardSkeleton";
import CardTransfer from "@/components/cards/cardTransfer";
import CardTrip from "@/components/cards/cardTrip";
import { ENDPOINT } from "@/constants";
import { sectionSchema } from "@/helpers/schema";
import { useForm } from "@/hooks";
import Services from "@/services";
import { useDataStore } from "@/stores";
import { datesForDay } from "@/utils";
import { format } from "@formkit/tempo";
import { Button as ButtonUi, useDisclosure } from "@nextui-org/react";
import { useTheme } from "@nextui-org/use-theme";
import { AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DATA = {
  id: 1,
  title: "Venecia & Cracovia",
  image:
    "https://www.destinosbyviajesespacial.com/wp-content/uploads/2024/02/venecia-scaled.jpg",
  days: 5,
  startDate: "2024/12/04",
  endDate: "2024/12/11",
  items: [
    {
      type: "flight",
      startDate: "2024/12/04",
      endDate: null,
      departure: "Palma de Mallorca",
      destination: "Venecia",
      numberFlight: "FR6582",
      description: null,
    },
    {
      type: "transfer",
      startDate: "2024/12/04",
      endDate: null,
      departure: null,
      destination: null,
      stars: 4,
      placeUrl: null,
      numberFlight: null,
      description: [
        "Llegada al aeropuerto de Treviso, para ir al centro coger el bus línea 351 de ATVO que te deja en la Piazzale Roma (a media hora del hotel andando). Una vez en la Piazzale Roma hay que coger el Vaporetto hasta las cercanías del hotel. Por las calles de Venecia no circulan los coches.",
        "El transporte público es fluvial.",
      ],
      image_url: "/transfers.jpg",
      city_name: "Venecia",
      region: "Véneto",
      country: "Italia",
      name: "Transfer Aeropuerto de Treviso",
      collapse: true,
    },
    {
      type: "hotel",
      startDate: "2024/12/04",
      endDate: "2024/12/04",
      departure: null,
      destination: null,
      stars: 4,
      placeUrl: "https://maps.app.goo.gl/fWerGuUjndoxBjpP8",
      numberFlight: null,
      description: [
        "Este hotel esta en el centro y el hora de check-in es a las 12:00h",
      ],
      image_url:
        "https://cf.bstatic.com/xdata/images/hotel/150x150/463289409.jpg?k=1c54f091ee919a389424171fd85b4d71c4ad8c54a4a13f88928b824e4b581fb1&o=",
      city_name: "Venecia",
      region: "Véneto",
      country: "Italia",
      name: "Hotel Apostoli Garden",
    },
    {
      type: "trip",
      startDate: "2024/12/04",
      endDate: null,
      departure: null,
      destination: "Día por venecia",
      name: "Gran Canal en góndola con comentarios en directo",
      stars: null,
      placeUrl: "https://maps.app.goo.gl/fWerGuUjndoxBjpP8",
      numberFlight: null,
      description: [
        "Deslízate por los canales de Venecia en un paseo en góndola con un guía en directo. Escucha historias y secretos de los fascinantes palacios de los alrededores de la mano de tu guía.",
        "Cancela con hasta 24 horas de antelación y recibe un reembolso completo",
      ],
    },
    {
      type: "flight",
      startDate: "2024/12/04",
      endDate: null,
      departure: "Venecia",
      destination: "Kraków",
      numberFlight: "FR2028",
      description: null,
    },
    {
      type: "transfer",
      startDate: "2024/12/04",
      endDate: null,
      departure: null,
      destination: null,
      stars: 4,
      placeUrl: null,
      numberFlight: null,
      description: [
        "Para llegar del aeropuerto al centro coger un bus: La línea 208 tiene un frecuencia de salida de una hora y te deja en la Estación Central de trenes de Cracovia (Kraków Glówny)",
        "O coger tren que tarda 18 minutos y sale por unos 9 PLN (unos dos euros) o 16 PLN, si compras ida y vuelta.",
        "Este tren que sale cada 30 minutos del aeropuerto y opera de las 04h a las 23h, te dejará en la estación Kraków Glówny, situada cerca de la Barbacana.",
      ],
      image_url: "/transfers.jpg",
      city_name: "Venecia",
      region: "Véneto",
      country: "Italia",
      name: "Transfer Aeropuerto de Cracovia",
      collapse: true,
    },
    {
      type: "hotel",
      startDate: "2024/12/04",
      endDate: "2024/12/07",
      departure: null,
      destination: "Royal Apartments",
      stars: null,
      placeUrl: "https://maps.app.goo.gl/fWerGuUjndoxBjpP8",
      numberFlight: null,
      description: [
        "Este hotel esta en el centro y el hora de check-in es a las 12:00h",
      ],
      image_url:
        "https://cf.bstatic.com/xdata/images/hotel/150x150/357739635.jpg?k=f52fc47c7dbc4aa00754caea5f2187b5036fb8884d8ac3233e08bf3d53cbbcd8&o=",
      city_name: "Cracovia",
      region: "Pequeña Polonia",
      country: "Polonia",
      name: "ROYAL Apartments",
    },
    {
      type: "trip",
      startDate: "2024/12/05",
      endDate: null,
      departure: null,
      destination: "Día por venecia",
      name: "Auschwitz-Birkenau Tour guiado y transporte",
      stars: null,
      placeUrl: "https://maps.app.goo.gl/fWerGuUjndoxBjpP8",
      numberFlight: null,
      description: [
        "Visita los campos de concentración de Auschwitz-Birkenau con un educador profesional que te contará su historia. Pasa 3,5 horas aprendiendo sobre los millones de víctimas del Holocausto.",
        "Cancela con hasta 24 horas de antelación y recibe un reembolso completo",
      ],
    },
    {
      type: "flight",
      startDate: "2024/12/07",
      endDate: null,
      departure: "Kraków",
      destination: "Malaga",
      numberFlight: "W62073",
      description: null,
    },
    {
      type: "flight",
      startDate: "2024/12/07",
      endDate: null,
      departure: "Malaga",
      destination: "Palma de Mallorca",
      numberFlight: "FR2028",
      description: null,
    },
  ],
};

export default function Step2() {
  const { theme } = useTheme();

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { setter, itinerary } = useDataStore((state) => state);

  const navigate = useNavigate();
  // const { isLoading, startLoading, stopLoading } = useLoading();
  const [isLoading, setIsLoading] = useState(true);

  const { control, errors, handleSubmit, watch, reset } = useForm({
    values: undefined,
    schema: sectionSchema,
  });

  const TYPE = watch("type");
  const onSubmit = useCallback((value: any) => {
    console.log(errors);
    /*  Set Data Store */
    // setter({ details: value });

    startLoading();

    /* Call API */
    Services()
      .post(`${ENDPOINT.DETAILS}/${itinerary?.itemId}`, {
        type: value?.type.toUpperCase(),
        days: 1,
        startDate: value.startDate,
        endDate: null,
        departure: value.departure,
        destination: value.destination,
        stars: null,
        placeUrl: null,
        numberFlight: value.numberFlight,
        description: value.numberFlight,
        imageUrl: null,
        cityName: null,
        region: null,
        country: null,
        name: null,
        collapse: false,
      })
      .then((res: AxiosResponse) => {
        const { data } = res;

        /* Set */
        console.log(data);
      })
      .catch((error) => console.log("Error", error))
      .finally(() => {
        stopLoading();
        if (!isLoading) {
          onClose();
        }
      });

    /* Close Drawer*/
  }, []);

  const options = {
    method: "GET",
    url: `https://booking-com18.p.rapidapi.com/stays/auto-complete?query=${"grupotel+acapulco"}&languageCode=es-es
`,
    headers: {
      "x-rapidapi-key": "daa198d7efmsh649b50a2f52dc4ap18b7b4jsn74c93c732312",
      "x-rapidapi-host": "booking-com18.p.rapidapi.com",
    },
  };

  /*
      return await Services()
      .get(url, body)
      .then((res: AxiosResponse) => {
        const { status } = res;
      })
      .catch((error) => console.error(error));
  */

  useEffect(() => {
    /* Start Loading */
    // startLoading();

    /* Call API */
    setTimeout(
      () =>
        Services()
          .get(`${ENDPOINT.DETAILS}/${itinerary?.itemId}`)
          .then((res: AxiosResponse) => {
            const { status, data } = res;

            if (status !== 200) {
              return console.log("Error");
            }

            /* Set */
            setter({ itinerary: data });
            console.log(data);
          })
          .catch((error) => console.log("Error", error))
          .finally(() => setIsLoading(false)),
      1500
    );
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
  const handelGoBack = useCallback(() => {
    navigate(-1);
  }, []);
  /**
 * 
 *           <ArrowLeftIcon
            className="m-1 text-white size-8"
            onClick={handelGoBack}
          />
 */

  const switchCard = (data) => {
    const {
      startDate,
      endDate,
      name,
      city,
      country,
      departure,
      image_url,
      description,
      numberFlight,
    } = data;

    const CARDS = {
      TRIP: (
        <CardTrip
          name={name}
          startDate={startDate}
          endDate={endDate}
          image_url={image_url}
          descriptions={description}
        />
      ),
      TRANSFER: (
        <CardTransfer
          name={name}
          startDate={startDate}
          endDate={endDate}
          image_url={image_url}
          descriptions={description}
        />
      ),
      HOTEL: (
        <CardHotel
          startDate={startDate}
          endDate={endDate}
          name={name}
          city={city}
          country={country}
          descriptions={description}
        />
      ),
      FLIGHT: (
        <CardFlight
          startDate={startDate}
          departure={departure}
          destination={description}
          numberFlight={numberFlight}
          descriptions={description}
        />
      ),
    };

    return CARDS[data.type.toUpperCase() as keyof object];
  };

  return (
    <RootLayout>
      <Hero
        loading={isLoading}
        startDate={itinerary?.startDate}
        endDate={itinerary?.endDate}
        title={itinerary?.title}
        days={itinerary?.days}
        image={itinerary?.image}
      />
      <div
        className="h-2 z-[30] mb-2 flex"
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
      <section className="relative flex flex-col mx-4">
        {isLoading ? (
          <CardSkeleton count={5} />
        ) : (
          DATA.items.map((item) => (
            <div className="mb-4" key={item.name || item.departure}>
              <p
                className={`${subtitle({
                  weight: "bold",
                  size: "sm",
                })} flex items-center py-2`}
              >
                DÍA{" "}
                {datesForDay(
                  format(new Date(itinerary?.startDate), "YYYY/MM/DD"),
                  format(new Date(item?.startDate), "YYYY/MM/DD")
                )}
              </p>
              {switchCard(item)}
            </div>
          ))
        )}

        <ButtonUi
          radius="full"
          color="primary"
          className="bg-gradient-to-r shadow-medium z-50 text-md from-[#009688] to-[#009688] text-white h-14 min-h-[60px] fixed bottom-5 w-[calc(100%-33px)] hover:border-transparent"
          onPress={onOpen}
        >
          Añadir sección
        </ButtonUi>
        <DrawerFrom
          isOpen={isOpen}
          header="Configura tu viaje"
          onOpenChange={onOpenChange}
          body={<SectionForm control={control} type={TYPE} reset={reset} />}
          footer={
            <Button onPress={handleSubmit(onSubmit)}>Guardar Actividad</Button>
          }
        />
      </section>
    </RootLayout>
  );
}
