import { StarIcon } from '@heroicons/react/24/outline';

type StarsTypes = 'Small' | 'Medium' | 'Large';
type StarsColorsProps = 'Primary' | 'Gray';

const SIZES: Record<StarsTypes, string> = {
  Small: 'size-4',
  Medium: 'size-5',
  Large: 'size-6',
};

const COLORS: Record<StarsColorsProps, string> = {
  Primary: 'text-primary',
  Gray: 'text-gray-600',
};

interface StarsProps {
  count: number;
  size?: StarsTypes;
  color?: StarsColorsProps;
}

export const Stars = ({ count, size = 'Medium', color = 'Gray' }: StarsProps) => (
  <div className="flex gap-1">
    {Array.from({ length: count }, (_, i) => (
      <StarIcon key={i} className={`dark:${COLORS[color]} ${SIZES[size]}`} />
    ))}
  </div>
);

export default Stars;
