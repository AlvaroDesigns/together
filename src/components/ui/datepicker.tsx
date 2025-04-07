import * as React from 'react';
import { DayPicker } from 'react-day-picker';
import { es } from 'react-day-picker/locale';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { cn } from '@heroui/react';
import 'react-day-picker/style.css';

export type DatePickerProps = React.ComponentProps<typeof DayPicker>;

function DatePicker({
  className,
  classNames,
  showOutsideDays = false,
  ...props
}: DatePickerProps) {
  return (
    <DayPicker
      animate
      locale={es}
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col items-center justify-center',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium',
        button_next: '[&_svg]:fill-current bg-transparent p-0',
        button_previous: '[&_svg]:fill-current bg-transparent p-0',
        nav_button: cn(
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 hover:bg-accent hover:text-accent-foreground rounded-md',
        ),
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell: 'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: cn(
          'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md',
        ),
        day: cn(
          'h-8 w-8 p-0 font-normal aria-selected:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-md',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
            : '[&:has([aria-selected])]:rounded-md',
        ),
        range_start: 'day-range-start bg-primary text-white',
        range_end: 'day-range-end bg-primary text-white',
        range_middle: 'bg-gray-200 opacity-50 text-slate-600',
        day_outside:
          'day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground',
        disabled: 'text-muted-foreground opacity-50',
        hidden: 'invisible',
        selected: cn(props.mode !== 'range' ? 'bg-primary text-white' : ''),
        today: 'text-primary font-bold',
        day_button: cn(
          'h-8 w-8 font-normal',
          'inline-flex items-center justify-center gap-2 rounded-md text-sm transition-colors disabled:pointer-events-none disabled:opacity-50 h-8 w-8 p-0 font-normal aria-selected:opacity-200',
          'text-primary-foreground hover:bg-primary hover:text-white focus:bg-primary focus:text-white text-accent-foreground',
        ),
        ...classNames,
      }}
      components={{
        PreviousMonthButton: (props) => (
          <button {...props} className="p-2 bg-transparent border-0 border-transparent">
            <ChevronLeftIcon
              className={cn('h-4 w-4 size-6 border-transparent', className)}
            />
          </button>
        ),
        NextMonthButton: (props) => (
          <button {...props} className="p-2 bg-transparent border-0 border-transparent">
            <ChevronRightIcon
              className={cn('h-4 w-4 size-6 border-transparent', className)}
            />
          </button>
        ),
      }}
      {...props}
    />
  );
}
DatePicker.displayName = 'DatePicker';

export { DatePicker };
