import { subtitle, title } from "@/components/primitives";
import { CardTypes } from "@/types";
import { elipsis } from "@/utils";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { Image, Link } from "@heroui/react";
import { Stars } from "../atomos/stars";
import CardBase from "./cardBase";

export default function CardHotel({
  startDate,
  name,
  imageUrl,
  city,
  country,
  placeUrl = "url",
  stars,
  descriptions,
  onPressEdit,
  onPressDelete,
}: CardTypes) {
  return (
    <CardBase
      onPressEdit={onPressEdit}
      onPressDelete={onPressDelete}
      header={startDate}
      body={
        <>
          <div className="flex items-center mb-1">
            <Image
              width={100}
              height={100}
              className="min-w-[100px]"
              alt="AIR company"
              fallbackSrc="dummy.jpg"
              src={imageUrl}
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
