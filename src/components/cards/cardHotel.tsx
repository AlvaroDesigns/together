import { subtitle, title } from "@/components/primitives";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { Image, Link } from "@nextui-org/react";
import CardBase from "./cardBase";

export default function CardHotel({
  startDate = "2025/12/02",
  name = "Hotel Apostoli Garden",
  image_url,
  city = "Venecia",
  country = "Italia",
  placeUrl = "url",
  descriptions,
}: {
  startDate: string | Date;
  endDate: string | Date;
  name: string | undefined;
  image_url?: string | undefined;
  city: string | undefined;
  country: string | undefined;
  placeUrl?: string | undefined;
  descriptions?: string[] | null;
}) {
  return (
    <CardBase
      header={startDate}
      body={
        <>
          <div className="flex items-center mb-1">
            <Image
              width={100}
              height={100}
              className="min-w-[100px]"
              alt="AIR company"
              src={image_url || "/dummy.jpg"}
            />
            <div className="ml-4">
              <h3
                className={`${title({
                  size: "xs",
                })} flex flex-col items-start`}
              >
                {name}
              </h3>
              <p
                className={`${subtitle({
                  weight: "light",
                  size: "sm",
                })} flex items-start mt-1`}
              >
                <MapPinIcon className="mt-1 mr-1 dark:text-gray-600 size-5" />
                {city}, {country?.substring(0, 2).toUpperCase()}
              </p>
              {placeUrl && (
                <Link
                  isBlock
                  showAnchorIcon
                  className="p-0 m-1"
                  target="_blank"
                  href={`https://www.google.com/maps/search/?api=1&query=${name}`}
                  color="foreground"
                >
                  Enlace a Google Maps
                </Link>
              )}
            </div>
          </div>
        </>
      }
      footer={descriptions}
    />
  );
}
