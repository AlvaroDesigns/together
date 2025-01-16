import {
  Alert,
  Button as ButtonUI,
  Chip,
  Input,
  Radio,
  RadioGroup,
} from "@nextui-org/react";

import { Button, DrawerCustom, RootLayout, Searcher } from "@/components";
import { CardHotelList, CardSkeleton } from "@/components/cards";
import { ROUTES } from "@/constants";
import { HOTELS } from "@/data";
import { useUserStore } from "@/stores";
import {
  AdjustmentsVerticalIcon,
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export default function Availability() {
  const { user } = useUserStore((state) => state);
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFilters, setFilters] = useState<boolean>(false);
  const [isSearcher, setSearcher] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    /* Start Loading */
    setIsLoading(true);

    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <RootLayout>
      <section className="p-4 border-b-1 dark:border-default-200/50">
        <Input
          isReadOnly
          radius="full"
          defaultValue="Jue 12 de Feb - Dom 15 de Feb, 2 adultos"
          onClick={() => setSearcher(true)}
          classNames={{
            inputWrapper: "!min-h-[60px]",
          }}
          label="Madrid, España"
          endContent={
            <MagnifyingGlassIcon className="mt-1 mr-1 dark:text-gray-600 size-6" />
          }
        />
        <DrawerCustom
          backdrop="blur"
          placement="bottom"
          radius="lg"
          size="lg"
          isOpen={isSearcher}
          header="Buscar"
          onOpenChange={() => setSearcher(false)}
          body={<Searcher />}
          footer={
            <Button
              onPress={() => router.navigate({ to: ROUTES.AVAILABILITY })}
            >
              Buscar
            </Button>
          }
        />
      </section>
      <section className="flex flex-row gap-4 p-2 space-x-4 border-b-1 dark:border-default-200/50">
        <ButtonUI
          fullWidth
          radius="none"
          className="bg-transparent focus:outline-none"
          onPress={() => setFilters(true)}
          startContent={
            <ChevronUpDownIcon className="mt-1 text-gray-600 dark:text-gray-300 size-6" />
          }
        >
          Ordenar
        </ButtonUI>

        <ButtonUI
          fullWidth
          radius="none"
          className="bg-transparent border-s-gray-300 dark:border-s-gray-700 focus:outline-none"
          startContent={
            <AdjustmentsVerticalIcon className="mt-1 text-gray-600 dark:text-gray-300 size-6" />
          }
        >
          Filtrar
        </ButtonUI>
        <DrawerCustom
          isOpen={isFilters}
          header="Ordenar"
          onOpenChange={() => setFilters(false)}
          body={
            <div className="px-4">
              <RadioGroup value="recomendado">
                <Radio
                  value="recomendado"
                  classNames={{
                    control: "bg-[#009688]",
                    wrapper: "!border-[#009688]",
                  }}
                >
                  Recomendaciones Together
                </Radio>
                <Radio value="low">Ordenar: Precio más bajo</Radio>
                <Radio value="alto">ordenar: Precio más alto</Radio>
              </RadioGroup>
            </div>
          }
          footer={undefined}
        />
      </section>
      <section className="flex flex-row gap-2 p-3 overflow-x-auto border-b-1 dark:border-default-200/50">
        <Chip size="lg" variant="bordered">
          Desayuno gratis
        </Chip>
        <Chip size="lg" className="bg-[#009688] text-white">
          Ofertas exclusivas
        </Chip>
        <Chip size="lg" variant="bordered">
          Cancelación gratis
        </Chip>
      </section>
      <section className="flex flex-row p-4 text-left">
        {user.logger ? (
          <Alert
            color="success"
            description="Genial, estas disfurtando de precios exclusivos."
            isVisible={isVisible}
            title="¡Bienvenido de nuevo!"
            variant="faded"
            onClose={() => setIsVisible(false)}
          />
        ) : (
          <Alert
            color="warning"
            description="¡Precios exclusivos para usuarios registrados!"
            isVisible={isVisible}
            title="Inicia sesión y accede a ofertas únicas"
            variant="faded"
            onClose={() => setIsVisible(false)}
          />
        )}
      </section>
      <section className="relative flex flex-col pb-6 mx-4 text-left text-foreground">
        <div className="flex flex-col gap-4 ">
          {isLoading
            ? Array.from({ length: 5 }).map((__, index) => (
                <CardSkeleton key={index} variant="vertical" count={1} />
              ))
            : HOTELS.map((data) => (
                <CardHotelList
                  key={data.hotel.name}
                  name={data.hotel.name}
                  stars={data.hotel.stars}
                  rating={Math.round(Number(data.hotel.tripAdvisor.rating))}
                  image={data.hotel.image}
                  price={data.hotel.selectedDistribution.averageNightlyRate}
                  address={data.hotel.location.address}
                />
              ))}
        </div>
      </section>
    </RootLayout>
  );
}
