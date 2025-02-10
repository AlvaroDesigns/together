import { Card, CardBody, Image } from "@heroui/react";
import { subtitle, title } from "../primitives";

export default function CardOut() {
  return (
    <Card isFooterBlurred className="w-full col-span-12 sm:col-span-7">
      <CardBody className="flex flex-row items-center pt-0 mt-3 mb-1">
        <>
          <div className="flex items-center">
            <Image
              width="252px"
              height="auto"
              alt="Trip"
              src={"https://ak-d.tripcdn.com/images/1re0b12000dks6fbe0CFA.png"}
            />
            <div className="ml-4">
              <div>
                <span
                  className={title({
                    size: "xs",
                    color: "green",
                  })}
                >
                  ¡Felicicidades,{" "}
                </span>
                <span
                  className={title({
                    size: "xs",
                    color: "base",
                  })}
                >
                  ya has creado tu itinerario!
                </span>
              </div>
              <p
                className={`${subtitle({
                  weight: "light",
                  size: "sm",
                })} mt-1`}
              >
                Haz click en el botón de añadir sección para comenzar.
              </p>
            </div>
          </div>
        </>
      </CardBody>
    </Card>
  );
}
