import { Divider, Skeleton } from "@heroui/react";

type VARIANT_TYPE_SECTION = "vertical" | "horizontal";
const VARIANT_TYPE_VERTICAL: VARIANT_TYPE_SECTION = "vertical";
const VARIANT_TYPE_HORIZONTAL: VARIANT_TYPE_SECTION = "horizontal";

export default function CardSkeleton({
  count = 1,
  variant = VARIANT_TYPE_HORIZONTAL,
}: {
  count: number;
  variant?: VARIANT_TYPE_SECTION;
}) {
  return Array.from({ length: count }).map((__, index) => {
    if (variant === VARIANT_TYPE_VERTICAL) {
      return (
        <div
          className="grid grid-cols-10 gap-4 p-3 dark:bg-content1 shadow-medium min-h-40 rounded-xl"
          key={`skeleton-${index}`}
        >
          <div className="col-span-3">
            <Skeleton className="rounded-lg">
              <div className="rounded-lg h-52 bg-default-300" />
            </Skeleton>
          </div>
          <div className="col-span-7 ">
            <div className="flex flex-col justify-center mt-1 mb-3 space-y-2 min-h-10">
              <Skeleton className="rounded-lg w-5/5">
                <div className="w-2/5 h-4 rounded-lg bg-default-300" />
              </Skeleton>
              <Skeleton className="w-4/5 rounded-lg">
                <div className="w-4/5 h-3 rounded-lg bg-default-200" />
              </Skeleton>
              <Skeleton className="w-2/5 mb-5 rounded-lg">
                <div className="w-2/5 h-3 rounded-lg bg-default-300" />
              </Skeleton>
            </div>
            <Divider />
            <div className="my-2 mt-3 space-y-3">
              <Skeleton className="w-4/5 rounded-lg">
                <div className="w-4/5 h-3 rounded-lg bg-default-200" />
              </Skeleton>
              <Skeleton className="w-2/5 rounded-lg">
                <div className="w-2/5 h-3 rounded-lg bg-default-300" />
              </Skeleton>
              <Skeleton className="w-4/5 rounded-lg">
                <div className="w-4/5 h-3 rounded-lg bg-default-200" />
              </Skeleton>
            </div>
            <div className="mt-5 space-y-2">
              <Skeleton className="rounded-lg w-5/5">
                <div className="w-4/5 h-4 rounded-lg bg-default-200" />
              </Skeleton>
              <Skeleton className="rounded-lg w-5/5">
                <div className="w-4/5 h-4 rounded-lg bg-default-200" />
              </Skeleton>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div
        className="p-3 my-7 dark:bg-content1 shadow-medium min-h-40 rounded-xl"
        key={`skeleton-${index}`}
      >
        <div className="flex flex-col justify-center min-h-10">
          <Skeleton className="w-2/5 my-2 rounded-lg">
            <div className="w-2/5 h-3 rounded-lg bg-default-300" />
          </Skeleton>
          <Divider />
        </div>
        <div className="my-2 space-y-3">
          <Skeleton className="rounded-lg w-5/5">
            <div className="w-3/5 h-6 rounded-lg bg-default-200" />
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="w-4/5 h-3 rounded-lg bg-default-200" />
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="w-2/5 h-3 rounded-lg bg-default-300" />
          </Skeleton>
        </div>
      </div>
    );
  });
}
