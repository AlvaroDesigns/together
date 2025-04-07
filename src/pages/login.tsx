import { LoginForm } from '@/components/Form/login-form';
import { ROUTES } from '@/constants';
import { Image } from '@heroui/react';
import { useNavigate } from '@tanstack/react-router';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex items-center justify-center flex-1">
          <div className="w-full md:max-w-xs">
            <div className="flex justify-center w-full mb-5">
              <Image
                removeWrapper
                alt="together"
                height={40}
                className="z-0 object-cover"
                src="../../logo.png"
                onClick={() => navigate({ to: ROUTES.HOME_B2C })}
              />
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="/unnamed-min.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
