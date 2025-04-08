import { Card } from '@/components';
import DrawerCustom from '@/components/ui/drawerCustom';
import { ENDPOINT, ROUTES } from '@/constants';
import Services from '@/services';
import { useProviderStore } from '@/stores/Global/store';
import { productFilterItemId } from '@/utils';
import { sendEventError, sendEventSuccess } from '@/utils/events';
import { PencilIcon, ShareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { CircularProgress, Listbox, ListboxItem, useDisclosure } from '@heroui/react';
import { useRouter } from '@tanstack/react-router';
import { AxiosResponse } from 'axios';
import { useState, useTransition } from 'react';

interface ClickProps {
  title?: string;
  days?: string | number;
  id?: number;
}

interface ProductProps {
  products?: Array<{ id?: number; title?: string; days?: number; image?: string }>;
}

const formatUrl = (text: string) =>
  text.toLowerCase().replace(/ & /g, '_').replace(/ /g, '_').replaceAll('-', '_');

export default function CardsActions() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [isId, setId] = useState<number | undefined>(undefined);
  const { home, setterHome } = useProviderStore();

  const { products }: ProductProps = home || [];

  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handlePress = ({ title = '', days, id }: ClickProps) => {
    setterHome({ products, productId: id });

    router.navigate({
      to: `${ROUTES.ITINERARY}/$productId`,
      params: { productId: `${formatUrl(title)}_${days}_dias` },
    });
  };

  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number | undefined,
  ) => {
    e.stopPropagation();
    setId(id);
    onOpen();
  };
  const product = productFilterItemId(Number(isId), products);
  const handleDeleteItinerary = () => {
    startTransition(async () => {
      await Services({
        method: 'DELETE',
        url: `${ENDPOINT.ITINERARY}/${isId}`,
      })
        .then((res: AxiosResponse) => {
          const { status } = res || {};

          if (status !== 200) return sendEventError();

          setterHome({ products: product });

          sendEventSuccess();
        })
        .catch(() => sendEventError())
        .finally(() => onClose());
    });
  };

  return (
    <>
      <div className="flex flex-row gap-4 mt-4 overflow-x-auto">
        {products?.map((item) => (
          <Card
            key={item?.id}
            title={item?.title}
            days={item.days}
            image={item.image}
            onDelete={(e) => handleDelete(e, item?.id)}
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
      <DrawerCustom
        backdrop="blur"
        placement="bottom"
        radius="lg"
        size="md"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        header="Crear Itinerario"
        body={
          <div className="flex flex-col mx-2 mb-2">
            <Listbox
              aria-label="Options cards"
              disabledKeys={['edit', 'share']}
              onAction={handleDeleteItinerary}
            >
              <ListboxItem key="share">
                <div className="flex flex-row items-center">
                  <ShareIcon className="mr-2 size-4" />
                  <p>Compartir</p>
                </div>
              </ListboxItem>
              <ListboxItem key="edit">
                <div className="flex flex-row items-center">
                  <PencilIcon className="mr-2 size-4" />
                  <p>Editar</p>
                </div>
              </ListboxItem>
              <ListboxItem key="remove" className="hover:bg-transparent">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center">
                    <TrashIcon className="mr-2 size-4" />
                    <p>Eliminar</p>
                  </div>
                  {isPending && <CircularProgress aria-label="Loading..." size="sm" />}
                </div>
              </ListboxItem>
            </Listbox>
          </div>
        }
      />
    </>
  );
}
