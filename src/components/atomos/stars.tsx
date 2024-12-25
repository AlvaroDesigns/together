import { StarIcon } from "@heroicons/react/24/outline";

export const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: count }, (_, i) => (
      <StarIcon key={i} className="dark:text-gray-600 size-5" />
    ))}
  </div>
);
