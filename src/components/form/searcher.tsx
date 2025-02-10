import { COUNTER_DATA } from "@/data";
import {
  Autocomplete,
  AutocompleteItem,
  DateRangePicker,
  Form,
} from "@heroui/react";
import { parseDate } from "@internationalized/date";
import { Counter } from "../atomos/counter";

export default function Searcher() {
  const COUNTERS = COUNTER_DATA();

  return (
    <Form
      className="flex flex-col gap-4 mx-4"
      validationBehavior="native"
      onSubmit={(e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));

        // setAction(`submit ${JSON.stringify(data)}`);
      }}
    >
      <Autocomplete
        isRequired
        fullWidth
        defaultItems={[
          {
            label: "Otter",
            key: "otter",
            description: "A carnivorous mammal in the subfamily Lutrinae",
          },
          {
            label: "Crocodile",
            key: "crocodile",
            description: "A large semiaquatic reptile",
          },
        ]}
        label="Donde"
        placeholder="Buscar destino"
      >
        {(op) => <AutocompleteItem key={op.key}>{op.label}</AutocompleteItem>}
      </Autocomplete>
      <DateRangePicker
        isRequired
        fullWidth
        defaultValue={{
          start: parseDate("2025-04-01"),
          end: parseDate("2025-04-08"),
        }}
        label="Cuando"
      />
      {COUNTERS.map((co) => (
        <Counter
          label={co.label}
          key={co.key}
          defaultValue={co.defaultValue}
          min={co.min}
        />
      ))}
    </Form>
  );
}
