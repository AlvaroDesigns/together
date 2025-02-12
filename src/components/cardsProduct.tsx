import { CardHeader, Card as CardUI, Image } from "@heroui/react";

import { Card } from "@/components";
import { ROUTES } from "@/constants";
import { useDataStore, useUserStore } from "@/stores";
import { useRouter } from "@tanstack/react-router";

interface ItineraryItem {
  id: number | null | undefined;
  title: string | undefined;
  days: number | undefined;
  image: string | undefined;
}

interface CardsProps {
  itinerary: ItineraryItem[] | undefined;
  isDelete?: boolean;
}

export const Cards: React.FC<CardsProps> = ({ itinerary, isDelete }) => {
  const { resetItinerary } = useDataStore((state) => state);
  const { user } = useUserStore((state) => state);
  const router = useRouter();

  const handelCardOnPress = ({
    id,
    title,
    days,
  }: {
    id: number | null | undefined;
    title: string;
    days: number;
  }) => {
    /* Format */
    const formatUrl = title
      .toLowerCase()
      .replace(/ & /g, "_")
      .replace(/ /g, "_");

    /* Reset and clean  */
    resetItinerary({ itinerary: { title, id, load: true } });

    /* Navigate */
    router.navigate({
      to: `${ROUTES.ITINERARY}/$productId`,
      params: { productId: `${formatUrl}_${days}_dias` },
    });
  };

  if (itinerary?.length === 0) {
    return (
      <>
        <CardUI
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
        </CardUI>
      </>
    );
  }

  return itinerary?.map((item: ItineraryItem) => (
    <Card
      isDelete={isDelete}
      key={item?.id}
      title={item?.title}
      days={item.days}
      image={item.image}
      onClick={() => item?.title && handelCardOnPress(item)}
    />
  ));
};
