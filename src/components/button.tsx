import { Button as UIButton } from "@heroui/react";

interface ButtonProps {
  isLoading?: boolean;
  startContent?: React.ReactNode;
  onPress?: () => void;
  variant?: "solid" | "bordered" | "light";
  children: React.ReactNode;
}

export default function Button({
  isLoading,
  onPress,
  startContent,
  variant = "solid",
  children,
}: ButtonProps) {
  const border =
    "border-2 border-primary hover:border-primary bg-transparent text-primary w-full h-14 min-h-[60px] mb-2";

  const solid =
    "bg-gradient-to-r shadow-medium text-md bg-primary text-white h-14 w-full min-h-[60px] hover:border-transparent";

  return (
    <UIButton
      radius="full"
      variant={variant}
      type="submit"
      isLoading={isLoading}
      onPress={onPress}
      startContent={startContent}
      className={`${variant === "bordered" ? border : solid} text-medium`}
    >
      {children}
    </UIButton>
  );
}
