import { RootLayout, Stars } from "@/components";
import { subtitle, title } from "@/components/primitives";
import { FACILITIES } from "@/data";
import {
  CheckIcon,
  ClockIcon,
  HeartIcon,
  MapPinIcon,
  WifiIcon,
} from "@heroicons/react/24/outline";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
} from "@heroui/react";
import { useEffect } from "react";
import { Toaster, toast } from "sonner";
export default function HotelPage() {
  useEffect(() => {
    setTimeout(() => {
      toast.info("¡Solo quedan 5 habitaciones!", {
        duration: 5000,
      });
    });
  }, []);

  return (
    <RootLayout>
      <section className="relative">
        <Image
          radius="none"
          alt="Hotel"
          height={200}
          src="https://www.kayak.es/rimg/himg/bc/6b/c3/leonardo-115223090-31_IMG_4717_O-777841.jpg?width=836&height=607&crop=true"
          width="100%"
        />
        <Button
          className="absolute z-20 rounded-full top-4 right-4 focus:outline-none hover:outline-none"
          isIconOnly
          aria-label="Like"
        >
          <HeartIcon className="dark:text-gray-400 text-primary size-5" />
        </Button>
      </section>
      <section className="container grid grid-cols-1 md:mt-5 md:grid-cols-2 md:grid-rows-1">
        <div className="flex flex-row justify-between pb-5 m-6 mb-2 text-left md:mx-auto offset-1 offset-md-0 text-md-left d-flex flex-column align-items-start align-items-md-start md:m-2 border-b-1 dark:border-default-200/50">
          <div className="flex flex-col w-full gap-1">
            <h1
              className={`${title({
                color: "base",
                size: "s",
                weight: "bold",
              })} flex items-center gap-1 `}
            >
              Axor Feria
              <Stars count={4} />
            </h1>
            <h3
              className={`${subtitle({
                weight: "light",
                size: "xs",
              })} flex items-center gap-1`}
            >
              <MapPinIcon className="dark:text-gray-400 text-primary size-4" />
              CALLE CAMPEZO, 4 MADRID
            </h3>
            <div className="flex flex-row justify-between mt-2">
              <Image
                radius="none"
                alt="Hotel"
                height={20}
                src=" http://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-59897-5.svg"
                width="100%"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container grid px-4 py-1 mx-2 text-left md:grid-cols-2 md:mt-5">
        <div className="grid gap-4 pb-5 mb-2 border-b-1 dark:border-default-200/50 ">
          <h3
            className={`${subtitle({
              weight: "bold",
              size: "sm",
            })} `}
          >
            Servicios
          </h3>
          <ul className="flex flex-row gap-8 overflow-x-auto">
            {FACILITIES.map((f) => (
              <li key={f.label} className="flex flex-col items-center">
                <div className="p-2.5 mb-4 rounded-full bg-slate-100">
                  <WifiIcon className="dark:text-gray-400 text-primary size-5" />
                </div>
                <p className="text-xs text-gray-500 whitespace-nowrap">
                  {f.label.toUpperCase()}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="container grid px-4 mx-2 text-left md:grid-cols-2 md:mt-5">
        <div className="grid gap-4 pb-5 mb-2 border-b-1 dark:border-default-200/50 ">
          <h3
            className={`${subtitle({
              weight: "bold",
              size: "sm",
            })} `}
          >
            Destacados
          </h3>
          <ul className="flex flex-col gap-1 overflow-x-auto">
            <li>Cancelación gratuita</li>
            <li>Buena ubicación</li>
            <li>Recepción 24h</li>
            <li>Ideal para relajarse</li>
          </ul>
        </div>
      </section>
      <section className="container grid px-4 mx-2 mt-2 text-left md:grid-cols-2 md:mt-5">
        <div className="flex gap-4 pb-4 mb-4 border-b-1 dark:border-default-200/50 ">
          <div className="relative flex flex-row gap-2">
            <ClockIcon className="dark:text-gray-400 text-primary size-11" />
            <div className="flex flex-col">
              <p className="text-base font-semibold text-primary">Check in</p>
              <p className="text-sm text-gray-500">
                A partir de las 12:00 horas
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <ClockIcon className="dark:text-gray-400 text-primary size-11" />
            <div className="flex flex-col">
              <p className="text-base font-semibold text-primary">Check out</p>
              <p className="text-sm text-gray-500">Antes de las 12:00 horas</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container grid px-4 text-left md:grid-cols-2 md:mt-5 pb-7">
        <div className="grid gap-4">
          <h3
            className={`${subtitle({
              weight: "bold",
              size: "sm",
            })} ml-2`}
          >
            Elige tu Habitación
          </h3>
          <div className="flex flex-col gap-3">
            <Card className="w-full col-span-12 sm:col-span-7">
              <CardHeader className="flex gap-3">
                <div className="flex flex-col items-start">
                  <p className="text-lg">Habitación Doble</p>
                  <div className="px-2 py-1 text-xs text-white rounded-md bg-primary">
                    15 reservas esta semana
                  </div>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <div className="flex flex-col justify-between min-h-28 h-28">
                  <div>
                    <p className="text-lg">Solo Alojamiento</p>
                    <div className="flex items-center gap-1 text-primary">
                      <CheckIcon className="dark:text-gray-400 text-primary size-5" />
                      Cancelación gratuita
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-between w-full gap-2">
                    <div className="flex flex-col items-start">
                      <div className="priceBox">
                        <div className="text-2xl font-semibold text-primary">
                          <span>73</span>
                          <span className="currencySymbol">€</span>
                        </div>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-500">
                        por noche
                      </span>
                    </div>
                    <Button
                      size="md"
                      className="text-white bg-primary focus:outline-none"
                    >
                      Reservar
                    </Button>
                  </div>
                </div>
                <Divider className="my-4" />
                <div className="flex flex-col justify-between min-h-28 h-28">
                  <div>
                    <p className="text-lg">Desayuno</p>
                  </div>
                  <div className="flex flex-row items-end justify-between w-full gap-2">
                    <div className="flex flex-col items-start">
                      <div className="priceBox">
                        <div className="text-2xl font-semibold text-primary">
                          <span>112</span>
                          <span className="currencySymbol">€</span>
                        </div>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-500">
                        por noche
                      </span>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-2 mb-2 text-red-600">
                        ¡Solo quedan 5!
                      </div>
                      <Button
                        size="md"
                        className="text-white bg-primary focus:outline-none"
                      >
                        Reservar
                      </Button>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card className="w-full col-span-12 sm:col-span-7">
              <CardHeader className="flex gap-3">
                <div className="flex flex-col items-start ">
                  <p className="text-lg">Habitación Doble Superior</p>
                  <div className="px-2 py-1 text-xs text-white rounded-md bg-primary">
                    15 reservas esta semana
                  </div>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <div className="flex flex-col justify-between min-h-28 h-28">
                  <div>
                    <p className="text-lg">Solo Alojamiento</p>
                    <div className="flex items-center gap-1 text-primary">
                      <CheckIcon className="dark:text-gray-400 text-primary size-5" />
                      Cancelación gratuita
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-between w-full gap-2">
                    <div className="flex flex-col items-start">
                      <div className="priceBox">
                        <div className="text-2xl font-semibold text-primary">
                          <span>100</span>
                          <span className="currencySymbol">€</span>
                        </div>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-500">
                        por noche
                      </span>
                    </div>
                    <Button
                      size="md"
                      className="text-white bg-primary focus:outline-none"
                    >
                      Reservar
                    </Button>
                  </div>
                </div>
                <Divider className="my-4" />
                <div className="flex flex-col justify-between min-h-28 h-28">
                  <div>
                    <p className="text-lg">Desayuno</p>
                  </div>
                  <div className="flex flex-row items-end justify-between w-full gap-2">
                    <div className="flex flex-col items-start">
                      <div className="priceBox">
                        <div className="text-2xl font-semibold text-primary">
                          <span>120</span>
                          <span className="currencySymbol">€</span>
                        </div>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-500">
                        por noche
                      </span>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-2 mb-2 text-red-600">
                        ¡Solo quedan 2!
                      </div>
                      <Button
                        size="md"
                        className="text-white bg-primary focus:outline-none"
                      >
                        Reservar
                      </Button>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
      <Toaster
        richColors
        toastOptions={{
          className: "my-toast",
        }}
        mobileOffset={{ bottom: "16px" }}
        position="bottom-center"
      />
    </RootLayout>
  );
}
