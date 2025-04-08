import { Label } from '@/components';
import { resolverForm } from '@/components/Controller/resolver';
import { TRANSFER_DATA, TRIP_DATA } from '@/data';
import { useForm } from '@/hooks';

import { useProviderStore } from '@/stores/Global/store';
import { VARIANT_TYPE_SECTION, VariantTypeSection } from '@/types';
import { Divider, Select, SelectItem } from '@heroui/react';
import { Controller } from 'react-hook-form';

interface SectionFormProps {
  control: ReturnType<typeof useForm>['control'];
  reset: ReturnType<typeof useForm>['reset'];
  type: VariantTypeSection | undefined;
  startDate?: string | Date | null;
}

export default function ItineraryForm({
  control,
  reset,
  type = VARIANT_TYPE_SECTION.FLIGHT,
}: SectionFormProps) {
  const { itinerary } = useProviderStore((state) => state);

  const TRIP = TRIP_DATA();
  const TRANSFER = TRANSFER_DATA();

  const handleChange = (item: { currentKey: string }) => {
    if (type) {
      const val = item.currentKey ?? type;
      reset({ type: val });
    }
  };

  const DATA: Record<VariantTypeSection, any[]> = {
    FLIGHT: [
      {
        key: 'Calendar',
        label: 'Fecha de salida',
        name: 'startDate',
        control,
        minDate: itinerary?.startDate,
        maxDate: itinerary?.endDate,
      },
      {
        key: 'Divider',
      },
      {
        key: 'Input',
        name: 'numberFlight',
        control,
        placeholder: 'Ej: FR1234',
        label: 'Numero de vuelo',
      },
    ],
    TRANSFER: [
      {
        key: 'Calendar',
        name: 'startDate',
        label: 'Fecha del servicio',
        placeholder: 'Selecciona un transporte',
        control,
        minDate: itinerary?.startDate,
        maxDate: itinerary?.endDate,
      },
      {
        key: 'Divider',
      },
      {
        key: 'Time',
        label: 'Hora de salida',
        name: 'starTime',
        control,
      },
      {
        key: 'Divider',
      },
      {
        key: 'Select',
        name: 'name',
        label: 'Nombre del servicio',
        placeholder: 'Selecciona un transporte',
        items: TRANSFER,
        control,
      },
      {
        key: 'Divider',
      },
      {
        key: 'TextArea',
        label: 'Descripción',
        name: 'description',
        placeholder: 'Introduce tu descripcion',
        control,
      },
    ],
    HOTEL: [
      {
        key: 'Calendar',
        name: 'startDate',
        label: 'Día de entrada',
        control,
        minDate: itinerary?.startDate,
        maxDate: itinerary?.endDate,
      },
      {
        key: 'Divider',
      },
      {
        key: 'Time',
        label: 'Hora de Check-in',
        name: 'starTime',
        control,
      },
      {
        key: 'Divider',
      },
      {
        key: 'Calendar',
        name: 'endDate',
        label: 'Fecha de salida',
        control,
        minDate: itinerary?.startDate,
        maxDate: itinerary?.endDate,
      },
      {
        key: 'Divider',
      },
      {
        key: 'Input',
        name: 'name',
        label: 'Nombre del hotel',
        placeholder: 'Ej: Hotel Roma',
        control,
      },
      {
        key: 'Divider',
      },
      {
        key: 'RadioGroup',
        name: 'stars',
        label: 'Categoría',
        control,
      },
      {
        key: 'Divider',
      },
      {
        key: 'Input',
        name: 'country',
        label: 'Pais',
        placeholder: 'Ej: Italia',
        control,
      },
      {
        key: 'Divider',
      },
      {
        key: 'Input',
        name: 'cityName',
        label: 'Ciudad',
        placeholder: 'Ej: Roma',
        control,
      },
      {
        key: 'Divider',
      },
      {
        key: 'TextArea',
        name: 'description',
        label: 'Descripción',
        placeholder: 'Introduce tu descripcion',
        control,
      },
    ],
    RENT: [
      {
        key: 'Calendar',
        name: 'startDate',
        label: 'Fecha de inicio',
        control,
        minDate: itinerary?.startDate,
        maxDate: itinerary?.endDate,
      },
      {
        key: 'Divider',
      },
      {
        key: 'Time',
        label: 'Hora de recogida',
        name: 'starTime',
        control,
      },
      {
        key: 'Divider',
      },
      {
        key: 'Calendar',
        name: 'endDate',
        label: 'Fecha de fin',
        control,
        minDate: itinerary?.startDate,
        maxDate: itinerary?.endDate,
      },
      {
        key: 'Divider',
      },
      {
        key: 'Time',
        label: 'Hora de devolución',
        name: 'starTime',
        control,
      },
      {
        key: 'Divider',
      },
    ],
    TRIP: [
      {
        key: 'Calendar',
        name: 'startDate',
        label: 'Duración de la actividad',
        control,
        minDate: itinerary?.startDate,
        maxDate: itinerary?.endDate,
      },
      {
        key: 'Divider',
      },
      {
        key: 'Time',
        label: 'Hora de comienzo',
        name: 'starTime',
        control,
      },
      {
        key: 'Divider',
      },
      {
        key: 'Input',
        name: 'name',
        label: 'Nombre de la actividad',
        placeholder: 'Ej: Coliseo',
        control,
      },
      {
        key: 'Divider',
      },
      {
        key: 'Input',
        name: 'imageUrl',
        label: 'Añade la url imagen de la actividad',
        placeholder: 'Ej: https://www.italia.com/...',
        control,
      },
      {
        key: 'Divider',
      },
      {
        key: 'TextArea',
        label: 'Descripción',
        name: 'description',
        placeholder: 'Introduce tu descripcion',
        control,
      },
    ],
    OTHER: [
      {
        key: 'Input',
        name: 'name',
        label: 'Titulo de la información',
        placeholder: 'Introduce el titulo',
        control,
      },
      {
        key: 'Divider',
      },
      {
        key: 'TextArea',
        name: 'description',
        label: 'Descripción',
        placeholder: 'Introduce tu descripcion',
        control,
      },
    ],
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col mx-4">
        <Label>Tipo de actividad</Label>
        <Controller
          name="type"
          control={control}
          render={({ field, fieldState }) => (
            <Select
              {...field}
              className="max-w-xs"
              items={TRIP}
              label="Tipo"
              placeholder="Selecciona un tipo de viaje"
              variant="bordered"
              selectedKeys={[field.value]}
              isInvalid={Boolean(fieldState.error?.message)}
              color={fieldState.error?.message ? 'danger' : 'default'}
              errorMessage={fieldState.error?.message}
              onSelectionChange={handleChange}
            >
              {(op) => <SelectItem key={op.key}>{op.label}</SelectItem>}
            </Select>
          )}
        />
      </div>
      <Divider className="mt-5" />
      <div key={type} className="flex flex-col mt-2">
        {DATA[type].map((payload) => resolverForm(payload))}
      </div>
    </div>
  );
}
