interface LabelProps {
  children: string;
}

export const Label = ({ children }: LabelProps) => (
  <label className="mb-2 text-sm font-semibold text-gray-600">{children}</label>
);
