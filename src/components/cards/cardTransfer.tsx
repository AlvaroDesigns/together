import { subtitle, title } from "@/components/primitives";
import { ClockIcon } from "@heroicons/react/24/outline";
import { Image, Link } from "@nextui-org/react";
import CardBase from "./cardBase";

export default function CardTransfer({
  startDate,
  arrivalTime,
  name,
  placeUrl = "url",
  descriptions,
  onPressEdit,
  onPressDelete,
}: {
  startDate: string | Date;
  arrivalTime: string | Date;
  endDate: string | Date;
  name: string | undefined;
  placeUrl?: string | undefined;
  descriptions?: string[] | null;
  onPressEdit: () => void;
  onPressDelete: () => void;
}) {
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
        </>
      }
      footer={descriptions}
    />
  );
}
