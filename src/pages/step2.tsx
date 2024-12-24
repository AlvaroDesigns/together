import { subtitle, title } from "@/components/primitives";
import { capitalCase, resolverAirFly } from "@/utils";
import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

import { Header } from "@/components";
import { ENDPOINT } from "@/constants";
import { useLoading } from "@/hooks";
import Services from "@/services";
import { useDataStore } from "@/stores";
import { format } from "@formkit/tempo";
import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  Divider,
  Image,
  Link,
} from "@nextui-org/react";
import { useTheme } from "@nextui-org/use-theme";
import { AxiosResponse } from "axios";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DATA = {
  id: 1,
  title: "Venecia & Cracovia",
  image:
    "https://www.destinosbyviajesespacial.com/wp-content/uploads/2024/02/venecia-scaled.jpg",
  days: 5,
  startDate: "2025/12/02",
  endDate: "2025/12/07",
  items: [
    {
      type: "flight",
      startDate: "2025/12/02",
      endDate: null,
      departure: "Palma de Mallorca",
      destination: "Venecia",
      numberFlight: "FR6582",
      description: null,
    },
    {
      type: "transfer",
      startDate: "2025/12/02",
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
      startDate: "2025/12/02",
      endDate: "2025/12/04",
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
      startDate: "2025/12/02",
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
      startDate: "2025/12/04",
      endDate: null,
      departure: "Venecia",
      destination: "Kraków",
      numberFlight: "FR2028",
      description: null,
    },
    {
      type: "transfer",
      startDate: "2025/12/02",
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
      startDate: "2025/12/04",
      endDate: "2025/12/07",
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
      startDate: "2025/12/05",
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
      startDate: "2025/12/07",
      endDate: null,
      departure: "Kraków",
      destination: "Malaga",
      numberFlight: "W62073",
      description: null,
    },
    {
      type: "flight",
      startDate: "2025/12/07",
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

  const { setter, itinerary } = useDataStore((state) => state);
  const navigate = useNavigate();

  const { isLoading, startLoading, stopLoading } = useLoading();
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
    startLoading();

    /* Call API */
    Services()
      .get(`${ENDPOINT.ITINERARY}/3`)
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
      .finally(() => stopLoading());
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

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <section className="relative overflow-hidden flex flex-col justify-start w-full min-h-[250px] max-h-[250px]">
        <div className="absolute inset-0 z-20 opacity-50 bg-gradient-to-b from-black to-transparent" />
        <Card
          isFooterBlurred
          radius="none"
          className="w-full h-[300px] col-span-12 sm:col-span-7"
        >
          <CardBody className="absolute z-30 flex flex-col items-center w-full mt-8 top-1">
            <p className="mt-1 text-white">
              {itinerary?.startDate &&
                format(new Date(itinerary.startDate), "DD-MM-YYYY")}{" "}
              {itinerary?.endDate &&
                `a ${format(new Date(itinerary.endDate), "DD-MM-YYYY")}`}
            </p>
            <h1 className="font-sans text-4xl font-bold text-white">
              {itinerary?.title}
            </h1>
            <p className="mt-1 text-white">
              {itinerary?.days} Días · A tu aire flexible
            </p>
          </CardBody>
          <Image
            removeWrapper
            radius="none"
            alt="Relaxing app background"
            className="z-0 object-cover w-full h-full"
            src={itinerary?.image}
          />
        </Card>
      </section>
      <div
        className="h-[270px] z-[30] mb-2 flex"
        data-height="250"
        data-style="curve"
        data-position="bottom"
      >
        <svg
          className="absolute w-full left-0 top-[280px] h-[5%] transform rotate-180 scale-y-[-1]"
          aria-hidden="true"
          fill={`${theme === "dark" ? "#000" : "#fff"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path d="M 0 0 c 0 0 200 50 500 50 s 500 -50 500 -50 v 101 h -1000 v -100 z" />
        </svg>
      </div>
      <section className="relative mx-4">
        {DATA.items.map((item, index) => (
          <div className="mb-4" key={index}>
            <p
              className={`${subtitle({
                weight: "bold",
                size: "sm",
              })} flex items-center py-2`}
            >
              DÍA 1
            </p>
            <Card>
              <CardBody>
                <div className="flex flex-col">
                  <div>
                    <div
                      className={`${subtitle({
                        size: "sm",
                      })} flex items-center justify-between mb-3`}
                    >
                      {capitalCase(
                        format(new Date(item.startDate), "ddd, D MMM")
                      )}
                      {item.endDate &&
                        ` to ${capitalCase(
                          format(new Date(item.endDate), "ddd, D MMM")
                        )}`}
                    </div>
                    <Divider />
                    <div className="mt-3 mb-1">
                      {item.type === "flight" && (
                        <article
                          className={`${title({
                            size: "xs",
                          })} flex flex-col items-start `}
                        >
                          <div className="flex flex-row items-center">
                            <Image
                              width={45}
                              height={45}
                              alt="AIR company"
                              src={resolverAirFly(
                                item.numberFlight?.substring(0, 2)
                              )}
                            />
                            <div className="flex flex-col ml-unit-3">
                              <Link
                                isBlock
                                showAnchorIcon
                                className="p-0"
                                target="_blank"
                                href={`https://www.google.com/search?q=${item.numberFlight?.substring(
                                  0,
                                  2
                                )}+flight+${item.numberFlight?.substring(2)}`}
                                color="foreground"
                              >
                                {item.numberFlight}
                              </Link>
                              <p>
                                {item.departure && `${item.departure} to `}
                                {item.destination}
                              </p>
                              <p
                                className={`${subtitle({
                                  weight: "light",
                                  size: "sm",
                                })} flex`}
                              >
                                <div className="flex">
                                  <span className="flex items-center mr-2">
                                    <ArrowUpRightIcon className="mr-1 dark:text-gray-600 size-5" />
                                    PMI 15:20
                                  </span>
                                  -
                                  <span className="flex items-center ml-2">
                                    <ArrowDownRightIcon className="mr-1 dark:text-gray-600 size-5" />
                                    TFS 19.20
                                  </span>
                                </div>
                              </p>
                            </div>
                          </div>
                        </article>
                      )}
                      {item.type === "hotel" && (
                        <article
                          className={`${title({
                            size: "xs",
                          })} flex items-start `}
                        >
                          <div className="flex items-center mb-1">
                            <Image
                              width={100}
                              height={100}
                              className="min-w-[100px]"
                              alt="AIR company"
                              src={item.image_url || "dummy.jpg"}
                            />

                            <div className="ml-4">
                              {item.name}
                              <p
                                className={`${subtitle({
                                  weight: "light",
                                  size: "sm",
                                })} flex items-start`}
                              >
                                <MapPinIcon className="mt-1 mr-1 dark:text-gray-600 size-5" />
                                {item.city_name}, {item.region},{" "}
                                {item.country?.substring(0, 2).toUpperCase()}
                              </p>
                              {item.placeUrl && (
                                <Link
                                  isBlock
                                  showAnchorIcon
                                  className="p-0"
                                  target="_blank"
                                  href={`https://www.google.com/maps/search/?api=1&query=${item.name}`}
                                  color="foreground"
                                >
                                  Enlace a Google Maps
                                </Link>
                              )}
                            </div>
                          </div>
                        </article>
                      )}
                      {item.type === "transfer" && (
                        <article
                          className={`${title({
                            size: "xs",
                          })} flex items-start `}
                        >
                          <div className="flex items-center mb-1">
                            <Image
                              width={100}
                              height={100}
                              className="min-w-[100px]"
                              alt="AIR company"
                              src={item.image_url || "dummy.jpg"}
                            />

                            <div className="ml-4">
                              {item.name}

                              {item.placeUrl && (
                                <Link
                                  isBlock
                                  showAnchorIcon
                                  className="p-0"
                                  target="_blank"
                                  href={`https://www.google.com/maps/search/?api=1&query=${item.name}`}
                                  color="foreground"
                                >
                                  Enlace a Google Maps
                                </Link>
                              )}
                            </div>
                          </div>
                        </article>
                      )}
                      {item.type === "trip" && (
                        <article
                          className={`${title({
                            size: "xs",
                          })} flex items-start `}
                        >
                          <div className="flex items-center mb-1">
                            <Image
                              width={100}
                              height={100}
                              className="min-w-[100px]"
                              alt="AIR company"
                              src={item.image_url || "dummy.jpg"}
                            />

                            <div className="ml-4">
                              {item.name}
                              <p
                                className={`${subtitle({
                                  weight: "light",
                                  size: "sm",
                                })} flex items-start`}
                              >
                                <ClockIcon className="mt-1 mr-1 dark:text-gray-600 size-5" />
                                Duración 45 minutos - 3 horas
                                {item.country?.substring(0, 2).toUpperCase()}
                              </p>
                              {item.placeUrl && (
                                <Link
                                  isBlock
                                  showAnchorIcon
                                  className="p-0"
                                  target="_blank"
                                  href={`https://www.google.com/maps/search/?api=1&query=${item.name}`}
                                  color="foreground"
                                >
                                  Enlace a Google Maps
                                </Link>
                              )}
                            </div>
                          </div>
                        </article>
                      )}
                    </div>

                    {item.description && (
                      <div className="mt-2">
                        <Divider />
                        <Accordion
                          showDivider={false}
                          isCompact={true}
                          defaultExpandedKeys={[item?.collapse ? "1" : "null"]}
                          className="p-0 m-0"
                        >
                          <AccordionItem
                            key="1"
                            aria-label="Ver más información"
                            classNames={{
                              trigger:
                                "bg-transparent px-0 hover:border-transparent focus:outline-0 focus-visible:outline-0 pb-0",
                              content: "flex flex-col gap-4 mt-2",
                            }}
                            title="Ver más información"
                          >
                            {item.description.map((item) => (
                              <p>{item}</p>
                            ))}
                          </AccordionItem>
                        </Accordion>
                      </div>
                    )}
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </section>
    </div>
  );
}
