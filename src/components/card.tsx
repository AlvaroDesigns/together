import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Card,
  CardHeader,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@heroui/react";

interface CardVerticalProps {
  title: string | undefined;
  subtitle?: string;
  days?: number;
  maxHeight?: number;
  image: string | undefined;
  isDelete?: boolean;
  onDelete?: () => void;
  onClick?: () => void;
}

export default function CardVertical({
  title = "",
  subtitle,
  maxHeight = 224,
  days,
  onClick,
  onDelete,
  image,
  isDelete = false,
}: CardVerticalProps) {
  return (
    <div
      className="max-w-[900px] z-10 min-w-[200px] gap-2 grid"
      onClick={onClick}
    >
      <Card
        isFooterBlurred
        style={{ height: maxHeight }}
        className="w-full col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 flex flex-row items-start justify-between top-1">
          <div className="w-4/5">
            <h4 className="text-xl font-medium text-white/90">{title}</h4>
            {subtitle && (
              <p className="text-sm font-medium text-white/90">{subtitle}</p>
            )}
            {days && (
              <p className="font-bold uppercase text-tiny text-white/60">
                {days} días
              </p>
            )}
          </div>
          {isDelete && (
            <Popover placement="bottom" showArrow={true} shadow="md">
              <PopoverTrigger>
                <div className="flex w-1/5 h-full">
                  <EllipsisVerticalIcon className="ml-2 mr-1 text-white/90 size-[24px]" />
                </div>
              </PopoverTrigger>
              <PopoverContent>
                <div className="gap-4 px-1 py-2">
                  <div className="font-bold text-small">Eliminar Ititnerio</div>
                  <div className="text-small">
                    Estas seguro de que quieres
                    <br /> eliminar tu itinerario.
                  </div>
                  <Button
                    radius="full"
                    size="sm"
                    onPress={onDelete}
                    className="p-4 mt-2 text-white bg-primary text-small"
                  >
                    Borrar
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </CardHeader>
        <div className="relative w-full h-full overflow-hidden">
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 object-cover w-full h-full"
            fallbackSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s"
            src={image}
          />
          <div className="absolute inset-0 opacity-50 bg-gradient-to-b from-black to-transparent" />
        </div>
      </Card>
    </div>
  );
}
