import { Button, Label } from "@/components";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useState } from "react";
import SectionForm from "./form/sectionForm";

// eslint-disable-next-line react-refresh/only-export-components
export const trip = [
  { key: "flight", label: "Vuelo" },
  { key: "hotel", label: "Hotel" },
  { key: "transfer", label: "Transfer" },
  { key: "trip", label: "Actividad" },
  { key: "rent", label: "Rent a car" },
];

interface DrawerFromProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export default function DrawerFrom({ isOpen, onOpenChange }: DrawerFromProps) {
  const [selected, setSelected] = useState("");
  console.log("selected", isOpen);
  return (
    <>
      <Drawer
        isOpen={isOpen}
        size="xs"
        backdrop="blur"
        radius="none"
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1 mb-2 border-b">
                Configura tu viaje
              </DrawerHeader>
              <DrawerBody className="px-0">
                <div className="flex flex-col mx-4">
                  <Label>Tipo de actividad</Label>
                  <Select
                    className="max-w-xs"
                    items={trip}
                    label="Tipo"
                    placeholder="Selecciona un tipo de viaje"
                    variant="bordered"
                    value={selected}
                  >
                    {(animal) => (
                      <SelectItem onPress={() => setSelected(animal.key)}>
                        {animal.label}
                      </SelectItem>
                    )}
                  </Select>
                </div>
                <SectionForm variant={selected} />
              </DrawerBody>
              <DrawerFooter>
                <Button onPress={onClose}>Guardar Actividad</Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
