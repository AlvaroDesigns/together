import { subtitle, title } from "@/components/primitives";
import { CardFlightTypes } from "@/types";
import { elipsis, resolverAirFly } from "@/utils";
import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import { Image, Link } from "@nextui-org/react";
import CardBase from "./cardBase";

export default function CardFlight({
  startDate,
  departure,
  departureLabel,
  destination,
  destinationLabel,
  numberFlight,
  descriptions,
  arrivalTime,
  onPressEdit,
  onPressDelete,
}: CardFlightTypes) {
  const time = arrivalTime?.split("-");

  return (
    <CardBase
      header={startDate}
      onPressEdit={onPressEdit}
      onPressDelete={onPressDelete}
      body={
        <>
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
              isBlock
              showAnchorIcon
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
        </>
      }
      footer={descriptions?.length === 0 ? null : descriptions}
    />
  );
}
