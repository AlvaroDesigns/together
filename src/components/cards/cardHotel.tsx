import { subtitle, title } from "@/components/primitives";
import { elipsis } from "@/utils";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { Image, Link } from "@nextui-org/react";
import { Stars } from "../atomos/stars";
import CardBase from "./cardBase";

export default function CardHotel({
  startDate = "2025/12/02",
  name = "Hotel Apostoli Garden",
  imageUrl,
  city,
  country,
  placeUrl = "url",
  stars,
  descriptions,
}: {
  startDate: string | Date;
  endDate: string | Date;
  name: string | undefined;
  imageUrl?: string | undefined;
  city: string | undefined;
  country: string | undefined;
  placeUrl?: string | undefined;
  stars?: number | undefined;
  descriptions?: string[] | null;
}) {
  console.log("image_url", imageUrl);
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
              src={imageUrl || "/dummy.jpg"}
            />
            <div className="ml-4">
              <h3
                className={`${title({
                  size: "xs",
                })} flex flex-col items-start`}
              >
                {name} {stars !== undefined && Stars({ count: stars })}
              </h3>
              <p
                className={`${subtitle({
                  weight: "light",
                  size: "sm",
                })} flex items-start mt-1`}
              >
                <MapPinIcon className="mt-1 mr-1 dark:text-gray-600 size-5" />
                {city}, {elipsis(country || "", 15)}
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
