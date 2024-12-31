import { title } from "@/components/primitives";
import { Image, Link } from "@nextui-org/react";
import CardBase from "./cardBase";

export default function CardTrip({
  startDate = "2025/12/02",
  name = "Gran Canal en góndola con comentarios en directo",
  imageUrl,
  placeUrl = "url",
  descriptions,
}: {
  startDate: string | Date;
  endDate: string | Date;
  name: string | undefined;
  imageUrl?: string | undefined;
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
              alt="transfer"
              src={imageUrl || "dummy.jpg"}
            />
            <div className="ml-4">
              <h3
                className={`${title({
                  size: "xs",
                })} flex flex-col items-start`}
              >
                {name}
              </h3>
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
