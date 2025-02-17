import {
  CardOut,
  CardSkeleton,
  CardWeather,
  DrawerUpdate,
  Hero,
  RootLayout,
} from "@/components";
import { CardBudget } from "@/components/Cards";
import CardItinerary from "@/components/Cards/cardItinerary";
import GeneratePDF from "@/components/generatePDF";

import { subtitle } from "@/components/primitives";
import { ENDPOINT } from "@/constants";
import { sectionSchema } from "@/helpers/schema";
import { useForm } from "@/hooks";
import Services from "@/services";
import { useDataStore, useUserStore } from "@/stores";
import { DetailsTypes, ItineraryTypes } from "@/stores/DataStore/index.types";
import { ROLES, VariantTypeSection } from "@/types";
import { formatDayForDays } from "@/utils";
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";
import { Button as ButtonUi, Link, useDisclosure } from "@heroui/react";
import { useTheme } from "@heroui/use-theme";
import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useFieldArray } from "react-hook-form";

interface RepeatingTypes {
  control: ReturnType<typeof useForm>["control"];
  watch: ReturnType<typeof useForm>["watch"];
  onOpen: () => void;
}

const Repeating = ({ control, watch, onOpen }: RepeatingTypes) => {
  const { role } = useUserStore((state) => state.user);
  const { setter, itinerary } = useDataStore((state) => state);
  const items = useDataStore((state) => state.itinerary?.items);

  const { fields, remove, swap } = useFieldArray({
    control,
    name: "items",
  });

  const watchFieldArray: DetailsTypes[] = watch("items");
  const controlledFields: DetailsTypes[] = useMemo(
    () =>
      fields?.map((field, index) => {
        return {
          ...field,
          ...watchFieldArray[index],
        };
      }),
    [fields, watchFieldArray]
  );

  const onEdit = useCallback(
    (id: number) => {
      if (Array.isArray(items) && items.length === 0) {
        return console.log("No data");
      }

      setter({ editId: id, isEdits: true });
      setTimeout(() => onOpen(), 100);
    },
    [items, onOpen, setter]
  );

  const handleRemove = useCallback(
    (index: number | undefined) => {
      remove(index);
    },
    [controlledFields]
  );

  const invertList = () => {
    const length = fields.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
      swap(i, length - i - 1);
    }
  };

  return (
    <>
      {controlledFields.map((item, index: number) => (
        <div className="mb-4" key={`${item.id}-${item.type}`}>
          <div className="flex items-center mb-1">
            <p
              className={`${subtitle({
                weight: "bold",
                size: "sm",
              })} flex items-center py-2`}
            >
              DÍA {formatDayForDays(itinerary?.startDate, item.startDate)}
            </p>
            {role === ROLES.ADMIN && index === 0 && <GeneratePDF />}
            {index === 0 && (
              <Link
                isExternal
                showAnchorIcon
                className="text-default-600 hover:text-default-600"
                color="foreground"
                onPress={invertList}
                anchorIcon={
                  <ArrowsUpDownIcon className="ml-2 mr-1 dark:text-gray-400 size-[22px]" />
                }
              />
            )}
          </div>
          <CardItinerary
            key={`card-${index}`}
            data={item}
            type={item.type as VariantTypeSection}
            onPressEdit={() => onEdit(item?.id)}
            onPressDelete={() => handleRemove(index)}
          />
        </div>
      ))}
    </>
  );
};

export default function Step2() {
  const { theme } = useTheme();

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { setter, itinerary } = useDataStore((state) => state);
  const { items, budget } = useDataStore((state) => state.itinerary);

  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [data, setData] = useState<ItineraryTypes | null>(null);

  const { control, watch, reset } = useForm({
    values: { items: items || [] },
    schema: sectionSchema,
  });

  useEffect(() => {
    if (items) {
      reset({ items }); // Usa el método reset de `useForm`
    }
  }, [items]);

  useEffect(() => {
    axios
      .all([
        Services().get(
          `${ENDPOINT.OPERATIVE}?query=${itinerary?.title}`,
          "weather"
        ),
        Services().get(`${ENDPOINT.DETAILS}/${itinerary?.id}`, "details"),
      ])
      .then(
        axios.spread((weatherData, details) => {
          const { data: weatherDataInfo } = weatherData || {};
          const { data } = details || {};

          const weather = {
            ...weatherDataInfo?.intervals[0].values,
          };

          /* Set */
          setter({
            itinerary: {
              ...data,
              weather,
              items: data?.items.sort(
                (a: { startDate: any }, b: { startDate: any }) =>
                  new Date(a.startDate ?? 0).getTime() -
                  new Date(b.startDate ?? 0).getTime()
              ),
            },
          });
          setData({ ...data, weather });
        })
      )
      .finally(() => setTimeout(() => setIsLoadingPage(false), 1000));
  }, []);

  const handlelOpen = useCallback(() => {
    onOpen();
  }, []);

  return (
    <RootLayout>
      <Hero
        loading={!items}
        startDate={itinerary?.startDate}
        endDate={itinerary?.endDate}
        title={itinerary?.title}
        days={itinerary?.days}
        image={itinerary?.image}
      />
      <section
        className="flex"
        data-height="250"
        data-style="curve"
        data-position="bottom"
      >
        <svg
          className="absolute w-full left-0 top-[240px] h-[70px] transform rotate-180 scale-y-[-1]"
          aria-hidden="true"
          fill={`${theme === "dark" ? "#000" : "#fff"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path d="M 0 0 c 0 0 200 50 500 50 s 500 -50 500 -50 v 101 h -1000 v -100 z" />
        </svg>
      </section>
      {data?.weather && data?.weather?.temperatureMax && (
        <section className="relative flex flex-col mx-4 mt-4 mb-3">
          <CardWeather
            humidity={data?.weather?.humidityAvg}
            max={data?.weather?.temperatureMax}
            min={data?.weather?.temperatureMin}
          />
        </section>
      )}
      <section className="relative flex flex-col mx-4 mb-2">
        {!isLoadingPage && data?.items ? (
          data?.items?.length > 0 ? (
            <Repeating control={control} watch={watch} onOpen={onOpen} />
          ) : (
            <div className="my-2">
              <CardOut />
            </div>
          )
        ) : (
          <CardSkeleton count={5} />
        )}
      </section>
      <section className="relative flex mx-4">
        <ButtonUi
          radius="full"
          color="primary"
          className="bg-gradient-to-r shadow-medium z-50 text-md bg-primary text-white h-14 min-h-[60px] fixed bottom-5 w-[calc(100%-33px)] hover:border-transparent"
          onPress={handlelOpen}
        >
          Añadir sección
        </ButtonUi>
        <DrawerUpdate
          data-testid="drawer-update"
          isOpen={isOpen}
          onClose={onClose}
          onOpenChange={onOpenChange}
        />
      </section>
      <section className="relative flex flex-col mx-4 mb-8">
        <CardBudget options={items || []} data={budget} />
      </section>
    </RootLayout>
  );
}
