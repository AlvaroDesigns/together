import Button from '@/components/button';
import { title } from '@/components/primitives';
import { ON_BOARDNG } from '@/constants';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  Image,
  useDisclosure,
} from '@heroui/react';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

export default function OnBoarding() {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [cookies, setCookie] = useCookies([ON_BOARDNG]);

  useEffect(() => {
    const hasOnBoardding = cookies[ON_BOARDNG] || false;
    if (!hasOnBoardding) {
      onOpen();
    }
  }, []);

  const handleClose = () => {
    /* Set Auth */
    const expirationDate = new Date();

    expirationDate.setDate(expirationDate.getDate() + 60);
    setCookie(ON_BOARDNG, true, { expires: expirationDate });

    /* Close */
    onClose();
  };

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      backdrop="blur"
      size="full"
      hideCloseButton
      onOpenChange={onOpenChange}
    >
      <DrawerContent>
        <DrawerBody>
          <div className="flex items-center justify-center w-full pt-4">
            <Image
              alt="onboarding"
              fallbackSrc="https://via.placeholder.com/300x200"
              className="w-full aspect-square"
              height={400}
              src="../../on_bording.png"
            />
          </div>
          <h1 className={title({ weight: 'light' })}>
            Juntos hacemos que tus{' '}
            <span className={title({ color: 'green' })}>viajes&nbsp;</span>
            <span className={title()}>sean más cómodos!</span>
          </h1>
          <p>
            Deja de tener miedo a la hora de viajar, con nuestra app podras tener un plan
            de viaje personalizado y a tu medida. Que podrás compartir con tus amigos y
            familiares.
          </p>
        </DrawerBody>
        <DrawerFooter>
          <Button variant="light" onPress={handleClose}>
            Siguiente
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
