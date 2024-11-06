import {
  Button,
  DateRangePicker,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";

export default function ModalItinerary({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} placement="bottom-center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Create Itinerario
            </ModalHeader>
            <ModalBody>
              <div className="flex items-center mb-2 rounded-2xl">
                <Input
                  isRequired
                  radius="full"
                  type="text"
                  classNames={{
                    inputWrapper: "min-h-[60px]",
                  }}
                  label="Nombre del itinerario"
                  fullWidth={true}
                  placeholder="Introducce tu titulo del itinerario"
                />
              </div>
              <div className="flex flex-wrap w-full mb-2 md:flex-nowrap rounded-2xl">
                <DateRangePicker
                  isRequired
                  radius="full"
                  label="Fecha del viaje"
                  classNames={{
                    inputWrapper: "min-h-[60px]",
                  }}
                  visibleMonths={2}
                />
              </div>
              <div className="flex items-center mb-3 rounded-2xl">
                <Input
                  isRequired
                  radius="full"
                  type="text"
                  classNames={{
                    inputWrapper: "min-h-[60px]",
                  }}
                  label="Url de la imagen"
                  fullWidth={true}
                  placeholder="Introducce tu imagen"
                />
              </div>
              <Button
                radius="full"
                color="primary"
                type="submit"
                onPress={onClose}
                className="bg-gradient-to-r from-[#FF1CF7] to-[#b249f8] h-14 min-h-[60px] hover:border-transparent"
              >
                Save Itinerary
              </Button>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
