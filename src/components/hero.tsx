import { format } from '@formkit/tempo';
import { Card, CardBody, Image, Skeleton } from '@heroui/react';
import { useTheme } from '@heroui/use-theme';

interface HeroProps {
  startDate: string | Date | undefined;
  endDate: string | Date | undefined;
  title: string | undefined;
  days: number | undefined;
  image: string | undefined;
  loading: boolean;
}

export default function Hero({
  startDate,
  endDate,
  title,
  days,
  image,
  loading = false,
}: HeroProps) {
  const { theme } = useTheme();

  return (
    <div className="relative flex flex-col w-full">
      <section className="overflow-hidden min-h-[200px] max-h-[200px]">
        <div className="absolute inset-0 z-20 opacity-50 bg-gradient-to-b from-black to-transparent" />
        <Card
          radius="none"
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-7"
        >
          <CardBody className="absolute z-30 flex flex-col items-center w-full text-center mt-7 top-1">
            {loading ? (
              <>
                <Skeleton className="w-2/5 mt-2 rounded-lg">
                  <div className="w-2/5 h-3 rounded-lg bg-default-300" />
                </Skeleton>
                <Skeleton className="w-4/5 mt-2 rounded-lg">
                  <div className="w-2/5 h-10 rounded-lg bg-default-300" />
                </Skeleton>
                <Skeleton className="w-3/5 mt-2 rounded-lg">
                  <div className="w-2/5 h-3 rounded-lg bg-default-300" />
                </Skeleton>
              </>
            ) : (
              <>
                <p className="mt-1 text-white">
                  {startDate && format(new Date(startDate), 'DD MMM YYYY')}{' '}
                  {endDate && `a ${format(new Date(endDate), 'DD MMM YYYY')}`}
                </p>
                <h1 className="font-sans text-4xl font-bold text-white">{title}</h1>
                <p className="mt-1 text-white">
                  {days && `${days} Días · A tu aire flexible`}
                </p>
              </>
            )}
          </CardBody>
          {loading ? (
            <Skeleton className="rounded-lg">
              <div className="h-64 rounded-lg bg-default-300" />
            </Skeleton>
          ) : (
            <Image
              width="100%"
              height="100%"
              className="z-0 object-cover w-full h-full -translate-y-1/2"
              alt={title}
              fallbackSrc="../../../dummy.jpg"
              src={image}
            />
          )}
        </Card>
        <div className="flex" data-height="204" data-style="curve" data-position="bottom">
          <svg
            className="absolute w-full left-0 top-[150px] h-[70px] transform rotate-180 scale-y-[-1]"
            aria-hidden="true"
            fill={theme === 'dark' ? '#000000' : '#FFFFFF'} // Cambiar el color dinámicamente
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path d="M 0 0 c 0 0 200 50 500 50 s 500 -50 500 -50 v 101 h -1000 v -100 z" />
          </svg>
        </div>
      </section>
    </div>
  );
}
