import { Card, Header, ModalItinerary } from "@/components";
import { subtitle, title } from "@/components/primitives";
import { getStore } from "@/utils";
import { Button, Link, useDisclosure } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
const DATA = [
  {
    id: 1,
    title: "Vencia & Cracovia",
    image:
      "https://www.destinosbyviajesespacial.com/wp-content/uploads/2024/02/venecia-scaled.jpg",
    days: 5,
  },
  {
    id: 2,
    title: "Bali",
    image:
      "https://media.iatiseguros.com/wp-content/uploads/2018/05/04005529/bali-que-hacer-Templo-Ulun-Danu.jpg",
    days: 15,
  },
  {
    id: 3,
    title: "Fuerteventura",
    image:
      "https://media.vogue.es/photos/642be0fe1519629e0b3b8f42/2:3/w_2560%2Cc_limit/GettyImages-1389010492.jpg",
    days: 5,
  },
];

export default function Step1() {
  const name = getStore("name");
  const { onOpen, isOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  const handelPress = () => {
    onOpen();
  };

  const handelCardOnPress = ({
    title,
    days,
  }: {
    title: string;
    days: number;
  }) => {
    const formatUrl = title
      .toLowerCase()
      .replace(/ & /g, "_")
      .replace(/ /g, "_");

    navigate(`/${formatUrl}_${days}_dias`);
  };

  return (
    <div className="h-[100%] flex flex-col ">
      <Header name={name} />
      <main className="dark text-foreground bg-background relative overflow-hidden text-left flex flex-col w-full px-4 pt-6 from-blue-800 to-purple-700 max-h-[100vh]">
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
          <div className="flex flex-row gap-4 mt-4 overflow-x-auto">
            {DATA.map((item, index) => (
              <Card
                key={index}
                title={item?.title}
                days={item.days}
                image={item.image}
                onClick={() => handelCardOnPress(item)}
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
          <div className="flex flex-row gap-4 mt-4 overflow-x-auto">
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
          onPress={handelPress}
          className="bg-gradient-to-r from-[#FF1CF7] to-[#b249f8] h-14 mb-2 fixed bottom-5 w-[calc(100%-33px)]"
        >
          Create new itinerary
        </Button>
        <ModalItinerary isOpen={isOpen} onClose={onClose} />
      </main>
    </div>
  );
}
