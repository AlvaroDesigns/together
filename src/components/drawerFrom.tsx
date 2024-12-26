import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@nextui-org/react";
import React from "react";

interface DrawerFromProps {
  backdrop?: "opaque" | "blur" | "transparent";
  placement?: "left" | "right" | "top" | "bottom";
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "full";
  radius?: "none" | "sm" | "md" | "lg";
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  header: string;
  body: React.ReactNode;
  footer: React.ReactNode;
}

export default function DrawerFrom({
  backdrop = "blur",
  placement,
  size = "xs",
  radius = "none",
  isOpen,
  onOpenChange,
  header,
  body,
  footer,
}: DrawerFromProps) {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        backdrop={backdrop}
        placement={placement}
        size={size}
        radius={radius}
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          {() => (
            <>
              <DrawerHeader className="flex flex-col gap-1 mb-2 border-b">
                {header}
              </DrawerHeader>
              <DrawerBody className="px-0">{body}</DrawerBody>
              <DrawerFooter>{footer}</DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
