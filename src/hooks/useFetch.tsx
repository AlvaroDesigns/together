import Services from '@/services';
import { useQuery } from '@tanstack/react-query';

type ServicesType = 'POST' | 'GET' | 'PATCH' | 'DELETE';
interface FetchProps {
  method: ServicesType;
  url: string;
  payload?: object;
}

const fetchUserData = async (
  method: FetchProps['method'],
  url: FetchProps['url'],
  payload?: FetchProps['payload'],
) => {
  try {
    const response = await Services({
      method,
      url,
      payload,
    });

    if (!response || response.status !== 200) {
      throw new Error('Error fetching user data');
    }

    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const useFetch = ({
  method = 'GET',
  url,
  payload,
  id,
}: {
  method: FetchProps['method'];
  url: FetchProps['url'];
  payload?: FetchProps['payload'];
  id?: number | string;
}) => {
  return useQuery({
    queryKey: [method, url, payload], // Clave única para la caché
    queryFn: () => fetchUserData(method, url, payload),
    enabled: !id,
    staleTime: 1000 * 60 * 5, // Mantiene los datos en caché durante 5 minutos
    retry: 1, // Reintenta 2 veces si falla
  });
};
