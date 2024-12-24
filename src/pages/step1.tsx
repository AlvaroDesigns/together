import { Card, Header } from "@/components";
import {
  CardHeader,
  Image,
  Card as NextCard,
  Skeleton,
  useDisclosure,
} from "@nextui-org/react";

import DrawerItinerary from "@/components/drawerItinerary";
import OnBoarding from "@/components/onBoarding";
import { subtitle, title } from "@/components/primitives";
import { ENDPOINT, ON_BOARDNG } from "@/constants";
import { useLoading } from "@/hooks";
import Services from "@/services";
import { useDataStore, useUserStore } from "@/stores";
import { getAuth } from "@/utils";
import { Link } from "@nextui-org/react";
import { AxiosResponse } from "axios";
import { Key, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DATA = [
  {
    id: 1,
    title: "Vencia & Cracovia",
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
        setUser({ user: { ...user, name: data.name } });
        setter({ home: { itinerary: data.itinerary } });
      })
      .catch((error) => console.log("Error", error))
      .finally(() => stopLoading());
  }, []);

  return (
    <div className="h-[100%] flex flex-col ">
      <Header />
      <div className="text-foreground relative overflow-hidden text-left flex flex-col w-full px-4 pt-6 max-h-[100%] mb-28 h-[100%]">
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
        <DrawerItinerary />
        <OnBoarding
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          onClose={onClose}
        />
      </div>
    </div>
  );
}

interface ItineraryItem {
  title: string | undefined;
  days: number | undefined;
  image: string | undefined;
}

interface CardsProps {
  itinerary: ItineraryItem[] | undefined;
  loading: boolean;
}

const Cards: React.FC<CardsProps> = ({ itinerary, loading = true }) => {
  const navigate = useNavigate();

  const handelCardOnPress = ({
    title,
    days,
  }: {
    title: string;
    days: number;
  }) => {
    const formatUrl = title
      .toLowerCase()
      .replace(/ & /g, "_")
      .replace(/ /g, "_");

    navigate(`/${formatUrl}_${days}_dias`);
  };

  if (loading || itinerary?.length === undefined) {
    return Array(3)
      .fill(0)
      .map((_, index) => (
        <div
          className="w-[200px] min-w-[200px] space-y-5 relative"
          key={`skeleton-${index}`}
        >
          <NextCard
            className="w-[200px] min-w-[200px] space-y-5 p-4 relative bg-neutral-500"
            radius="lg"
          >
            <Skeleton className="rounded-lg" isLoaded={false}>
              <div className="h-24 rounded-lg bg-default-300" />
            </Skeleton>
            <div className="space-y-3">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="w-3/5 h-3 rounded-lg bg-default-200" />
              </Skeleton>
              <Skeleton className="w-4/5 rounded-lg">
                <div className="w-4/5 h-3 rounded-lg bg-default-200" />
              </Skeleton>
              <Skeleton className="w-2/5 rounded-lg">
                <div className="w-2/5 h-3 rounded-lg bg-default-300" />
              </Skeleton>
            </div>
          </NextCard>
        </div>
      ));
  }

  if (itinerary === undefined) {
    return (
      <>
        <NextCard
          isFooterBlurred
          className="w-full h-[200px] col-span-12 sm:col-span-7 relative"
        >
          <div className="absolute inset-0 z-0 bg-black/50"></div>

          <CardHeader className="absolute z-10 flex-col items-start top-1">
            <p className="font-bold uppercase text-tiny text-white/60">
              Todavia no tienes tu plan de viaje
            </p>
            <h4 className="text-xl font-medium text-white/90">
              A que esperas para crearlo
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 object-cover w-full h-full opacity-70"
            src="/female-travelers-waving-cars-road-small.jpg"
          />
        </NextCard>
      </>
    );
  }

  return (
    <>
      {itinerary?.map((item: ItineraryItem, index: Key | null | undefined) => (
        <Card
          key={index}
          title={item?.title}
          days={item.days}
          image={item.image}
          onClick={() =>
            item?.title &&
            handelCardOnPress({ title: item.title, days: item.days ?? 0 })
          }
        />
      ))}
    </>
  );
};
