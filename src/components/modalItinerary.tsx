import {
  Button,
  DateRangePicker,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";

export default function ModalItinerary({ isOpen, onClose }) {
  return (
    <Modal size="full" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Create Itinerario
            </ModalHeader>
            <ModalBody>
              <div className="flex items-center mb-2rounded-2xl">
                <Input
                  isRequired
                  radius="full"
                  type="text"
                  label="Nombre del itinerario"
                  fullWidth={true}
                  placeholder="Introducce tu titulo del itinerario"
                />
              </div>
              <div className="flex flex-wrap w-full gap-4 md:flex-nowrap mb-2rounded-2xl">
                <DateRangePicker label="Stay duration" visibleMonths={2} />
              </div>
              <div className="flex items-center mb-2rounded-2xl">
                <Input
                  isRequired
                  radius="full"
                  type="text"
                  label="Url de la imagen"
                  fullWidth={true}
                  placeholder="Introducce tu imagen"
                />
              </div>
              <Button
                className="bg-gradient-to-r from-[#FF1CF7] to-[#b249f8] w-full h-14 mb-2"
                onPress={onClose}
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
