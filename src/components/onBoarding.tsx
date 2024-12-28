import { ON_BOARDNG } from "@/constants";
import { setAuth } from "@/utils";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  Image,
} from "@nextui-org/react";
import Button from "./button";
import { title } from "./primitives";

interface OnBoardingProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onClose: () => void;
}

export default function OnBoarding({
  isOpen,
  onOpenChange,
  onClose,
}: OnBoardingProps) {
  const handleClose = () => {
    /* Set Auth */
    setAuth(ON_BOARDNG, String(true));

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
          <h1 className={title({ weight: "light" })}>
            Juntos hacemos que tus{" "}
            <span className={title({ color: "green" })}>viajes&nbsp;</span>
            <span className={title()}>sean más cómodos!</span>
          </h1>
          <p>
            Deja de tener miedo a la hora de viajar, con nuestra app podras
            tener un plan de viaje personalizado y a tu medida. Que podrás
            compartir con tus amigos y familiares.
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
