import { RootLayout } from "@/components";
import CardVertical from "@/components/card";
import { subtitle, title } from "@/components/primitives";
import { ROUTES } from "@/constants";
import { Button, Image } from "@heroui/react";

import { useRouter } from "@tanstack/react-router";

export default function Home() {
  const router = useRouter();

  return (
    <RootLayout>
      <section className="container grid items-center grid-cols-1 gap-4 md:mt-5 md:grid-cols-2 md:grid-rows-1">
        <div className="flex flex-col text-center px-7 md:mx-auto my-7 offset-1 offset-md-0 text-md-left d-flex flex-column align-items-center align-items-md-start md:m-2 ">
          <h1
            className={`${title({
              color: "green",
            })} mb-5  leading-tight`}
          >
            Una aplicación para todas tus necesidades de planificación de viajes
          </h1>
          <h3
            className={subtitle({
              weight: "light",
              size: "sm",
            })}
          >
            Cree itinerarios detallados, explore guías compartidas por los
            usuarios y administre sus reservas sin problemas, todo en un solo
            lugar.
          </h3>
          <div className="flex justify-center gap-4 mt-4">
            <Button
              radius="full"
              size="md"
              onPress={() => router.navigate({ to: ROUTES.REGISTER })}
              className="bg-transparent border-primary text-primary hover:border-primary"
            >
              Empezamos
            </Button>
          </div>
        </div>
        <div className="hidden w-full h-64 bg-center md:block">
          <Image
            width="100%"
            height="auto"
            alt="Trip"
            src="https://theprocesshacker.com/wp-content/uploads/2024/06/wanderlog.png"
          />
        </div>
      </section>
      <section className="justify-center py-12 bg-slate-100 dark:bg-black border-y-1 border-slate-200 dark:border-default-200/50">
        <div className="container flex flex-col items-center w-full sm:flex-row px-7 md:mx-auto my-7">
          <div className="mb-8">
            <Image
              width="100%"
              height="auto"
              radius="lg"
              alt="Trip"
              src="../../imagen_iphone.jpg"
            />
          </div>
          <div className="flex flex-col w-full gap-4 text-center md:w-2/5 md:mx-auto">
            <h3
              className={`${title({
                size: "sm",
              })}`}
            >
              Tu itinerario y tu mapa en una sola vista
            </h3>
            <h3
              className={subtitle({
                weight: "light",
                size: "sm",
              })}
            >
              Ya no es necesario cambiar entre diferentes aplicaciones, pestañas
              y herramientas para realizar un seguimiento de sus planes de
              viaje.
            </h3>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center py-12 dark:bg-black ">
        <div className="container px-7 md:mx-auto my-7">
          <div className="flex items-center justify-center w-full mb-8 text-center ">
            <h3
              className={`${title({
                size: "sm",
              })} md:w-3/5`}
            >
              Explora cientos de lugares para visitar en cada rincón del mundo.
            </h3>
          </div>
          <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-4">
            <CardVertical
              title="París"
              subtitle="Francia"
              maxHeight={200}
              onClick={() =>
                router.navigate({ to: ROUTES.AVAILABILITY_PUBLIC })
              }
              image="https://wanderlog.com/p/images/66e9a04a24043fa9fcd9a0cd_66bd2d63d57b940bc1b11e26_img%20paris_explore_places.jpg"
            />
            <CardVertical
              title="París"
              subtitle="Francia"
              maxHeight={200}
              onClick={() =>
                router.navigate({ to: ROUTES.AVAILABILITY_PUBLIC })
              }
              image="https://www.youknowboat.com/blog/wp-content/uploads/2024/08/amsterdam.webp"
            />
            <CardVertical
              title="Tokio"
              subtitle="Japon"
              maxHeight={200}
              onClick={() =>
                router.navigate({ to: ROUTES.AVAILABILITY_PUBLIC })
              }
              image="https://wanderlog.com/p/images/66e9a04af169a54a82164ea9_66bd2d63b74cc52cdd91b284_img%20tokyo_explore_places.jpg"
            />
          </div>
        </div>
      </section>
    </RootLayout>
  );
}
