import { Header } from "@/components";
import { getStore } from "@/utils";

export default function Step2() {
  const name = getStore("name");

  return (
    <div className="h-screen flex flex-col">
      <div className="relative overflow-hidden flex w-full from-blue-800 to-purple-700 min-h-[300px] max-h-[300px] justify-around bg-[url('https://www.civitatis.com/blog/wp-content/uploads/2012/01/shutterstock_1238373562-scaled.jpg')] bg-cover bg-center">
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
    </div>
  );
}
