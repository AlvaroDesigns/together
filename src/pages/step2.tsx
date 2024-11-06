import { Header } from "@/components";
import { subtitle, title } from "@/components/primitives";
import { getStore } from "@/utils";
import { Image, Link } from "@nextui-org/react";

const DATA = {
  id: 1,
  title: "Venecia & Cracovia",
  image:
    "https://www.destinosbyviajesespacial.com/wp-content/uploads/2024/02/venecia-scaled.jpg",
  days: 5,
  startDate: "02/12/2025",
  endDate: "07/12/2025",
  items: [
    {
      type: "flight",
      startDate: "02/12/2025",
      endDate: null,
      departure: "Palma de Mallorca",
      destination: "Venecia",
      numberFlight: "FR6582",
      description: null,
    },
    {
      type: "hotel",
      startDate: "02/12/2025",
      endDate: "04/12/2025",
      departure: null,
      destination: "Hotel Grupotel venecia",
      stars: 4,
      placeUrl: "https://maps.app.goo.gl/fWerGuUjndoxBjpP8",
      numberFlight: null,
      description: [
        "Este hotel esta en el centro y el hora de check-in es a las 12:00h",
      ],
    },
    {
      type: "flight",
      startDate: "04/12/2025",
      endDate: null,
      departure: "Venecia",
      destination: "Kraków",
      numberFlight: "FR2028",
      description: null,
    },
    {
      type: "hotel",
      startDate: "04/12/2025",
      endDate: "07/12/2025",
      departure: null,
      destination: "Hotel Grupotel venecia",
      stars: 4,
      placeUrl: "https://maps.app.goo.gl/fWerGuUjndoxBjpP8",
      numberFlight: null,
      description: [
        "Este hotel esta en el centro y el hora de check-in es a las 12:00h",
      ],
    },
    {
      type: "flight",
      startDate: "07/12/2025",
      endDate: null,
      departure: "Kraków",
      destination: "Malaga",
      numberFlight: "FR2028",
      description: null,
    },
    {
      type: "flight",
      startDate: "07/12/2025",
      endDate: null,
      departure: "Malaga",
      destination: "Palma de Mallorca",
      numberFlight: "FR2028",
      description: null,
    },
  ],
};

export default function Step2() {
  const name = getStore("name");

  return (
    <div className="flex flex-col h-screen">
      <section className="relative overflow-hidden flex w-full from-blue-800 to-purple-700 min-h-[250px] max-h-[250px] justify-around bg-[url('https://www.civitatis.com/blog/wp-content/uploads/2012/01/shutterstock_1238373562-scaled.jpg')] bg-cover bg-center">
        <div className="flex flex-col w-full">
          <Header name={name} />
          <div className="mt-12">
            <p className="mt-1 text-white">
              {DATA.startDate} {DATA.endDate && `to ${DATA.endDate}`}
            </p>
            <h1 className="font-sans text-4xl font-bold text-white">
              {DATA.title}
            </h1>
            <p className="mt-1 text-white">
              {DATA.days} Días · A tu aire flexible
            </p>
          </div>
        </div>
      </section>
      <div
        className="h-[270px] z-[1000] mb-6 flex"
        data-height="250"
        data-front=""
        data-style="curve"
        data-position="bottom"
      >
        <svg
          className="absolute w-full left-0 top-[220px] h-[5%] transform rotate-180 scale-y-[-1]"
          aria-hidden="true"
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path d="M 0 0 c 0 0 200 50 500 50 s 500 -50 500 -50 v 101 h -1000 v -100 z" />
        </svg>
      </div>
      <section className="relative text-gray-500 border-gray-200 border-s dark:border-gray-700 dark:text-gray-400 mx-7">
        {DATA.items.map((item, index) => (
          <div className="mb-10 ms-6" key={index}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-gradient-to-r from-[#FF1CF7] to-[#b249f8] rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-red-900">
              <svg
                className="w-3.5 h-3.5 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            </span>
            <div className="flex flex-col">
              <p className={`${subtitle({ size: "sm" })} flex items-center`}>
                DÍA 1
              </p>
              <p className={`${subtitle({ size: "sm" })} flex items-center`}>
                {item.startDate} {item.endDate && `to ${item.endDate}`}
                {item.numberFlight && (
                  <div className="flex items-center ml-6">
                    <Image
                      width={25}
                      height={25}
                      alt="AIR company"
                      src="https://cdn.logitravel.com/webmobile/vuelos/images/logo_FR.png"
                    />
                    <Link
                      isBlock
                      showAnchorIcon
                      target="_blank"
                      href={`https://www.google.com/search?q=${item.numberFlight?.substring(
                        0,
                        2
                      )}+flight+${item.numberFlight?.substring(2)}`}
                      color="foreground"
                    >
                      {item.numberFlight}
                    </Link>
                  </div>
                )}
              </p>
              <p className={`${title({ size: "xs" })} flex items-start`}>
                {item.departure && `${item.departure} to`} {item.destination}{" "}
                {item.type === "hotel" && `${item.stars}*`}
              </p>
              {item.placeUrl && (
                <Link
                  isBlock
                  showAnchorIcon
                  className="px-0"
                  target="_blank"
                  href={item.placeUrl}
                  color="foreground"
                >
                  Enlace a Google Maps
                </Link>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
