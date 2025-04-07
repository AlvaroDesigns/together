import { Button as UIButton } from '@heroui/react';
import { PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren<{
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  startContent?: React.ReactNode;
  onPress?: () => void;
  variant?: 'solid' | 'bordered' | 'light';
}>;

export default function Button({
  type = 'submit',
  isLoading,
  onPress,
  startContent,
  variant = 'solid',
  children,
}: ButtonProps) {
  const border =
    'border-2 border-primary hover:border-primary bg-transparent text-primary w-full h-14 min-h-[60px] mb-2';

  const solid =
    'bg-gradient-to-r shadow-medium text-md bg-primary text-white h-14 w-full min-h-[60px] hover:border-transparent';

  return (
    <UIButton
      type={type}
      radius="full"
      variant={variant}
      isLoading={isLoading}
      onPress={onPress}
      startContent={startContent}
      className={`${variant === 'bordered' ? border : solid} text-medium`}
    >
      {children}
    </UIButton>
  );
}
