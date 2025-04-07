import { CreateForm } from '@/components/Form/create-form';
import Btn from '@/components/ui/btn';
import DrawerCustom from '@/components/ui/drawerCustom';
import { useDisclosure } from '@heroui/react';

export default function CreateItinerary() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <>
      <div className="z-10 fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)]">
        <Btn type="submit" onPress={onOpen}>
          Crear mi plan de viaje
        </Btn>
      </div>
      <DrawerCustom
        backdrop="blur"
        placement="bottom"
        radius="lg"
        size="md"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        header="Crear Itinerario"
        body={
          <div className="flex flex-col mx-4 mb-2">
            <CreateForm onClose={onClose} />
          </div>
        }
      />
    </>
  );
}
