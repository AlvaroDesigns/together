import { XMarkIcon } from '@heroicons/react/24/outline';
import { Card, CardFooter, Image } from '@heroui/react';

interface CardVerticalProps {
  title: string | undefined;
  subtitle?: string;
  days?: number;
  maxHeight?: number;
  image: string | undefined;
  onDelete?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onClick?: () => void;
}

export default function CardVertical({
  title = '',
  subtitle,
  maxHeight = 224,
  days,
  onClick,
  onDelete,
  image,
}: CardVerticalProps) {
  return (
    <div className="max-w-[900px] z-10 min-w-[200px] gap-2 grid" onClick={onClick}>
      <Card
        isBlurred
        style={{ height: maxHeight }}
        className="w-full col-span-12 sm:col-span-7"
      >
        <div className="relative w-full h-full overflow-hidden">
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 object-cover w-full h-full"
            fallbackSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s"
            src={image}
          />
          <div className="absolute inset-0 opacity-50 bg-gradient-to-t from-black to-transparent" />
        </div>
        {onDelete && (
          <div
            className="absolute right-0 z-10 flex items-start justify-end pr-2 mt-2"
            onClick={onDelete}
          >
            <XMarkIcon className="m-1 size-6 text-white/90" />
          </div>
        )}
        <div className="flex flex-col items-start ">
          <CardFooter className="absolute bottom-0 z-10 flex flex-col items-start border-default-600">
            {days && <p className="uppercase text-tiny text-white/80">{days} días</p>}
            <h4 className="text-base font-medium text-white/90">{title}</h4>
            {subtitle && (
              <p className="text-base font-medium text-white/90">{subtitle}</p>
            )}
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}
