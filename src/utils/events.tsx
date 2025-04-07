import { LITERALS } from '@/literals/common';
import { addToast } from '@heroui/react';

interface ToastProps {
  title: string;
  description?: string;
  color?:
    | 'default'
    | 'danger'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'foreground'
    | undefined;
  time?: number;
}

/* Send Event Error */
export const sendEventError = (data?: object) => {
  const errorData: ToastProps = {
    title: LITERALS.REQUEST_KO,
    description: LITERALS.REQUEST_ERROR_DESCRIPTION,
    color: 'danger',
    ...data,
  };

  return addToast(errorData);
};

/* Send Event Success */
export const sendEventSuccess = (data?: object) => {
  const eventData: ToastProps = {
    title: LITERALS.REQUEST_OK,
    color: 'success',
    ...data,
  };

  return addToast(eventData);
};
