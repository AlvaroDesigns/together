import { useDisclosure } from "@nextui-org/react";

import {
  Cards,
  DrawerCreateItinerary,
  OnBoarding,
  RootLayout,
} from "@/components";
import { subtitle, title } from "@/components/primitives";
import { ENDPOINT, ON_BOARDNG } from "@/constants";
import { useLoading } from "@/hooks";
import Services from "@/services";
import { useDataStore, useUserStore } from "@/stores";
import { getAuth } from "@/utils";
import { Link } from "@nextui-org/react";
import { AxiosResponse } from "axios";
import { useEffect } from "react";

const DATA = [
  {
    id: 1,
    title: "Venecia & Cracovia",
    image:
      "https://www.destinosbyviajesespacial.com/wp-content/uploads/2024/02/venecia-scaled.jpg",
    days: 5,
  },
  {
    id: 2,
    title: "Bali",
    image:
      "https://media.iatiseguros.com/wp-content/uploads/2018/05/04005529/bali-que-hacer-Templo-Ulun-Danu.jpg",
    days: 15,
  },
  {
    id: 3,
    title: "Fuerteventura",
    image:
      "https://media.vogue.es/photos/642be0fe1519629e0b3b8f42/2:3/w_2560%2Cc_limit/GettyImages-1389010492.jpg",
    days: 5,
  },
];

export default function Step1() {
  const { setter, home } = useDataStore((state) => state);
  const { setter: setUser, user } = useUserStore((state) => state);

  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const { isLoading, startLoading, stopLoading } = useLoading();
  const onBoarding = getAuth(ON_BOARDNG);

  useEffect(() => {
    /* Start On Boarding */
    if (!onBoarding) {
      onOpen();
    }

    /* Start Loading */
    startLoading();

    /* Call API */
    Services()
      .get(`${ENDPOINT.USER}/${user.email}`)
      .then((res: AxiosResponse) => {
        const { status, data } = res;

        if (status !== 200) {
          return console.log("Error");
        }

        /* Set */
        setUser({ user: { ...user, name: data?.name, userId: data?.id } });
        setter({ home: { itinerary: data.itinerary } });
      })
      .catch((error) => console.log("Error", error))
      .finally(() => stopLoading());
  }, []);

  return (
    <RootLayout>
      <div className="text-foreground relative overflow-hidden text-left flex flex-col w-full px-4 pt-6 max-h-[100%] mb-10 h-[100%]">
        <h1 className={title({ weight: "light" })}>
          Explora el&nbsp; <span className={title()}>maravilloso&nbsp;</span>
          <span className={title({ color: "green" })}>mundo!</span>
        </h1>
        <div className="mt-6">
          <div className="flex flex-row whitespace-nowrap">
            <p className={subtitle()}>Ultimos destinos</p>
            {(home?.itinerary?.length ?? 0) > 0 && (
              <Link
                size="sm"
                underline="always"
                className="mr-2 text-gray-600"
                href="#"
              >
                View All
              </Link>
            )}
          </div>
          <div className="flex flex-row gap-4 mt-4 overflow-x-auto">
            <Cards
              itinerary={home.itinerary?.toReversed()}
              loading={isLoading}
            />
          </div>
        </div>
        <div className="mt-6">
          <div className="flex flex-row whitespace-nowrap">
            <p className={subtitle()}>Top destinations</p>
            <Link
              size="sm"
              underline="always"
              className="mr-2 text-gray-600"
              href="#"
            >
              View All
            </Link>
          </div>
          <div className="flex flex-row gap-4 mt-4 overflow-x-auto">
            <Cards itinerary={DATA} loading={isLoading} />
          </div>
        </div>
        <DrawerCreateItinerary />
        <OnBoarding
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          onClose={onClose}
        />
      </div>
    </RootLayout>
  );
}
