import { Card, Header } from "@/components";
import { subtitle, title } from "@/components/primitives";
import { getStore } from "@/utils";
import { Button, Link } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const DATA = [
  {
    title: "Vencia & Cracovia",
    image:
      "https://www.destinosbyviajesespacial.com/wp-content/uploads/2024/02/venecia-scaled.jpg",
    days: 5,
  },
  {
    title: "Bali",
    image:
      "https://media.iatiseguros.com/wp-content/uploads/2018/05/04005529/bali-que-hacer-Templo-Ulun-Danu.jpg",
    days: 15,
  },
  {
    title: "Fuerteventura",
    image:
      "https://media.vogue.es/photos/642be0fe1519629e0b3b8f42/2:3/w_2560%2Cc_limit/GettyImages-1389010492.jpg",
    days: 5,
  },
];

export default function Step1() {
  const name = getStore("name");

  const navigate = useNavigate();

  const handelPress = () => {
    navigate("/crear-itinerario");
  };

  return (
    <div className="h-[100%] flex flex-col">
      <Header name={name} />
      <div className="relative overflow-hidden text-left flex flex-col w-full px-4 mt-6 from-blue-800 to-purple-700 max-h-[100vh]">
        <h1 className={title({ weight: "light" })}>
          Explore the&nbsp; <span className={title()}>beautiful&nbsp;</span>
          <span className={title({ color: "violet" })}>word!</span>
        </h1>
        <div className="mt-6">
          <div className="flex flex-row whitespace-nowrap">
            <p className={subtitle()}>Ultimo destinos</p>
            <Link size="sm" className="mr-2 text-gray-600" href="#">
              View All
            </Link>
          </div>
          <div className="flex flex-row overflow-x-auto	gap-4 mt-4">
            {DATA.map((item, index) => (
              <Card
                title={item?.title}
                days={item.days}
                image={item.image}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="mt-6">
          <div className="flex flex-row whitespace-nowrap">
            <p className={subtitle()}>Top destinations</p>
            <Link size="sm" className="mr-2 text-gray-600" href="#">
              View All
            </Link>
          </div>
          <div className="flex flex-row overflow-x-auto	gap-4 mt-4">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <Card
                  key={index}
                  title={undefined}
                  days={null}
                  image={undefined}
                />
              ))}
          </div>
        </div>
        <Button
          radius="full"
          color="primary"
          type="submit"
          onPressStart={handelPress}
          className="bg-gradient-to-r from-[#FF1CF7] to-[#b249f8] h-14 mb-2 fixed bottom-5 w-[calc(100%-33px)]"
        >
          Create new itinerary
        </Button>
      </div>
    </div>
  );
}

/*
      <div className="relative overflow-hidden flex w-full from-blue-800 to-purple-700 max-h-[100vh] justify-around bg-[url('https://www.civitatis.com/blog/wp-content/uploads/2012/01/shutterstock_1238373562-scaled.jpg')] bg-cover bg-center">
        <div className="flex flex-col w-full">
          <Header name={name} />
          <div>
            <h1 className="text-white font-bold text-4xl font-sans">
              GoFinance
            </h1>
            <p className="text-white mt-1">
              The most popular peer to peer lending at SEA
            </p>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
      </div>

*/
