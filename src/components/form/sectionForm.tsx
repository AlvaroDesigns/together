import {
  DatePicker,
  DateRangePicker,
  Divider,
  Input,
  Radio,
  RadioGroup,
  Textarea,
} from "@nextui-org/react";

import { Label, Stars } from "@/components";

interface SectionFormProps {
  isLoading?: boolean;
  onPress?: (e: any) => void;
  variant: "flight" | "transfer" | "hotel" | "trip" | "rent" | "";
}

export default function SectionForm({ variant }: SectionFormProps) {
  return (
    <div className="flex flex-col gap-1">
      {variant === "flight" && (
        <>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Fecha de salida</Label>
            <DatePicker
              variant="bordered"
              label=" "
              className="max-w-[284px]"
              classNames={{ inputWrapper: "!min-h-[60px] h-10" }}
            />
          </div>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Numero de vuelo</Label>
            <Input
              type="text"
              placeholder="Ejem: FR1234"
              variant="bordered"
              classNames={{ inputWrapper: "!min-h-[60px] h-10" }}
            />
          </div>
        </>
      )}
      {variant === "transfer" && (
        <>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Fecha del servicio</Label>
            <DatePicker
              variant="bordered"
              className="max-w-[284px]"
              label=" "
            />
          </div>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Nombre del Servicio</Label>
            <Input
              type="text"
              variant="bordered"
              placeholder="Ejem: Taxi Aeropuerto de Treviso"
              classNames={{ inputWrapper: "!min-h-[60px] h-10" }}
            />
          </div>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Fecha de entrada</Label>
            <Textarea
              className="max-w-xs"
              variant="bordered"
              placeholder="Enter tu descripcion"
            />
          </div>
        </>
      )}
      {variant === "hotel" && (
        <>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Fecha de entrada</Label>
            <DatePicker
              label=" "
              variant="bordered"
              className="max-w-[284px]"
            />
          </div>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Fecha de salida</Label>
            <DatePicker
              label=" "
              variant="bordered"
              className="max-w-[284px]"
            />
          </div>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Nombre del hotel</Label>
            <Input
              type="text"
              variant="bordered"
              placeholder="Ejem: Hotel Roma"
              classNames={{ inputWrapper: "!min-h-[60px] h-10" }}
            />
          </div>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Categoría</Label>
            <RadioGroup>
              <Radio value="one">
                <Stars count={1} />
              </Radio>
              <Radio value="two">
                <Stars count={2} />
              </Radio>
              <Radio value="three">
                <Stars count={3} />
              </Radio>
              <Radio value="four">
                <Stars count={4} />
              </Radio>
              <Radio value="five">
                <Stars count={5} />
              </Radio>
              <Radio value="none">Sin categoría</Radio>
            </RadioGroup>
          </div>

          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Ciudad</Label>
            <Input
              type="text"
              placeholder="Ejem: Roma"
              variant="bordered"
              classNames={{ inputWrapper: "!min-h-[60px] h-10" }}
            />
          </div>

          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>País</Label>
            <Input
              type="text"
              placeholder="Ejem: Italia"
              variant="bordered"
              classNames={{ inputWrapper: "!min-h-[60px] h-10" }}
            />
          </div>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Descripcion</Label>
            <Textarea
              className="max-w-xs"
              variant="bordered"
              placeholder="Enter tu descripcion"
              classNames={{ inputWrapper: "!min-h-[60px] h-10" }}
            />
          </div>
        </>
      )}
      {variant === "trip" && (
        <>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Fecha de la actividad</Label>
            <DatePicker
              variant="bordered"
              className="max-w-[284px]"
              label=" "
            />
          </div>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Nombre de la actividad</Label>
            <Input
              type="text"
              variant="bordered"
              placeholder="Ejem: Italia"
              classNames={{ inputWrapper: "!min-h-[60px] h-10" }}
            />
          </div>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Url imagen de la actividad</Label>
            <Input
              type="url"
              variant="bordered"
              placeholder="Ejem: https://www.italia.com/..."
              classNames={{ inputWrapper: "!min-h-[60px] h-10" }}
            />
          </div>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Duración de la actividad</Label>
            <DateRangePicker
              hideTimeZone
              variant="bordered"
              label=" "
              visibleMonths={2}
            />
          </div>
          <Divider className="mt-5 mb-3" />
          <div className="flex flex-col mx-4">
            <Label>Descripcion</Label>
            <Textarea
              className="max-w-xs"
              variant="bordered"
              placeholder="Enter tu descripcion"
            />
          </div>
        </>
      )}
    </div>
  );
}
