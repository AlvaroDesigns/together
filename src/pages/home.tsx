import { Card, OnBoarding } from '@/components';

import { subtitle, title } from '@/components/primitives';
import { ENDPOINT, ROUTES } from '@/constants';

import CreateItinerary from '@/components/Drawer/create-itinerary';
import SearcherHotel from '@/components/Drawer/searcher-hotel';
import SkeletonHome from '@/components/Skeletons/skeletonHome';
import { useFetch } from '@/hooks';
import { useProviderStore } from '@/stores/Global/store';
import { ROLES } from '@/types';
import { useRouter } from '@tanstack/react-router';
import { useEffect } from 'react';

const formatUrl = (text: string) =>
  text.toLowerCase().replace(/ & /g, '_').replace(/ /g, '_').replaceAll('-', '_');

interface ClickProps {
  title?: string;
  days?: string | number;
  id?: number;
}

interface ProductProps {
  products?: Array<{ id?: number; title?: string; days?: number; image?: string }>;
}

export default function Home() {
  const { setterUser, setterHome, user, home } = useProviderStore();
  const { products }: ProductProps = home || [];

  const router = useRouter();

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

  const handlePress = ({ title = '', days, id }: ClickProps) => {
    setterHome({ products, productId: id });

    router.navigate({
      to: `${ROUTES.ITINERARY}/$productId`,
      params: { productId: `${formatUrl(title)}_${days}_dias` },
    });
  };

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
              <div className="flex flex-row gap-4 mt-4 overflow-x-auto">
                {products?.map((item) => (
                  <Card
                    isDelete={false}
                    key={item?.id}
                    title={item?.title}
                    days={item.days}
                    image={item.image}
                    onClick={() =>
                      handlePress({
                        title: item?.title,
                        days: item?.days,
                        id: item?.id,
                      })
                    }
                  />
                ))}
              </div>
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
