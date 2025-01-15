import { Card, CardHeader, Image } from "@nextui-org/react";

export default function CardVertical({
  title = "",
  subtitle,
  maxHeight = "240px",
  days,
  onClick,
  image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s",
}: {
  title: string | undefined;
  subtitle?: string;
  days?: number;
  maxHeight?: string;
  image: string | undefined;
  onClick?: () => void;
}) {
  return (
    <div
      className="max-w-[900px]z-[100] min-w-[200px] gap-2 grid"
      onClick={onClick}
    >
      <Card
        isFooterBlurred
        className={`w-full h-[${maxHeight}] col-span-12 sm:col-span-7`}
      >
        <CardHeader className="absolute z-10 flex-col items-start top-1">
          <h4 className="text-xl font-medium text-white/90 ">{title}</h4>
          {subtitle && (
            <p className="text-sm font-medium text-white/90 ">{subtitle}</p>
          )}
          {days && (
            <p className="font-bold uppercase text-tiny text-white/60">
              {days} días
            </p>
          )}
        </CardHeader>

        <div className="relative w-full h-full overflow-hidden">
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 object-cover w-full h-full"
            src={image}
          />
          <div className="absolute inset-0 opacity-50 bg-gradient-to-b from-black to-transparent" />
        </div>
      </Card>
    </div>
  );
}
