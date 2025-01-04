import {
  CardHeader,
  Image,
  Card as NextCard,
  Skeleton,
} from "@nextui-org/react";

import { Card } from "@/components";
import { useDataStore, useUserStore } from "@/stores";
import { useNavigate } from "react-router-dom";

interface ItineraryItem {
  id: number | null | undefined;
  title: string | undefined;
  days: number | undefined;
  image: string | undefined;
}

interface CardsProps {
  itinerary: ItineraryItem[] | undefined;
  loading: boolean;
}

export const Cards: React.FC<CardsProps> = ({ itinerary, loading = true }) => {
  const { setter } = useDataStore((state) => state);
  const { user } = useUserStore((state) => state);
  const navigate = useNavigate();

  const handelCardOnPress = ({
    id,
    title,
    days,
  }: {
    id: number | null | undefined;
    title: string;
    days: number;
  }) => {
    const formatUrl = title
      .toLowerCase()
      .replace(/ & /g, "_")
      .replace(/ /g, "_");

    /* Set */
    setter({ itinerary: { itemId: id } });

    /* Navigate */
    navigate(`/${formatUrl}_${days}_dias`);
  };

  if (loading || itinerary?.length === undefined) {
    return Array(3)
      .fill(0)
      .map((_, index) => (
        <div
          className="p-3 mb-5 bg-conten1 border dark:border-gray-700 min-h-56 rounded-xl w-[200px] min-w-[200px] "
          key={`skeleton-${index}`}
        >
          <div className="flex flex-col justify-center min-h-10">
            <Skeleton className="rounded-lg" isLoaded={false}>
              <div className="rounded-lg h-28 bg-default-300" />
            </Skeleton>
          </div>
          <div className="my-3 space-y-3">
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
        </div>
      ));
  }

  if (itinerary.length === 0) {
    return (
      <>
        <NextCard
          isFooterBlurred
          className="w-full h-[200px] col-span-12 sm:col-span-7 relative"
        >
          <div className="absolute inset-0 z-10 opacity-40 bg-gradient-to-b from-black to-transparent" />
          <CardHeader className="absolute z-20 flex-col items-start top-1">
            <p className="font-bold uppercase text-tiny text-white/60">
              {user?.name}, Todavia no tienes tu plan de viaje
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
      {itinerary?.map((item: ItineraryItem) => (
        <Card
          key={item?.id}
          title={item?.title}
          days={item.days}
          image={item.image}
          onClick={() => item?.title && handelCardOnPress(item)}
        />
      ))}
    </>
  );
};
