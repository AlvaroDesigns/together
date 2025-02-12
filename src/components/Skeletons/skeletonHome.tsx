import { Skeleton } from "@heroui/react";
import { subtitle } from "../primitives";

const SkeletonHome = () => {
  return (
    <>
      <RenderCards title="Ultimos destinos" />
      <div className="p-3 border bg-conten1 dark:border-gray-700 min-h-48 rounded-xl">
        <div className="flex flex-col justify-center min-h-10">
          <Skeleton className="rounded-lg" isLoaded={false}>
            <div className="rounded-lg w-5/5 h-28 bg-default-300" />
          </Skeleton>
        </div>
        <div className="my-3 space-y-3">
          <Skeleton className="w-3/5 rounded-lg">
            <div className="w-3/5 h-3 rounded-lg bg-default-200" />
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="w-4/5 h-3 rounded-lg bg-default-200" />
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="w-2/5 h-3 rounded-lg bg-default-300" />
          </Skeleton>
        </div>
      </div>
      <RenderCards title="Top destinos" />
    </>
  );
};

const RenderCards = ({ title }: { title: string }) => {
  return (
    <section className="flex flex-col mt-6">
      <div className="flex flex-row whitespace-nowrap">
        <p className={subtitle()}>{title}</p>
      </div>
      <div className="flex flex-row gap-4 mt-4 overflow-x-auto">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            className="p-3 mb-5 bg-conten1 border dark:border-gray-700 min-h-56 rounded-xl w-[200px] min-w-[200px]"
            key={`skeleton-${index}`}
          >
            <div className="flex flex-col justify-center min-h-10">
              <Skeleton className="rounded-lg" isLoaded={false}>
                <div className="rounded-lg h-28 bg-default-300" />
              </Skeleton>
            </div>
            <div className="my-3 space-y-3">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="w-3/5 h-3 rounded-lg bg-default-200" />
              </Skeleton>
              <Skeleton className="w-4/5 rounded-lg">
                <div className="w-4/5 h-3 rounded-lg bg-default-200" />
              </Skeleton>
              <Skeleton className="w-2/5 rounded-lg">
                <div className="w-2/5 h-3 rounded-lg bg-default-300" />
              </Skeleton>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkeletonHome;
