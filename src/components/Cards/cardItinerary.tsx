import { subtitle, title } from "@/components/primitives";
import { CardTypes, VariantTypeSection } from "@/types";
import { elipsis, resolverAirFly } from "@/utils";
import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { Image, Link } from "@heroui/react";
import { useState } from "react";
import { Stars } from "../atomos/stars";
import CardBase from "./cardBase";

const RenderHotel = (data: CardTypes) => {
  const {
    name,
    imageUrl,
    cityName,
    country,
    placeUrl = "url",
    stars = 0,
  } = data;
  return (
    <div className="flex items-center mb-1">
      <Image
        width={100}
        height={100}
        className="min-w-[100px]"
        alt="AIR company"
        fallbackSrc="../../../dummy.jpg"
        src={imageUrl ?? "../../../dummy.jpg"}
      />
      <div className="ml-4">
        <h3
          className={`${title({
            size: "xs",
          })} flex flex-col items-start`}
        >
          {name} {Stars({ count: stars ?? 0 })}
        </h3>
        <p
          className={`${subtitle({
            weight: "light",
            size: "sm",
          })} flex items-start mt-1`}
        >
          <MapPinIcon className="mt-1 mr-1 dark:text-gray-600 size-5" />
          {cityName}, {elipsis(country || "", 15)}
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
  );
};

const RenderFlight = (data: CardTypes) => {
  const {
    departure,
    departureLabel,
    destination,
    destinationLabel,
    numberFlight,
    arrivalTime,
  } = data;

  const time = arrivalTime?.split("-");

  return (
    <div className="flex items-center mb-1">
      <Image
        width={45}
        height={45}
        alt="AIR company"
        className="min-w-11"
        fallbackSrc="dummy.jpg"
        src={resolverAirFly(numberFlight?.substring(0, 2))}
      />
      <div className="flex flex-col ml-3">
        <Link
          showAnchorIcon
          underline="none"
          className="p-0"
          target="_blank"
          href={`https://www.google.com/search?q=${numberFlight?.substring(
            0,
            2
          )}+flight+${numberFlight?.substring(2)}`}
          color="foreground"
        >
          {numberFlight}
        </Link>
        <h3
          className={`${title({
            size: "xxs",
          })} flex flex-col items-start `}
        >
          {departureLabel && `${elipsis(departureLabel || "", 19)} a `}
          {elipsis(destinationLabel || "", 19)}
        </h3>
        <div
          className={`${subtitle({
            weight: "light",
            size: "sm",
          })} flex`}
        >
          <div className="flex mt-1">
            <p className="flex items-center mr-2">
              <ArrowUpRightIcon className="mr-1 dark:text-gray-600 size-5" />
              {departure} {time?.[0]}
            </p>

            <p className="flex items-center ml-2">
              <ArrowDownRightIcon className="mr-1 dark:text-gray-600 size-5" />
              {destination} {time?.[1]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const RenderTransfer = (data: CardTypes) => {
  const { name, arrivalTime, placeUrl } = data;

  return (
    <div className="flex items-center mb-1">
      <Image
        width={100}
        height={100}
        className="min-w-[100px] object-cover"
        alt="transfer"
        fallbackSrc="dummy.jpg"
        src={`/${name?.toLocaleLowerCase()}.jpg`}
      />
      <div className="ml-4">
        <h3
          className={`${title({
            size: "xs",
          })} flex flex-col items-start`}
        >
          Translado en {name}
        </h3>
        {arrivalTime && (
          <p
            className={`${subtitle({
              weight: "light",
              size: "sm",
            })} flex items-start`}
          >
            <ClockIcon className="mt-1 mr-1 dark:text-gray-600 size-5" />
            Duración {arrivalTime?.toString()}
          </p>
        )}
        {placeUrl && (
          <Link
            isBlock
            showAnchorIcon
            className="p-0 my-1"
            target="_blank"
            href={`https://www.google.com/maps/search/?api=1&query=${name}`}
            color="foreground"
          >
            Enlace a Google Maps
          </Link>
        )}
      </div>
    </div>
  );
};

const RenderTrip = (data: CardTypes) => {
  const { name, imageUrl, arrivalTime, placeUrl } = data;

  return (
    <>
      <div className="flex items-center mb-1">
        <Image
          width={100}
          height={100}
          className="min-w-[100px]"
          alt="Trip"
          fallbackSrc="dummy.jpg"
          src={imageUrl}
        />
        <div className="ml-4">
          <h3
            className={`${title({
              size: "xs",
            })} flex flex-col items-start`}
          >
            {name}
          </h3>
          {arrivalTime && (
            <p
              className={`${subtitle({
                weight: "light",
                size: "sm",
              })} flex items-start`}
            >
              <ClockIcon className="mt-1 mr-1 dark:text-gray-600 size-5" />
              Duración {arrivalTime?.toString()}
            </p>
          )}
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
  );
};

const RenderOther = (data: CardTypes) => {
  const { description } = data;

  const [isExpanded, setIsExpanded] = useState(false);

  const preview = description?.slice(0, 15);

  return (
    <div className="flex flex-col">
      {isExpanded ? (
        <p>{description?.map((item: string) => item)}</p>
      ) : (
        <p>{preview?.map((item: string) => item.slice(0, 82))}...</p>
      )}
      <Link
        color="foreground"
        underline="always"
        onPress={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Ver más" : "Ver menos"}
      </Link>
    </div>
  );
};

export default function CardItinerary({
  type,
  data,
  onPressEdit,
  onPressDelete,
}: {
  type: VariantTypeSection;
  data: CardTypes;
  onPressEdit?: () => void;
  onPressDelete?: () => void;
}) {
  const { startDate, description } = data;

  const RENDERS: Record<string, JSX.Element> = {
    HOTEL: RenderHotel(data),
    FLIGHT: RenderFlight(data),
    TRANSFER: RenderTransfer(data),
    TRIP: RenderTrip(data),
    OTHER: RenderOther(data),
  };

  return (
    <CardBase
      onPressEdit={onPressEdit}
      onPressDelete={onPressDelete}
      header={startDate}
      body={RENDERS[type]}
      footer={description}
    />
  );
}
