import {
  CardHeader,
  Image,
  Card as NextCard,
  Skeleton,
} from "@nextui-org/react";

import { Card } from "@/components";
import { useDataStore } from "@/stores";
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
