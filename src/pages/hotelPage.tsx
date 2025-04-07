import { Maps, RootLayout, Stars } from '@/components';

import { subtitle, title } from '@/components/primitives';
import { ROUTES } from '@/constants';
import { FACILITIES } from '@/data';
import { sendEventSuccess } from '@/utils/events';

import {
  CheckIcon,
  ChevronRightIcon,
  ClockIcon,
  MapPinIcon,
  ShareIcon,
  WifiIcon,
} from '@heroicons/react/24/outline';
import { Button, Card, CardBody, CardHeader, Divider, Image } from '@heroui/react';
import { useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';

export default function HotelPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      sendEventSuccess();
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
          <ShareIcon className="dark:text-gray-400 text-primary size-5" />
        </Button>
      </section>
      <section className="container grid grid-cols-1 px-4 my-2 md:mt-5 md:grid-cols-2 md:grid-rows-1 mt-[-35px] z-10 relative">
        <Card className="flex flex-row justify-between p-3 text-left md:mx-auto offset-1 offset-md-0 text-md-left d-flex flex-column align-items-start align-items-md-start md:m-2 border-b-1 dark:border-default-200/50">
          <div className="flex flex-col w-full gap-1">
            <h1
              className={`${title({
                color: 'base',
                size: 's',
                weight: 'bold',
              })} flex items-center gap-1 `}
            >
              Axor Feria
              <Stars size="Small" count={4} />
            </h1>
            <h3
              className={`${subtitle({
                weight: 'light',
                size: 'xs',
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
        </Card>
      </section>
      <section className="container grid px-4 my-3 text-left md:grid-cols-2 md:mt-5">
        <Card className="grid gap-4 p-3 border-b-1 dark:border-default-200/50 ">
          <h3
            className={`${subtitle({
              weight: 'bold',
              size: 'sm',
            })} `}
          >
            Servicios
          </h3>
          <ul className="flex flex-row gap-8 overflow-x-auto">
            {FACILITIES.map((f) => (
              <li key={f.label} className="flex flex-col items-center">
                <div className="p-2.5 mb-4 rounded-full bg-slate-100 dark:bg-default-200/50">
                  <WifiIcon className="text-primary size-5" />
                </div>
                <p className="text-xs text-gray-500 whitespace-nowrap">
                  {f.label.toUpperCase()}
                </p>
              </li>
            ))}
          </ul>
        </Card>
      </section>
      <section className="container grid px-4 my-3 text-left md:grid-cols-2 md:mt-5">
        <Card className="grid gap-4 p-3 border-b-1 dark:border-default-200/50">
          <h3
            className={`${subtitle({
              weight: 'bold',
              size: 'sm',
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
        </Card>
      </section>
      <section className="container grid gap-4 px-4 my-3 text-left">
        <Card className="grid gap-4 p-3 border-b-1 dark:border-default-200/50">
          <h3
            className={`${subtitle({
              weight: 'bold',
              size: 'sm',
            })}`}
          >
            Ubicación
          </h3>
          <Maps />
        </Card>
      </section>
      <section className="container grid px-4 my-3 text-left md:grid-cols-2 md:mt-5">
        <Card className="flex gap-4 p-3 border-b-1 dark:border-default-200/50">
          <h3
            className={`${subtitle({
              weight: 'bold',
              size: 'sm',
            })}`}
          >
            Hora de entrada y de salida
          </h3>
          <div className="flex flex-row">
            <div className="relative flex flex-row gap-2">
              <ClockIcon className="dark:text-gray-400 text-primary size-11" />
              <div className="flex flex-col">
                <p className="text-base font-semibold text-primary">Check in</p>
                <p className="text-sm text-gray-500">A partir de las 12:00 horas</p>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <ClockIcon className="dark:text-gray-400 text-primary size-11" />
              <div className="flex flex-col mr-1">
                <p className="text-base font-semibold text-primary">Check out</p>
                <p className="text-sm text-gray-500">Antes de las 12:00 horas</p>
              </div>
            </div>
          </div>
        </Card>
      </section>
      <section className="container grid px-4 text-left md:grid-cols-2 md:mt-5 pb-7">
        <div className="grid gap-4">
          <h3
            className={`${subtitle({
              weight: 'bold',
              size: 'sm',
            })} ml-2`}
          >
            Elige tu Habitación
          </h3>
          <div className="flex flex-col gap-3">
            <Card className="w-full col-span-12 sm:col-span-7">
              <CardHeader className="flex flex-col items-start gap-3">
                <div className="relative">
                  <div className="absolute z-20 top-2 left-2 px-2 py-1 text-xs rounded-lg bg-[#e1f6e4]">
                    15 reservas esta semana
                  </div>
                  <Image
                    radius="lg"
                    alt="Hotel"
                    height={200}
                    src="https://res.cloudinary.com/lastminute/image/upload/v1585217488/22_Superior_Room_s2wzqa.jpg"
                    width="100%"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold">Habitación Doble</h3>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <div className="flex flex-col justify-between min-h-28 h-28">
                  <div>
                    <p className="text-lg">Solo Alojamiento</p>
                    <div className="flex items-center gap-1 text-[#14884c]">
                      <CheckIcon className="size-5 text-[#14884c]" />
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
                      onPress={() => navigate({ to: ROUTES.CHECK_OUT })}
                      endContent={<ChevronRightIcon className="size-5" />}
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
                        endContent={<ChevronRightIcon className="size-5" />}
                        onPress={() => navigate({ to: ROUTES.CHECK_OUT })}
                      >
                        Reservar
                      </Button>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card className="w-full col-span-12 sm:col-span-7">
              <CardHeader className="flex flex-col items-start gap-3">
                <div className="relative">
                  <div className="absolute z-20 top-2 left-2 px-2 py-1 text-xs  rounded-lg bg-[#e1f6e4]">
                    10 reservas esta semana
                  </div>
                  <Image
                    radius="lg"
                    alt="Hotel"
                    height={200}
                    src="https://res.cloudinary.com/lastminute/image/upload/v1591806651/triple_itfhop.jpg"
                    width="100%"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold">Habitación Superior Twin</h3>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <div className="flex flex-col justify-between min-h-28 h-28">
                  <div>
                    <p className="text-lg">Solo Alojamiento</p>
                    <div className="flex items-center gap-1 text-[#14884c]">
                      <CheckIcon className="size-5" />
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
                      onPress={() => navigate({ to: ROUTES.CHECK_OUT })}
                      endContent={<ChevronRightIcon className="size-5" />}
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
                        endContent={<ChevronRightIcon className="size-5" />}
                        onPress={() => navigate({ to: ROUTES.CHECK_OUT })}
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
    </RootLayout>
  );
}
