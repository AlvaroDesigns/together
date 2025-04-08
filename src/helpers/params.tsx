import { formatIso } from '@/utils';

export const params = (value: any) => {
  return {
    type: value.type,
    days: 0,
    departure: value?.depart?.iata,
    departureLabel: value?.depart?.cityName,
    destination: value?.arrive?.iata,
    destinationLabel: value?.arrive?.cityName,
    arrivalTime:
      value?.depart?.time && value?.arrive?.time
        ? `${value?.depart?.time}-${value?.arrive?.time}`
        : null,
    startDate: formatIso(value.startDate),
    endDate: formatIso(value?.endDate),
    stars: Number(value.stars),
    placeUrl: null,
    numberFlight: value?.numberFlight?.toUpperCase(),
    description: value?.description?.split('\n'),
    imageUrl: value?.image_url,
    cityName: value?.cityName,
    region: null,
    country: value?.country,
    name: value?.name || value?.transferName,
    collapse: false,
  };
};
