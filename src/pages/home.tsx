import { OnBoarding } from '@/components';
import CardsActions from '@/components/Drawer/cards-actions';
import CreateItinerary from '@/components/Drawer/create-itinerary';
import SearcherHotel from '@/components/Drawer/searcher-hotel';
import { subtitle, title } from '@/components/primitives';
import SkeletonHome from '@/components/Skeletons/skeletonHome';
import { ENDPOINT } from '@/constants';

import { useFetch } from '@/hooks';
import { useProviderStore } from '@/stores/Global/store';
import { ROLES } from '@/types';
import { useEffect } from 'react';

export default function Home() {
  const { setterUser, setterHome, user } = useProviderStore();

  const STATUS_ROLE = user?.role === ROLES.ADMIN;

  const { data, isLoading } = useFetch({
    method: 'GET',
    url: `${ENDPOINT.USER}/${user.email}`,
  });

  useEffect(() => {
    if (data) {
      setterUser({
        ...user,
        name: data?.name,
        userId: data?.id,
        avatar: data?.avatar,
        role: data?.role,
        language: data?.language,
        phone: data?.phone,
      });
      setterHome({ products: data?.itinerary });
    }
  }, [data]);

  return (
    <div className="text-foreground relative overflow-hidden flex flex-col w-full px-4 pt-6 max-h-[100%] mb-6 h-[100%]">
      <h1 className={title({ weight: 'light' })}>
        Explora el&nbsp; <span className={title()}>maravilloso&nbsp;</span>
        <span className={title({ color: 'green' })}>mundo!</span>
      </h1>
      {isLoading ? (
        <SkeletonHome />
      ) : (
        <>
          <div className="flex flex-col gap-6">
            <div className="mt-6">
              <div className="flex flex-row whitespace-nowrap">
                <p className={subtitle()}>Ultimos destinos</p>
              </div>
              <CardsActions />
            </div>
            <SearcherHotel isDisabled={!STATUS_ROLE} />
          </div>
          <CreateItinerary />
          <OnBoarding />
        </>
      )}
    </div>
  );
}
