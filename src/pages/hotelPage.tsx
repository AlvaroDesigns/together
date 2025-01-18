import { RootLayout, Stars } from "@/components";
import { subtitle, title } from "@/components/primitives";
import { FACILITIES } from "@/data";
import { WifiIcon } from "@heroicons/react/24/outline";
import { Image } from "@heroui/react";

export default function HotelPage() {
  return (
    <RootLayout>
      <section>
        <Image
          radius="none"
          alt="Hotel"
          height={200}
          src="https://www.kayak.es/rimg/himg/bc/6b/c3/leonardo-115223090-31_IMG_4717_O-777841.jpg?width=836&height=607&crop=true"
          width="100%"
        />
      </section>
      <section className="container grid items-center grid-cols-1 md:mt-5 md:grid-cols-2 md:grid-rows-1 ">
        <div className="flex flex-row justify-between pb-5 m-6 mb-2 text-left md:mx-auto offset-1 offset-md-0 text-md-left d-flex flex-column align-items-center align-items-md-start md:m-2 border-b-1 dark:border-default-200/50">
          <div className="flex flex-col gap-2 ">
            <h1
              className={`${title({
                color: "base",
                size: "s",
              })}`}
            >
              Axor Feria
            </h1>
            <h3
              className={subtitle({
                weight: "light",
                size: "xs",
              })}
            >
              CALLE CAMPEZO, 4 MADRID
            </h3>
            <Stars count={4} />
          </div>
          <div className="flex items-center justify-center w-8 h-8 rounded-lg border-1 dark:border-default-200/50">
            <p className="">{Math.round(Number(4.0))}</p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 px-4 pt-2 mx-2 pb-7">
          <h3 className="mb-2 text-sm text-gray-900 whitespace-nowrap">
            Puntos Clave
          </h3>
          <div className="flex flex-row overflow-x-auto ">
            {FACILITIES.map((f) => (
              <div className="flex flex-col items-center mr-4">
                <div className="p-2.5 mb-4 rounded-full bg-slate-100">
                  <WifiIcon className="dark:text-gray-400 text-primary size-5" />
                </div>
                <p className="text-xs text-gray-500 whitespace-nowrap">
                  {f.label.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </RootLayout>
  );
}
