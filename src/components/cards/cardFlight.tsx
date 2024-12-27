import { subtitle, title } from "@/components/primitives";
import { resolverAirFly } from "@/utils";
import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import { Image, Link } from "@nextui-org/react";
import CardBase from "./cardBase";

export default function CardFlight({
  startDate = "2025/12/02",
  departure = "Palma de Mallorca",
  destination = "Venecia",
  numberFlight = "FR6582",
  descriptions,
}: {
  startDate: string | undefined;
  departure: string | undefined;
  destination: string | undefined;
  numberFlight: string | undefined;
  descriptions?: string[] | null;
}) {
  return (
    <CardBase
      header={startDate}
      body={
        <>
          <Image
            width={45}
            height={45}
            alt="AIR company"
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
                size: "xs",
              })} flex flex-col items-start `}
            >
              {departure && `${departure} to `}
              {destination}
            </h3>
            <p
              className={`${subtitle({
                weight: "light",
                size: "sm",
              })} flex`}
            >
              <div className="flex mt-1">
                <span className="flex items-center mr-2">
                  <ArrowUpRightIcon className="mr-1 dark:text-gray-600 size-5" />
                  PMI 15:20
                </span>
                -
                <span className="flex items-center ml-2">
                  <ArrowDownRightIcon className="mr-1 dark:text-gray-600 size-5" />
                  TFS 19.20
                </span>
              </div>
            </p>
          </div>
        </>
      }
      footer={descriptions}
    />
  );
}
