import { Button as NextUIButton } from "@nextui-org/react";

interface ButtonProps {
  isLoading?: boolean;
  onPress?: (e: any) => void;
  variant?: "solid" | "bordered" | "light";
  children: React.ReactNode;
}

export default function Button({
  isLoading,
  onPress,
  variant = "solid",
  children,
}: ButtonProps) {
  const border =
    "border-2 border-[#009688] bg-transparent text-[#009688] w-full h-14 min-h-[60px] mb-2";

  const solid =
    "bg-gradient-to-r text-md from-[#009688] to-[#009688] text-white h-14 w-full min-h-[60px] hover:border-transparent";

  return (
    <NextUIButton
      radius="full"
      variant={variant}
      type="submit"
      isLoading={isLoading}
      onPress={onPress}
      className={variant === "bordered" ? border : solid}
    >
      {children}
    </NextUIButton>
  );
}
