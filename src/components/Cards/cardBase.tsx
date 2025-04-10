import { subtitle } from '@/components/primitives';
import { capitalCase, isDate } from '@/utils';
import { format } from '@formkit/tempo';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
} from '@heroui/react';

interface CardBaseProps {
  header: string | Date | null;
  hideEdit?: boolean;
  body: React.ReactNode;
  footer?: string[] | null;
  onPressEdit?: () => void;
  onPressDelete?: () => void;
}

export default function CardBase({
  header = new Date(),
  onPressEdit,
  onPressDelete,
  hideEdit = false,
  body,
  footer = null,
}: CardBaseProps) {
  const key = `card-base-${crypto.randomUUID()}`;

  return (
    <Card isFooterBlurred className="w-full col-span-12 sm:col-span-7" key={key}>
      <CardHeader className="z-10 flex-col items-start">
        <div className="flex items-center justify-between w-full mb-3">
          <h2
            className={`${subtitle({
              size: 'sm',
            })} flex items-center justify-between`}
          >
            {isDate(header) && header
              ? capitalCase(format(new Date(header), 'ddd, D MMM'))
              : capitalCase(header?.toString() ?? '')}
          </h2>
          {!hideEdit && (
            <Link
              isExternal
              showAnchorIcon
              className="text-default-600 hover:text-default-600"
              color="foreground"
              onPress={onPressEdit}
              anchorIcon={
                <PencilSquareIcon className="mr-2 dark:text-gray-400 size-[22px]" />
              }
            />
          )}
          {onPressDelete && (
            <Link
              isExternal
              showAnchorIcon
              className="text-default-600 hover:text-default-600"
              color="foreground"
              onPress={onPressDelete}
              anchorIcon={
                <TrashIcon className="ml-2 mr-1 dark:text-gray-400 size-[22px]" />
              }
            />
          )}
        </div>
        <Divider />
      </CardHeader>
      <CardBody className="flex flex-row items-center pt-0 mt-1 mb-1">{body}</CardBody>
      {footer && footer?.length > 0 && (
        <CardFooter className="pt-0 text-left">
          <div className="w-full ">
            <Divider />
            <Accordion showDivider={false} isCompact={true} className="p-0 m-0">
              <AccordionItem
                aria-label="Ver más información"
                title="Ver más información"
                classNames={{
                  trigger:
                    'bg-transparent px-0 hover:border-transparent focus:outline-0 focus-visible:outline-0 pb-0',
                  content: 'flex flex-col gap-4 mt-2',
                }}
              >
                {footer?.map((item) => <p>{item}</p>)}
              </AccordionItem>
            </Accordion>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
