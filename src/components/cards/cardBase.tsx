import { PencilSquareIcon } from "@heroicons/react/24/outline";

import { subtitle } from "@/components/primitives";
import { capitalCase } from "@/utils";
import { format } from "@formkit/tempo";
import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
} from "@nextui-org/react";

export default function CardBase({
  header = new Date(),
  body,
  footer = null,
}: {
  header: string | Date;
  body: React.ReactNode;
  footer?: string[] | null;
}) {
  return (
    <Card isFooterBlurred className="w-full col-span-12 sm:col-span-7">
      <CardHeader className="z-10 flex-col items-start">
        <div className="flex items-center justify-between w-full mb-3">
          <div
            className={`${subtitle({
              size: "sm",
            })} flex items-center justify-between`}
          >
            {capitalCase(format(new Date(header), "ddd, D MMM"))}
          </div>
          <Link
            isExternal
            showAnchorIcon
            className="text-default-600 hover:text-default-600"
            color="foreground"
            anchorIcon={
              <PencilSquareIcon className="mt-1 mr-1 dark:text-gray-600 size-5" />
            }
            href="https://github.com/nextui-org/nextui"
          />
        </div>
        <Divider />
      </CardHeader>
      <CardBody className="flex flex-row items-center pt-0 mt-1 mb-1">
        {body}
      </CardBody>
      {footer && (
        <CardFooter className="pt-0 text-left">
          <div className="w-full ">
            <Divider />
            <Accordion
              showDivider={false}
              isCompact={true}
              defaultExpandedKeys={["null"]}
              className="p-0 m-0"
            >
              <AccordionItem
                key="1"
                aria-label="Ver más información"
                classNames={{
                  trigger:
                    "bg-transparent px-0 hover:border-transparent focus:outline-0 focus-visible:outline-0 pb-0",
                  content: "flex flex-col gap-4 mt-2",
                }}
                title="Ver más información"
              >
                {footer.map((item) => (
                  <p>{item}</p>
                ))}
              </AccordionItem>
            </Accordion>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
