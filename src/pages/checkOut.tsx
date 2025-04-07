import { Button, Card, CardHeader, Image, Input } from '@heroui/react';

import { RootLayout, Stars } from '@/components';
import { subtitle } from '@/components/primitives';
import { useForm } from '@/hooks';
import { useRouter } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

import { useProviderStore } from '@/stores/Global/store';
import { Controller } from 'react-hook-form';

export default function CheckOut() {
  const { user } = useProviderStore((state) => state);
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const { control, errors, handleSubmit } = useForm({
    values: undefined,
    schema: {},
  });

  useEffect(() => {
    /* Start Loading */
    setIsLoading(true);

    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <RootLayout>
      <section className="m-4">
        <Card className="w-full col-span-12 p-2 sm:col-span-7">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col items-start">
              <h2 className="text-lg font-semibold text-left text-foreground/90">
                Axor feria
              </h2>
              <div className="flex flex-col items-start mb-2 text-small text-foreground/80">
                <Stars size="Small" count={4} color="Primary" />
                <p className="my-2 text-left text-small">Excelente 5/5</p>
                <p className="text-left text-small text-foreground/80">
                  CALLE CAMPEZO, 4 MADRID
                </p>
              </div>
            </div>
            <Image
              radius="lg"
              alt="Hotel"
              height={100}
              src="https://www.kayak.es/rimg/himg/bc/6b/c3/leonardo-115223090-31_IMG_4717_O-777841.jpg?width=836&height=607&crop=true"
              width="100%"
            />
          </CardHeader>
        </Card>
      </section>
      <section className="m-4">
        <Card className="items-start w-full col-span-12 gap-4 p-4 mt-4 sm:col-span-7">
          <div className="flex flex-row whitespace-nowrap">
            <p className={subtitle({ weight: 'semibold' })}>Datos del huesped</p>
          </div>
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                isRequired
                variant="bordered"
                type="text"
                fullWidth={true}
                label="Nombre"
                isInvalid={Boolean(fieldState.error?.message)}
                color={fieldState.error?.message ? 'danger' : 'default'}
                errorMessage={fieldState.error?.message}
                value={field.value}
                classNames={{ inputWrapper: '!min-h-[60px] h-10' }}
                placeholder="Ej: Luis"
              />
            )}
          />
          <Controller
            name="surname"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                isRequired
                variant="bordered"
                type="text"
                label="Apellidos"
                fullWidth={true}
                isInvalid={Boolean(fieldState.error?.message)}
                color={fieldState.error?.message ? 'danger' : 'default'}
                errorMessage={fieldState.error?.message}
                value={field.value}
                classNames={{ inputWrapper: '!min-h-[60px] h-10' }}
                placeholder="Ej: Martinez"
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                isRequired
                variant="bordered"
                type="email"
                label="Email"
                fullWidth={true}
                isInvalid={Boolean(fieldState.error?.message)}
                color={fieldState.error?.message ? 'danger' : 'default'}
                errorMessage={fieldState.error?.message}
                value={field.value}
                classNames={{ inputWrapper: '!min-h-[60px] h-10' }}
                placeholder="Ej: luis@together.alvarodesigns.com"
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                isRequired
                variant="bordered"
                type="email"
                fullWidth={true}
                label="Email"
                startContent={
                  <div className="flex items-center">
                    <select
                      className="bg-transparent border-0 outline-none text-default-400 text-small"
                      id="currency"
                      name="currency"
                    >
                      <option>+34</option>
                      <option>+35</option>
                      <option>+36</option>
                    </select>
                  </div>
                }
                isInvalid={Boolean(fieldState.error?.message)}
                color={fieldState.error?.message ? 'danger' : 'default'}
                errorMessage={fieldState.error?.message}
                value={field.value}
                classNames={{ inputWrapper: '!min-h-[60px] h-10' }}
                placeholder="Ej: 666 121 212"
              />
            )}
          />
        </Card>
      </section>
      <section className="m-4">
        <Card className="flex items-start justify-start gap-4 p-4 mt-4 text-left">
          <div className="flex flex-row whitespace-nowrap">
            <p className={subtitle({ weight: 'semibold' })}>Detalles del pago</p>
          </div>
          <Input
            name="name"
            isRequired
            variant="bordered"
            label="Nombre de la tarjeta"
            type="text"
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
          <Input
            name="number"
            isRequired
            variant="bordered"
            label="Numero de la tarjeta"
            placeholder="1234 1234 1234 1234"
            type="number"
            onChange={(e) => setState({ ...state, number: e.target.value })}
          />
          <div className="flex flex-row gap-4">
            <Input
              name="expiry"
              isRequired
              variant="bordered"
              label="Fecha de vencimiento"
              className="w-4/6"
              placeholder="MM/YY"
              type="text"
              onChange={(e) => setState({ ...state, expiry: e.target.value })}
            />
            <Input
              name="cvc"
              isRequired
              variant="bordered"
              label="CVV"
              className="w-2/6"
              type="string"
              onChange={(e) => setState({ ...state, cvc: e.target.value })}
            />
          </div>
        </Card>
      </section>
      <section className="m-4">
        <Card className="flex items-start justify-start gap-4 p-4 mt-4 text-left">
          <div className="flex flex-row whitespace-nowrap">
            <p className={subtitle({ weight: 'semibold' })}>Términos y condiciones</p>
          </div>
          <div className="flex flex-row">
            Al enviar esta reserva, reconozco haber leído las Condiciones de uso y la
            Declaración de privacidad de Together.alvarodesigns.com, las cuales acepto.
          </div>
        </Card>
      </section>
      <section className="flex m-4">
        <Button
          radius="full"
          color="primary"
          className="bg-gradient-to-r shadow-medium z-50 text-md bg-primary text-white h-14 min-h-[60px] fixed bottom-5 w-[calc(100%-33px)] hover:border-transparent"
        >
          Confirmar Pago
        </Button>
      </section>
    </RootLayout>
  );
}
