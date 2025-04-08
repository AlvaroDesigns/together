import { Label } from '@/components';
import { useForm } from '@/hooks';
import Services from '@/services';
import { Autocomplete, AutocompleteItem } from '@heroui/react';
import { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';

interface AutocompleteControllerProps {
  control: ReturnType<typeof useForm>['control'];
  name: string;
  label: string;
  placeholder?: string;
  fullWidth?: boolean;
  endpoint: string;
  mt?: string | number;
  mb?: string | number;
  ml?: string | number;
  mr?: string | number;
}

interface AutocompleteItemProps {
  key: string;
  name: string;
  stateName?: string;
  countryName: string;
  latitude: number;
}

export const AutocompleteController = ({
  control,
  name,
  label,
  placeholder,
  fullWidth = false,
  endpoint,
  mt,
  mb,
  ml,
  mr,
}: AutocompleteControllerProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchDirecciones = async () => {
      if (query.length < 3) {
        setResults([]);
        return;
      }

      try {
        const response = await Services({
          method: 'GET',
          url: `${endpoint}?query=${query}`,
        });
        setResults(response.data.data || []);
      } catch (err) {
        console.error('Error al obtener direcciones', err);
        setResults([]);
      }
    };

    const debounce = setTimeout(() => {
      fetchDirecciones();
    }, 300);

    return () => clearTimeout(debounce);
  }, [query]);

  return (
    <div
      className="flex flex-col w-full"
      style={{
        marginTop: mt,
        marginBottom: mb,
        marginLeft: ml,
        marginRight: mr,
      }}
    >
      <Label>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <Autocomplete
            isRequired
            inputValue={field.value}
            items={results}
            labelPlacement="outside"
            onInputChange={(value) => {
              console.log('value', value);
              setQuery(value);
              field.onChange(value);
            }}
            placeholder={placeholder}
            fullWidth={fullWidth}
            variant="bordered"
            listboxProps={{
              emptyContent: 'El campo está vacío',
            }}
            inputProps={{
              classNames: {
                inputWrapper: '!min-h-[60px] h-10 w-full',
              },
            }}
            className="w-full mt-1"
            isInvalid={Boolean(fieldState.error?.message)}
            color={fieldState.error?.message ? 'danger' : 'default'}
            errorMessage={fieldState.error?.message}
          >
            {(item: AutocompleteItemProps) => (
              <AutocompleteItem
                key={`${item?.key}-${item?.countryName}-${item.latitude}`}
                textValue={item?.name}
                className="capitalize"
              >
                <div>
                  <p className="text-sm">{item?.name}</p>
                  <p className="text-xs text-gray-500">
                    {item?.stateName && `${item?.stateName} - `}
                    {item?.countryName}
                  </p>
                </div>
              </AutocompleteItem>
            )}
          </Autocomplete>
        )}
      />
    </div>
  );
};
