import {
  Alert,
  Button as ButtonUI,
  Chip,
  Input,
  Radio,
  RadioGroup,
} from "@heroui/react";

import { Button, DrawerCustom, RootLayout, Searcher } from "@/components";
import { CardHotelList, CardSkeleton } from "@/components/cards";
import { ROUTES } from "@/constants";
import { HOTELS } from "@/data";
import { LITERAL } from "@/i18/es";
import { useUserStore } from "@/stores";
import { formatString } from "@/utils";
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
      <section className="flex-row hidden gap-4 p-2 space-x-4 border-b-1 dark:border-default-200/50">
        <ButtonUI
          fullWidth
          radius="none"
          className="bg-transparent focus:outline-none hover:border-transparent"
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
          className="font-normal bg-transparent border-s-gray-300 dark:border-s-gray-700 focus:outline-none hover:border-s-gray-300"
          startContent={
            <AdjustmentsVerticalIcon className="mt-1 text-gray-600 dark:text-gray-300 size-6" />
          }
        >
          Filtrar
        </ButtonUI>
        <DrawerCustom
          backdrop="blur"
          placement="bottom"
          radius="lg"
          size="lg"
          isOpen={isFilters}
          header="Ordenar"
          onOpenChange={() => setFilters(false)}
          body={
            <div className="px-4">
              <RadioGroup value="recomendado">
                <Radio
                  value="recomendado"
                  classNames={{
                    control: "bg-primary",
                    wrapper: "!border-primary",
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
      <section className="flex flex-row gap-2 px-5 py-2 border-b-1 dark:border-default-200/50">
        <ButtonUI
          isIconOnly
          radius="sm"
          className="mr-1 bg-transparent border-2 h-9 focus:outline-none hover:border-default-400/50 border-default-400/50"
          startContent={
            <AdjustmentsVerticalIcon className="text-gray-600 rotate-90 dark:text-gray-300 size-5" />
          }
        />

        <div className="flex flex-row gap-2 overflow-x-auto custom-scrollbar">
          <ButtonUI
            radius="sm"
            className="bg-transparent border-2 h-9 focus:outline-none border-default-400/50 hover:border-transparent"
            onPress={() => setFilters(true)}
            endContent={
              <ChevronUpDownIcon className="w-3 h-3 text-gray-600 dark:text-gray-300 size-6" />
            }
          >
            Ordenar
          </ButtonUI>
          <Chip
            size="md"
            radius="sm"
            variant="bordered"
            className="min-h-[36px] text-white bg-primary border-primary"
          >
            Desayuno gratis
          </Chip>
          <Chip
            size="md"
            radius="sm"
            variant="bordered"
            className="min-h-[36px]"
          >
            Ofertas exclusivas
          </Chip>
          <Chip
            size="md"
            radius="sm"
            variant="bordered"
            className="min-h-[36px] "
          >
            Cancelación gratis
          </Chip>
        </div>
      </section>
      <section className="relative flex flex-col pt-4 pb-6 mx-4 text-left text-foreground">
        <div className="flex flex-col gap-4">
          <Alert
            color={user.logger ? "success" : "warning"}
            title={
              user.logger
                ? LITERAL.LOGGED_SESSION.TITLE
                : LITERAL.NO_LOGGED_SESSION.TITLE
            }
            description={
              user.logger
                ? LITERAL.LOGGED_SESSION.SUBTITLE
                : LITERAL.NO_LOGGED_SESSION.SUBTITLE
            }
            isVisible={isVisible}
            variant="faded"
            onClose={() => setIsVisible(false)}
          />
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
                  onPress={() =>
                    router.navigate({
                      to: `${ROUTES.HOTELS}/$nameId`,
                      params: { nameId: formatString(data.hotel.name) },
                    })
                  }
                />
              ))}
        </div>
      </section>
    </RootLayout>
  );
}
