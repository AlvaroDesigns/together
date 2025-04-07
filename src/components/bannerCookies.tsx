import { COOKIES_ACCEPTED, COOKIES_REJECTED, COOKIES_SELECTED } from '@/constants';
import { Image, Switch, useDisclosure } from '@heroui/react';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Btn from './ui/btn';
import DrawerCustom from './ui/drawerCustom';

const BannerCookies = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [cookies, setCookie] = useCookies([
    COOKIES_ACCEPTED,
    COOKIES_SELECTED,
    COOKIES_REJECTED,
  ]);

  useEffect(() => {
    const hasCookies = Object.keys(cookies).length > 0;

    if (!hasCookies) {
      onOpen();
    }
  }, []);

  const handleAcceptAll = () => {
    setCookie(COOKIES_ACCEPTED, true);
    setCookie(COOKIES_SELECTED, false);
    setCookie(COOKIES_REJECTED, false);
    /* Close */
    onClose();
  };

  const handleSelected = () => {
    setCookie(COOKIES_ACCEPTED, false);
    setCookie(COOKIES_SELECTED, true);
    setCookie(COOKIES_REJECTED, false);

    /* Close */
    onClose();
  };

  const handleRejectAll = () => {
    setCookie(COOKIES_ACCEPTED, false);
    setCookie(COOKIES_SELECTED, false);
    setCookie(COOKIES_REJECTED, true);

    /* Close */
    onClose();
  };

  return (
    <DrawerCustom
      backdrop="blur"
      placement="bottom"
      radius="lg"
      size="md"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      header="Crear Itinerario"
      body={
        <div className="fixed inset-x-0 bottom-0 z-60">
          <div className="p-4 bg-white border border-gray-200 sm:p-6 shadow-2xs dark:bg-neutral-900 dark:border-neutral-800">
            <div className="max-w-[85rem] mx-auto">
              <div className="grid items-center gap-5 lg:grid-cols-4 xl:grid-cols-5">
                <div className="col-span-1">
                  <a href="../index.html" className="flex-none inline-block">
                    <Image
                      removeWrapper
                      alt="together"
                      className="z-0 object-cover w-32 h-full"
                      src="../../logo.png"
                    />
                  </a>
                </div>

                <div className="lg:col-span-3">
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Nosotros usamos cookies
                  </h2>
                  <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                    Utilizamos cookies para personalizar el contenido y los anuncios,
                    ofrecer funciones de redes sociales y analizar nuestro tráfico.
                    También compartimos información sobre el uso que hace de nuestro sitio
                    con nuestros socios de redes sociales, publicidad y análisis, quienes
                    pueden combinarla con otra información que les haya proporcionado o
                    que hayan recopilado a partir del uso que usted hace de sus servicios.
                  </p>
                  <div className="flex flex-col gap-3 mt-5 md:flex-row md:items-center">
                    <div className="flex items-center justify-between w-full md:justify-start">
                      <Switch defaultSelected isDisabled>
                        Técnicas
                      </Switch>
                    </div>

                    <div className="flex items-center justify-between w-full md:justify-start">
                      <Switch>Funcionales</Switch>
                    </div>

                    <div className="flex items-center justify-between w-full md:justify-start">
                      <Switch>Análisis</Switch>
                    </div>
                    <div className="flex items-center justify-between w-full md:justify-start">
                      <Switch>Publicitarias</Switch>
                    </div>
                  </div>
                </div>

                <div className="col-start-2 col-span-full xl:col-start-5 xl:col-span-1">
                  <div className="grid sm:grid-cols-3 xl:grid-cols-1 gap-y-2 sm:gap-y-0 sm:gap-x-5 xl:gap-y-2 xl:gap-x-0">
                    <Btn size="sm" onPress={handleAcceptAll}>
                      Aceptar todas
                    </Btn>
                    <Btn size="sm" variant="bordered" onPress={handleSelected}>
                      Aceptar selecionadas
                    </Btn>
                    <Btn size="sm" variant="bordered" onPress={handleRejectAll}>
                      Rechazar
                    </Btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default BannerCookies;
