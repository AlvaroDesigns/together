import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button, Card, CardBody, Image } from "@heroui/react";
import { subtitle, title } from "../primitives";

interface CardHotelPromoProps {
  onPressClose?: () => void;
  onPressSubmit?: () => void;
  isClose?: boolean;
}

export default function CardHotelPromo({
  onPressClose,
  onPressSubmit,
  isClose,
}: CardHotelPromoProps) {
  return (
    <Card
      isFooterBlurred
      className="w-full col-span-12 sm:col-span-7"
      isDisabled={!isClose}
    >
      <CardBody className="flex flex-row items-center pt-0 mt-3 mb-1">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <span
              className={title({
                size: "xxs",
                color: "green",
              })}
            >
              ¿Necesitas un lugar para quedarte?
            </span>
            <Button
              isIconOnly
              aria-label="Close"
              isDisabled={!isClose}
              className="bg-[transparent] focus:outline-none hover:border-transparent"
              onPress={onPressClose}
            >
              <XMarkIcon className="mb-4 ml-4 dark:text-gray-400 size-5" />
            </Button>
          </div>
          <div className="flex items-center justify-between mt-2 mb-2">
            <div>
              <p
                className={`${subtitle({
                  weight: "light",
                  size: "sm",
                })} mt-1`}
              >
                Parece que aún no tienes alojamiento, te intersaría reservar.
              </p>
            </div>
            <div>
              <Image
                width="252px"
                height="auto"
                alt="Trip"
                src={
                  "https://wanderlog.com/assets/HotelAssociatedItemLargePromo.png"
                }
              />
            </div>
          </div>
          <Button
            radius="full"
            size="sm"
            className="p-4 text-white bg-primary text-small"
            onPress={onPressSubmit}
            isDisabled={!isClose}
          >
            Reservar hoteles
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
