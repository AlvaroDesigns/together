import ItineraryForm from '@/components/Form/itinerary-form';
import Btn from '@/components/ui/btn';
import DrawerCustom from '@/components/ui/drawerCustom';
import { ENDPOINT } from '@/constants';
import { params } from '@/helpers/params';
import { sectionSchema } from '@/helpers/schema';
import { useForm } from '@/hooks';
import Services from '@/services';
import { useProviderStore } from '@/stores/Global/store';
import { VARIANT_TYPE_SECTION } from '@/types';
import { formatDay, productItemId } from '@/utils';
import { sendEventError, sendEventSuccess } from '@/utils/events';
import { AxiosResponse } from 'axios';
import { useEffect } from 'react';

interface AddSectionProps {
  isOpen: boolean;
  onClose?: () => void;
  onOpenChange: (isOpen: boolean) => void;
}

export default function AddSecction({ isOpen, onOpenChange }: AddSectionProps) {
  const { itinerary, isItinerary, setterItinerary, setChangeItinerary } =
    useProviderStore((state) => state);
  const { items, editId } = itinerary || {};

  const product = productItemId(Number(editId), items);

  const { control, reset, handleSubmit, watch } = useForm({
    values: {
      type: VARIANT_TYPE_SECTION.FLIGHT,
    },
    schema: sectionSchema,
  });

  useEffect(() => {
    if (product && editId && isItinerary) {
      const { ...rest } = product;
      reset({
        ...rest,
      });
    } else
      reset({
        type: VARIANT_TYPE_SECTION.FLIGHT,
      });
  }, [editId, items, reset, product, isItinerary, isOpen]);

  const handleDrawerClose = (open: boolean) => {
    if (!open) {
      // Actualizar isItinerary y editId al cerrar el drawer
      setterItinerary({ ...itinerary, editId: undefined });
      setChangeItinerary(false);
    }

    onOpenChange(open); // Llamar al callback original
  };

  const TYPE = watch('type');

  const onSubmit = async (value: any) => {
    let dt = {};
    if (TYPE === VARIANT_TYPE_SECTION.FLIGHT) {
      const date = formatDay(value.startDate);

      const res = await Services({
        method: 'GET',
        url: `${ENDPOINT.FLIGHTS}?flightNumber=${value?.numberFlight}&date=${date}`,
      });

      dt = res?.data || {};
    }

    return Services({
      method: 'POST',
      url: `${ENDPOINT.DETAILS}/${itinerary?.id}`,
      payload: params({ ...value, ...dt }),
    })
      .then((res: AxiosResponse) => {
        const { status, data } = res;

        if (status !== 201) {
          sendEventError();
        }

        setterItinerary({
          isfetching: true,
          items: data,
        });

        sendEventSuccess();
      })
      .catch(() => sendEventError());
  };

  return (
    <DrawerCustom
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={handleDrawerClose}
      header="Configura tu viaje"
      body={<ItineraryForm type={TYPE} control={control} reset={reset} />}
      footer={<Btn onPress={handleSubmit(onSubmit)}>Guardar Actividad</Btn>}
    />
  );
}
