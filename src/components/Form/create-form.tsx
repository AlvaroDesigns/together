import { AutocompleteController } from '@/components/Controller/autocomplete';
import Btn from '@/components/ui/btn';
import { ENDPOINT } from '@/constants';
import { createItinerary } from '@/helpers/schema';
import { useForm } from '@/hooks';
import Services from '@/services';
import { useProviderStore } from '@/stores/Global/store';
import { betweenDates, formatDay } from '@/utils';
import { sendEventError, sendEventSuccess } from '@/utils/events';
import { addHour } from '@formkit/tempo';
import { Form } from '@heroui/react';
import { AxiosResponse } from 'axios';
import { useCallback, useTransition } from 'react';
import { CalendarController2 } from '../Controller/calendar2';

interface CreateFormProps {
  name: string;
  dates: { from: Date; to: Date };
}

export function CreateForm({ onClose }: { onClose: () => void }) {
  const [isPending, startTransition] = useTransition();
  const { user, setterHome } = useProviderStore((state) => state);

  const { control, handleSubmit } = useForm({
    values: {
      name: '',
      dates: undefined,
    },
    schema: createItinerary,
  });

  const onSubmit = useCallback(async (value: CreateFormProps) => {
    startTransition(async () => {
      await Services({
        method: 'GET',
        url: `${ENDPOINT.IMAGE}?query=${value.name}`,
      })
        .then((res: AxiosResponse) => {
          Services({
            method: 'POST',
            url: `${ENDPOINT.ITINERARY}/${user?.userId}`,
            payload: {
              title: value.name,
              days: betweenDates(
                value.dates.from.toISOString(),
                value.dates.to.toISOString(),
              ),
              startDate: formatDay(addHour(value?.dates?.from, 1), 'YYYY-MM-DD HH:mm:ss'),
              endDate: formatDay(addHour(value?.dates?.to, 1), 'YYYY-MM-DD HH:mm:ss'),
              image: res.data?.src,
              date: new Date(),
            },
          })
            .then((res: AxiosResponse) => {
              const { status, data } = res;
              if (status !== 201) {
                return sendEventError();
              }
              setterHome({ products: data });
              onClose();
              sendEventSuccess();
            })
            .catch(() => sendEventError());
        })
        .catch(() => sendEventError());
    });
  }, []);

  return (
    <Form className="gap-4" onSubmit={handleSubmit(onSubmit)}>
      <AutocompleteController
        fullWidth
        name="name"
        label="¿A dónde vas?"
        endpoint={ENDPOINT.DIRECTIONS}
        placeholder="Escribe un destino..."
        control={control}
      />
      <CalendarController2
        fullWidth
        name="dates"
        mode="range"
        label="Fecha del viaje"
        placement="top"
        control={control}
      />
      <Btn type="submit" isLoading={isPending}>
        Guardar itinerario
      </Btn>
    </Form>
  );
}
