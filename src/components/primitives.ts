import { tv } from "tailwind-variants";

export const title = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    color: {
      base: "from-[#009688] to-[#009688]",
      black: "dark:black",
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#009688] to-[#009688]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    size: {
      xxs: "text-lg lg:text-4xl",
      xs: "text-xl",
      s: "text-2xl",
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl leading-9",
      lg: "text-4xl lg:text-6xl",
    },
    weight: {
      light: "font-normal",
      bold: "font-bold",
      semibold: "font-semibold",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "black",
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2text-lg lg:text-xl text-default-600 block",
  variants: {
    fullWidth: {
      true: "!w-full",
      false: "w-fit",
    },
    color: {
      black: "dark:text-gray-600",
      white: "dark:text-gray-600",
    },
    weight: {
      light: "font-normal",
      bold: "font-bold",
      semibold: "font-semibold",
    },
    size: {
      xs: "text-xs",
      sm: "text-[1rem]",
      md: "text-[2.3rem] lg:text-5xl leading-9",
      lg: "text-4xl lg:text-6xl",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});

export const submit = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block w-full h-14",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl leading-9",
      lg: "text-4xl lg:text-6xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
  compoundVariants: [
    {
      color: ["violet"],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});
