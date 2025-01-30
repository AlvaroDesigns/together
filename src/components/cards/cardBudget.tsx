import { TRIP_LITERAL } from "@/data";
import { countries } from "@/data/currency";
import { budgetSchema } from "@/helpers/schema";
import { useForm } from "@/hooks";
import { capitalCase } from "@/utils";
import { PlusIcon } from "@heroicons/react/24/outline";
import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  CardHeader,
  Form,
  Input,
  Link,
  Select,
  SelectItem,
  useDisclosure,
} from "@heroui/react";
import { useCallback, useState } from "react";
import { Controller } from "react-hook-form";
import { toast, Toaster } from "sonner";
import Button from "../button";
import DrawerCustom from "../drawerCustom";
import { subtitle, title } from "../primitives";

interface Option {
  name: string;
  numberFlight: string;
  type: keyof typeof TRIP_LITERAL;
}

export default function CardBudget({ options = [] }: { options: Option[] }) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [budgets, setBudgets] = useState<
    Array<{ expensive: number; types: string[] }>
  >([{ expensive: 35, types: ["Vuelo", "IB1679"] }]);

  const { control, handleSubmit } = useForm({
    values: {},
    schema: budgetSchema,
  });

  const formatter = (data: any[]) => {
    return data?.map((ex) => {
      const type = TRIP_LITERAL[ex.type as keyof typeof TRIP_LITERAL];

      return {
        label: `${type} - ${ex.type === "FLIGHT" ? ex.numberFlight : ex.name}`,
        key: `${type} - ${ex.type === "FLIGHT" ? ex.numberFlight : ex.name}`,
        id: `${ex.name}-${ex.startDate}`,
      };
    });
  };

  const onSubmit = useCallback(
    (data: any) => {
      const newBudget = {
        expensive: Number(data.expensive),
        types: data.types?.split(" - "),
      };

      setBudgets([...budgets, newBudget]);
      onClose();
      setTimeout(() => {
        toast.success(`Se ha añadido tu gasto correctamente`, {
          duration: 5000,
        });
      });
    },
    [budgets]
  );

  const totalBudget = budgets.reduce(
    (sum, budget) => sum + budget.expensive,
    0
  );

  return (
    <>
      <Card isFooterBlurred className="w-full col-span-12 sm:col-span-7">
        <CardHeader>
          <h2
            className={`${subtitle({
              size: "sm",
            })} flex items-center justify-between`}
          >
            {capitalCase("Presupuesto")}
          </h2>
          <Link
            isExternal
            showAnchorIcon
            onPress={onOpen}
            className="text-default-600 hover:text-default-600"
            color="foreground"
            anchorIcon={
              <PlusIcon className="ml-2 mr-1 dark:text-gray-400 size-[22px]" />
            }
          />
        </CardHeader>
        <CardBody className="flex flex-col items-center justify-between pt-0">
          <div className="flex flex-row items-center w-full h-16 p-4 rounded-lg border-1 dark:border-default-400/50 order-b">
            <h2
              className={`${title({
                size: "sm",
              })} flex items-center justify-between`}
            >
              {capitalCase(String(totalBudget))} €
            </h2>
          </div>
          <Accordion isCompact className="p-0" defaultExpandedKeys={["none"]}>
            <AccordionItem
              key="budget"
              aria-label="budget"
              title="Gastos"
              className="px-0"
              classNames={{
                base: "p-0",
                trigger:
                  "flex items-center justify-between focus:outline-none focus:outline-none-0 !hover:bg-transparent bg-transparent p-0",
                title: "p-3",
              }}
            >
              <ul className="flex flex-col gap-1 px-4">
                {budgets.map((budget, index) => (
                  <li
                    className={`flex flex-row justify-between dark:border-default-400/50 ${
                      index === budgets.length - 1 ? "" : "border-b-1 pb-3"
                    } ${index === budgets.length - 1 ? "pt-1" : "pb-0 "}`}
                    key={budget.types.at(1)}
                  >
                    <div>
                      <h6>{budget.types.at(1)}</h6>
                      <p className="text-xs text-gray-400">
                        {budget.types.at(0)}
                      </p>
                    </div>
                    <div>{budget.expensive} €</div>
                  </li>
                ))}
              </ul>
            </AccordionItem>
          </Accordion>
        </CardBody>
        <DrawerCustom
          backdrop="blur"
          placement="bottom"
          radius="lg"
          size="lg"
          isOpen={isOpen}
          header="Añadir gasto"
          onOpenChange={onOpenChange}
          body={
            <Form
              className="flex flex-col w-full gap-4 px-4 py-2"
              validationBehavior="native"
            >
              <Controller
                name="expensive"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    variant="bordered"
                    type="number"
                    name="username"
                    isInvalid={Boolean(fieldState.error?.message)}
                    color={fieldState.error?.message ? "danger" : "default"}
                    errorMessage={fieldState.error?.message}
                    classNames={{
                      inputWrapper: "!min-h-[60px] h-10",
                    }}
                    endContent={
                      <div className="flex items-center">
                        <label className="sr-only" htmlFor="currency">
                          Currency
                        </label>
                        <select
                          className="bg-transparent border-0 outline-none text-default-400 text-small"
                          id="currency"
                          name="currency"
                        >
                          {countries?.map((country) => (
                            <>
                              <option>{country.code}</option>
                            </>
                          ))}
                        </select>
                      </div>
                    }
                    label="Importe"
                    placeholder="0.00"
                  />
                )}
              />
              <Controller
                name="types"
                control={control}
                render={({ field, fieldState }) => (
                  <Select
                    {...field}
                    name="email"
                    fullWidth
                    variant="bordered"
                    items={formatter(options)}
                    label="Selecciona"
                    placeholder="Ej: Avión"
                    isInvalid={Boolean(fieldState.error?.message)}
                    color={fieldState.error?.message ? "danger" : "default"}
                    errorMessage={fieldState.error?.message}
                  >
                    {(op) => <SelectItem>{op.label}</SelectItem>}
                  </Select>
                )}
              />
            </Form>
          }
          footer={
            <Button type="submit" onPress={handleSubmit(onSubmit)}>
              Añadir
            </Button>
          }
        />
      </Card>
      <Toaster
        richColors
        toastOptions={{
          className: "my-toast",
        }}
        mobileOffset={{ bottom: "16px" }}
        position="bottom-center"
      />
    </>
  );
}
