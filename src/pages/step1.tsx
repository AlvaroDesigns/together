import { useDisclosure } from "@heroui/react";

import {
  Button,
  Cards,
  DrawerCreateItinerary,
  DrawerCustom,
  OnBoarding,
  RootLayout,
  Searcher,
} from "@/components";
import { CardHotelPromo } from "@/components/Cards";
import { subtitle, title } from "@/components/primitives";
import { ENDPOINT, ON_BOARDNG, ROUTES } from "@/constants";
import { useDataStore, useUserStore } from "@/stores";
import { getAuth } from "@/utils";

import SkeletonHome from "@/components/Skeletons/skeletonHome";
import { useFetch } from "@/hooks";
import { ROLES } from "@/types";
import { useRouter } from "@tanstack/react-router";
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

  const STATUS_ROLE = user?.role === ROLES.ADMIN;

  const [isSearcherClose, setSearcherClose] = useState<boolean>(STATUS_ROLE);
  const [isSearcherHotel, setSearcherHotel] = useState<boolean>(false);

  const onBoarding = getAuth(ON_BOARDNG);
  const router = useRouter();

  const { data, isLoading } = useFetch("get", `${ENDPOINT.USER}/${user.email}`);

  useEffect(() => {
    /* Start On Boarding */
    if (!onBoarding) {
      onOpen();
    }

    if (data) {
      setUser({
        user: {
          ...user,
          name: data?.name,
          userId: data?.id,
          avatar: data?.avatar,
          phone: data?.phone,
        },
      });
      setter({ home: { items: data?.itinerary } });
    }
  }, []);

  return (
    <RootLayout>
      <div className="text-foreground relative overflow-hidden text-left flex flex-col w-full px-4 pt-6 max-h-[100%] mb-10 h-[100%]">
        <h1 className={title({ weight: "light" })}>
          Explora el&nbsp; <span className={title()}>maravilloso&nbsp;</span>
          <span className={title({ color: "green" })}>mundo!</span>
        </h1>
        {isLoading && <SkeletonHome />}
        {!isLoading && (
          <>
            <div className="mt-6">
              <div className="flex flex-row whitespace-nowrap">
                <p className={subtitle()}>Ultimos destinos</p>
              </div>
              <div className="flex flex-row gap-4 mt-4 overflow-x-auto">
                <Cards
                  isDelete
                  itinerary={items
                    ?.map((item, index) => ({
                      ...item,
                      id: item.id ?? index,
                    }))
                    .toReversed()}
                />
              </div>
            </div>
            <div className="mt-6">
              <CardHotelPromo
                isClose={isSearcherClose}
                onPressClose={() => setSearcherClose(!isSearcherHotel)}
                onPressSubmit={() => setSearcherHotel(!isSearcherHotel)}
              />
              <DrawerCustom
                backdrop="blur"
                placement="bottom"
                radius="lg"
                size="lg"
                isOpen={isSearcherHotel}
                header="Reservar hoteles"
                onOpenChange={() => setSearcherHotel(false)}
                body={<Searcher />}
                footer={
                  <Button
                    onPress={() => router.navigate({ to: ROUTES.AVAILABILITY })}
                  >
                    Buscar
                  </Button>
                }
              />
            </div>
            <div className="mt-6">
              <div className="flex flex-row whitespace-nowrap">
                <p className={subtitle()}>Top destinos</p>
              </div>
              <div className="flex flex-row gap-4 mt-4 overflow-x-auto">
                <Cards itinerary={DATA} />
              </div>
            </div>
          </>
        )}
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
