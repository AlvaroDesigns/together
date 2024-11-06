import { Card, CardHeader, Image } from "@nextui-org/react";

export default function CardVertical({
  title = "",
  days = null,
  onClick,
  image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s",
}: {
  title: string | undefined;
  days: number | null;
  image: string | undefined;
  onClick?: () => void;
}) {
  return (
    <div
      className="max-w-[900px]z-[100] min-w-[250px] gap-2 grid grid-cols-12"
      onClick={onClick}
    >
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 flex-col items-start top-1">
          <h4 className="text-xl font-medium text-white/90">{title}</h4>
          {days && (
            <p className="font-bold uppercase text-tiny text-white/60">
              {days} días
            </p>
          )}
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 object-cover w-full h-full"
          src={image}
        />
      </Card>
    </div>
  );
}
