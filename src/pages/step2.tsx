import { CardOut, CardSkeleton, CardWeather, Hero } from '@/components';
import { CardBudget } from '@/components/Cards';
import CardItinerary from '@/components/Cards/cardItinerary';
import AddSecction from '@/components/Drawer/add-secction';
import GeneratePDF from '@/components/generatePDF';

import { subtitle } from '@/components/primitives';
import Btn from '@/components/ui/btn';
import { ENDPOINT } from '@/constants';
import { sectionSchema } from '@/helpers/schema';
import { useFetch, useForm } from '@/hooks';
import { DetailsTypes } from '@/stores/DataStore/index.types';
import { useProviderStore } from '@/stores/Global/store';
import { ROLES, VariantTypeSection } from '@/types';
import { formatDayForDays } from '@/utils';
import { sendEventError } from '@/utils/events';
import { ArrowsUpDownIcon } from '@heroicons/react/24/outline';
import { Link, useDisclosure } from '@heroui/react';
import { useTheme } from '@heroui/use-theme';
import { useCallback, useEffect, useMemo } from 'react';
import { useFieldArray } from 'react-hook-form';
interface RepeatingTypes {
  control: ReturnType<typeof useForm>['control'];
  watch: ReturnType<typeof useForm>['watch'];
  onOpen: () => void;
}

const Repeating = ({ control, watch, onOpen }: RepeatingTypes) => {
  const { setChangeItinerary, setterItinerary, itinerary, user } = useProviderStore();
  const { items } = itinerary || {};
  const { fields, remove, swap } = useFieldArray({
    control,
    name: 'items',
  });

  const watchFieldArray: DetailsTypes[] = watch('items');
  const controlledFields: DetailsTypes[] = useMemo(
    () =>
      fields?.map((field, index) => {
        return {
          ...field,
          ...watchFieldArray[index],
        };
      }),
    [fields, watchFieldArray],
  );

  const onEdit = useCallback(
    (id: number | undefined) => {
      if (Array.isArray(items) && items.length === 0) {
        console.error('Together Lab: No data items');
        return sendEventError();
      }

      setterItinerary({ ...itinerary, editId: id });
      setChangeItinerary(true);
      setTimeout(() => onOpen(), 100);
    },
    [items, onOpen],
  );

  const handleRemove = useCallback(
    (index: number | undefined) => {
      remove(index);
    },
    [controlledFields],
  );

  const invertList = useCallback(() => {
    const length = fields?.length || 0;
    for (let i = 0; i < Math.floor(length / 2); i++) {
      swap(i, length - i - 1);
    }
  }, [fields, swap]);

  return controlledFields.map((item, index: number) => {
    return (
      <div className="mb-4" key={`${item.id}-${item.type}`}>
        <div className="flex items-center mb-1">
          <p
            className={`${subtitle({
              weight: 'bold',
              size: 'sm',
            })} flex items-center py-2`}
          >
            DÍA {formatDayForDays(itinerary?.startDate, item.startDate)}
          </p>
          {user.role === ROLES.ADMIN && index === 0 && <GeneratePDF />}
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
          onPressEdit={() => onEdit(Number(item?.id))}
          onPressDelete={() => handleRemove(index)}
        />
      </div>
    );
  });
};

export default function Step2() {
  const { theme } = useTheme();
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const { home, itinerary, setterItinerary } = useProviderStore();
  const { items } = itinerary || {};

  const { control, watch, reset } = useForm({
    values: { items: items || [] },
    schema: sectionSchema,
  });

  const { data: weatherData, isLoading: isLoadingWeather } = useFetch({
    method: 'GET',
    url: `${ENDPOINT.OPERATIVE}?query="Madrid-Spain"`,
    // dependencies: [home?.productId], // Dependencia para actualizar cuando cambie productId
  });

  const { data: detailsData, isLoading: isLoadingDetails } = useFetch({
    method: 'GET',
    url: `${ENDPOINT.DETAILS}/${home?.productId}`, // Evita llamadas si productId es null
    // dependencies: [home?.productId], // Dependencia para actualizar cuando cambie productId
  });

  useEffect(() => {
    if (weatherData && detailsData) {
      const weather = {
        ...weatherData?.intervals[0].values,
      };

      /* Set */
      setterItinerary({
        ...detailsData,
        weather,
        items: detailsData?.items,
      });
    }
  }, [weatherData, detailsData]);

  useEffect(() => {
    if (items) {
      reset({ items }); // Usa el método reset de `useForm`
    }
  }, [items]);

  return (
    <>
      <Hero
        loading={isLoadingDetails && isLoadingWeather}
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
          fill={`${theme === 'dark' ? '#000' : '#fff'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path d="M 0 0 c 0 0 200 50 500 50 s 500 -50 500 -50 v 101 h -1000 v -100 z" />
        </svg>
      </section>

      <section className="relative flex flex-col mx-4 mt-2 mb-3">
        <CardWeather
          isActive={Boolean(itinerary?.weather?.temperatureMax)}
          humidity={itinerary?.weather?.humidityAvg}
          max={itinerary?.weather?.temperatureMax}
          min={itinerary?.weather?.temperatureMin}
        />
      </section>

      <section className="relative flex flex-col mx-4 mb-2">
        {!isLoadingDetails && !isLoadingWeather && items ? (
          items?.length > 0 ? (
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

      <CardBudget options={items || []} data={[]} mb="2rem" mr="1rem" ml="1rem" />

      <div className="z-10 fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)]">
        <Btn type="submit" onPress={onOpen}>
          Añadir sección
        </Btn>
        <AddSecction isOpen={isOpen} onOpenChange={onOpenChange} onClose={onClose} />
      </div>
    </>
  );
}
