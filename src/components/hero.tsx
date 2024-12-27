import { format } from "@formkit/tempo";
import { Card, CardBody, Image } from "@nextui-org/react";

export default function Hero({
  startDate,
  endDate,
  title,
  days,
  image,
  loading = false,
}: {
  startDate: string | Date | undefined;
  endDate: string | Date | undefined;
  title: string | undefined;
  days: number | undefined;
  image: string | undefined;
  loading: boolean;
}) {
  return (
    <section className="relative overflow-hidden flex flex-col justify-start w-full min-h-[250px] max-h-[250px]">
      <div className="absolute inset-0 z-20 opacity-50 bg-gradient-to-b from-black to-transparent" />
      <Card
        radius="none"
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardBody className="absolute z-30 flex flex-col items-center w-full mt-9 top-1">
          <p className="mt-1 text-white">
            {startDate && format(new Date(startDate), "DD MMM YYYY")}{" "}
            {endDate && `a ${format(new Date(endDate), "DD MMM YYYY")}`}
          </p>
          <h1 className="font-sans text-4xl font-bold text-white">{title}</h1>
          <p className="mt-1 text-white">{days} Días · A tu aire flexible</p>
        </CardBody>
        <Image
          removeWrapper
          isLoading={loading}
          radius="none"
          alt="Relaxing app background"
          className="z-0 object-cover w-full h-full"
          src={image}
        />
      </Card>
    </section>
  );
}
