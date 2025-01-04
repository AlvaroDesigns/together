import { useDisclosure } from "@nextui-org/react";

import {
  Cards,
  DrawerCreateItinerary,
  OnBoarding,
  RootLayout,
} from "@/components";
import { subtitle, title } from "@/components/primitives";
import { ENDPOINT, ON_BOARDNG } from "@/constants";
import Services from "@/services";
import { useDataStore, useUserStore } from "@/stores";
import { getAuth } from "@/utils";
import { Link } from "@nextui-org/react";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

const DATA = [
  {
    id: 1,
    title: "Venecia & Cracovia",
    image:
      "https://www.destinosbyviajesespacial.com/wp-content/uploads/2024/02/venecia-scaled.jpg",
    days: 5,
    working: true,
  },
  {
    id: 2,
    title: "Bali",
    image:
      "https://media.iatiseguros.com/wp-content/uploads/2018/05/04005529/bali-que-hacer-Templo-Ulun-Danu.jpg",
    days: 15,
    working: true,
  },
  {
    id: 3,
    title: "Fuerteventura",
    image:
      "https://media.vogue.es/photos/642be0fe1519629e0b3b8f42/2:3/w_2560%2Cc_limit/GettyImages-1389010492.jpg",
    days: 5,
    working: true,
  },
];

export default function Step1() {
  const {
    setter,
    home: { items },
  } = useDataStore((state) => state);
  const { setter: setUser, user } = useUserStore((state) => state);

  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onBoarding = getAuth(ON_BOARDNG);

  useEffect(() => {
    /* Start On Boarding */
    if (!onBoarding) {
      onOpen();
    }

    /* Start Loading */
    setIsLoading(true);

    /* Call API */
    Services()
      .get(`${ENDPOINT.USER}/${user.email}`)
      .then((res: AxiosResponse) => {
        const { data } = res;

        /* Set */
        setUser({
          user: {
            ...user,
            name: data?.name,
            userId: data?.id,
            avatar: data?.avatar,
          },
        });
        setter({ home: { items: data.itinerary } });
      })
      .finally(() => setTimeout(() => setIsLoading(false), 1000));
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
            {(items?.length ?? 0) > 0 && (
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
              itinerary={items
                ?.map((item, index) => ({
                  ...item,
                  id: item.id ?? index,
                }))
                .toReversed()}
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
