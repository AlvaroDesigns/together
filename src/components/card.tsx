import { Card, CardHeader, Image } from "@nextui-org/react";

export default function CardVertical({
  title = "",
  days = null,
  image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s",
}: {
  title: string | undefined;
  days: number | null;
  image: string | undefined;
}) {
  return (
    <div className="max-w-[900px] min-w-[250px] gap-2 grid grid-cols-12">
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <h4 className="text-white/90 font-medium text-xl">{title}</h4>
          {days && (
            <p className="text-tiny text-white/60 uppercase font-bold">
              {days} días
            </p>
          )}
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={image}
        />
      </Card>
    </div>
  );
}
