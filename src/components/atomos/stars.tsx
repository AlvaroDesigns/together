import { StarIcon } from "@heroicons/react/24/outline";

type StarsProps = "Small" | "Medium" | "Large";
type StarsColorsProps = "Primary" | "Gray";

const SIZES: Record<StarsProps, string> = {
  Small: "size-4",
  Medium: "size-5",
  Large: "size-6",
};

const COLORS: Record<StarsColorsProps, string> = {
  Primary: "text-primary",
  Gray: "text-gray-600",
};

export const Stars = ({
  count,
  size = "Medium",
  color = "Gray",
}: {
  count: number;
  size?: StarsProps;
  color?: StarsColorsProps;
}) => (
  <div className="flex gap-1">
    {Array.from({ length: count }, (_, i) => (
      <StarIcon key={i} className={`dark:${COLORS[color]} ${SIZES[size]}`} />
    ))}
  </div>
);

export default Stars;
