import { Divider, Skeleton } from "@nextui-org/react";

export default function CardSkeleton({ count = 1 }: { count: number }) {
  return Array(count)
    .fill(0)
    .map((__, index) => (
      <div
        className="p-3 mb-5 dark:bg-content1 shadow-medium min-h-40 rounded-xl"
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
    ));
}
