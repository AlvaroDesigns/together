import { Button as UIButton } from '@heroui/react';
import { PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<{
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  size?: 'sm' | 'md' | 'lg';
  startContent?: React.ReactNode;
  onPress?: () => void;
  variant?: 'solid' | 'bordered' | 'light';
}>;

export default function Btn({
  type = 'submit',
  size,
  isLoading,
  onPress,
  startContent,
  variant = 'solid',
  children,
}: ButtonProps) {
  const border =
    'border-2 rounded-lg border-primary hover:border-primary bg-transparent text-primary w-full mb-2';

  const solid =
    'bg-gradient-to-r rounded-lg shadow-medium text-md bg-primary text-white w-full hover:border-transparent';

  return (
    <UIButton
      type={type}
      radius="full"
      size={size}
      variant={variant}
      isLoading={isLoading}
      onPress={onPress}
      startContent={startContent}
      className={`${variant === 'bordered' ? border : solid} text-base`}
      style={{
        height: size ?? '56px',
        minHeight: size ?? '60px',
        fontSize: 'font-medium',
      }}
    >
      {children}
    </UIButton>
  );
}
