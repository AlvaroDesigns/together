import { SunIcon } from '@heroicons/react/24/outline';
import { Card, CardBody } from '@heroui/react';

interface CardWeatherProps {
  humidity: number;
  isActive: boolean;
  max?: number | null;
  min?: number | null;
  mt?: string | number;
  mb?: string | number;
  ml?: string | number;
  mr?: string | number;
}

export default function CardWeather({
  humidity,
  max,
  min,
  isActive,
  mt,
  mb,
  ml,
  mr,
}: CardWeatherProps) {
  if (!isActive) {
    return <></>;
  }

  return (
    <Card
      isFooterBlurred
      className="w-full col-span-12 sm:col-span-7"
      style={{
        marginTop: mt,
        marginBottom: mb,
        marginLeft: ml,
        marginRight: mr,
      }}
    >
      <CardBody className="flex flex-row items-center justify-between pt-0 mt-3">
        <div className="flex flex-row items-center">
          <svg
            fill="#009688"
            width="20px"
            height="20px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path d="M28 5.25h-1.25v-3.25c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 3.25h-18.5v-3.25c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 3.25h-1.25c-1.518 0.002-2.748 1.232-2.75 2.75v19.998c0.002 1.518 1.232 2.748 2.75 2.75h24c1.518-0.002 2.748-1.232 2.75-2.75v-19.998c-0.002-1.518-1.232-2.748-2.75-2.75h-0zM4 6.75h24c0.69 0.001 1.249 0.56 1.25 1.25v3.25h-26.5v-3.25c0.001-0.69 0.56-1.249 1.25-1.25h0zM28 29.248h-24c-0.69-0.001-1.249-0.56-1.25-1.25v-15.248h26.5v15.248c-0.001 0.69-0.56 1.249-1.25 1.25h-0z" />
          </svg>
          Hoy
        </div>
        <div className="flex flex-row items-center">
          <svg
            fill="none"
            width="24px"
            height="24px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-1.5"
          >
            <path
              d="M12 21.5C16.1012 21.5 19.5 18.4372 19.5 14.5714C19.5 12.1555 18.2672 9.71249 16.8732 7.70906C15.4698 5.69214 13.8515 4.04821 12.9778 3.21778C12.4263 2.69364 11.5737 2.69364 11.0222 3.21779C10.1485 4.04821 8.53016 5.69214 7.1268 7.70906C5.73282 9.71249 4.5 12.1555 4.5 14.5714C4.5 18.4372 7.8988 21.5 12 21.5Z"
              stroke="#009688"
            />{' '}
            <path
              d="M12 18C11.4747 18 10.9546 17.8965 10.4693 17.6955C9.98396 17.4945 9.54301 17.1999 9.17157 16.8284C8.80014 16.457 8.5055 16.016 8.30448 15.5307C8.10346 15.0454 8 14.5253 8 14"
              stroke="#009688"
              strokeLinecap="round"
            />
          </svg>
          {Math.round(humidity)}%
        </div>
        <div className="flex flex-row items-center">
          <SunIcon className="mr-1 text-primary size-5" />
          {Math.round(Number(min))} °C / {Math.round(Number(max))} °C
        </div>
      </CardBody>
    </Card>
  );
}
