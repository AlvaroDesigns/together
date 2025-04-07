import { Stars } from '@/components/ui/stars';
import { Card, CardBody, Image } from '@heroui/react';

interface CardHotelListProps {
  name: string;
  stars: number;
  rating: number;
  image: string;
  price: number;
  currency?: string;
  address: string;
  onPress?: () => void;
}

export default function CardHotelList({
  name,
  stars,
  rating,
  image,
  price,
  currency = '€',
  address,
  onPress,
}: CardHotelListProps) {
  return (
    <div>
      <Card
        isPressable
        isFooterBlurred
        className="p-0 bg-background/60 dark:bg-default-100/50"
        shadow="sm"
        onPress={onPress}
      >
        <CardBody>
          <div className="grid items-center justify-center grid-cols-12 gap-6 md:gap-4">
            <div className="relative col-span-4">
              <Image
                alt="Album cover"
                className="object-cover"
                height={220}
                fallbackSrc="dummy.jpg"
                shadow="md"
                src={image}
                width="100%"
              />
            </div>
            <div className="flex flex-col col-span-8">
              <div className="flex items-start justify-between pb-2 dark:border-slate-200 border-b-1 dark:border-default-400/50 order-b">
                <div className="flex flex-col gap-0">
                  <h3 className="font-semibold text-foreground/90">{name}</h3>
                  <div className="flex flex-row mb-2 text-small text-foreground/80">
                    <Stars count={stars} color="Primary" />
                    <p className="ml-2 text-small">Excelente {rating}/5</p>
                  </div>
                  <p className="text-small text-foreground/80">{address}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 pt-2">
                <div className="flex flex-col justify-center w-full">
                  <p className="text-small text-foreground/50">Cancelación Gratuita</p>
                  <p className="text-small text-foreground/50">Wifi</p>
                </div>
                <div className="flex flex-row items-center justify-between w-full gap-2">
                  <div className="flex flex-col items-end w-full">
                    <div className="priceBox">
                      <div className="text-2xl font-semibold text-primary">
                        <span className="">{price}</span>
                        <span className="currencySymbol">{currency}</span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-500">
                      por noche
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
