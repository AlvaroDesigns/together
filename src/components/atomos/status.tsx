import { subtitle } from "@/components/primitives";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Image } from "@nextui-org/react";

export const Status = ({
  title,
  text,
  src,
}: {
  title: string;
  text: string;
  src?: string;
}) => (
  <div className="flex flex-col items-center justify-center px-8 py-9 ">
    <div className="flex items-center justify-center">
      {src ? (
        <Image width="100%" height="auto" radius="lg" alt="Trip" src={src} />
      ) : (
        <div className="flex items-center justify-center w-20 h-20 border-2 border-[#009688] rounded-full">
          <CheckIcon className="mt-1 mr-1 text-[#009688] size-8" />
        </div>
      )}
    </div>
    <div
      className={`${subtitle({
        size: "sm",
      })} flex items-center flex-col mt-3`}
    >
      <strong className="text-[1.5rem]">{title}</strong>
      {text}
    </div>
  </div>
);
