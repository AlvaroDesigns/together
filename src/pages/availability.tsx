import {
  Button as ButtonUI,
  Chip,
  Input,
  Radio,
  RadioGroup,
} from "@nextui-org/react";

import { DrawerCustom, RootLayout, Searcher } from "@/components";
import { CardHotelList, CardSkeleton } from "@/components/cards";
import { subtitle } from "@/components/primitives";
import { HOTELS } from "@/data";
import { useDataStore } from "@/stores";
import {
  AdjustmentsVerticalIcon,
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function Availability() {
  const {
    setter,
    home: { items },
  } = useDataStore((state) => state);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFilters, setFilters] = useState<boolean>(false);
  const [isSearcher, setSearcher] = useState<boolean>(false);

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
          size="md"
          isOpen={isSearcher}
          header="Buscar"
          onOpenChange={() => setSearcher(false)}
          body={<Searcher />}
          footer={undefined}
        />
      </section>
      <section className="flex flex-row gap-4 p-2 space-x-4 border-b-1 dark:border-default-200/50 ">
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
      <section className="flex flex-row gap-2 p-3 overflow-x-auto ">
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
        <p className={subtitle({ size: "sm" })}>250 Resultados</p>
      </section>
      <section className="relative flex flex-col pb-6 mx-4 text-left text-foreground">
        <div className="flex flex-col gap-4 ">
          {isLoading
            ? Array.from({ length: 5 }).map(() => (
                <CardSkeleton variant="vertical" count={1} />
              ))
            : HOTELS.map((data) => (
                <CardHotelList
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
