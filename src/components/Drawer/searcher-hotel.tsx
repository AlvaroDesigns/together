import { CardHotelPromo } from '@/components/Cards';
import Searcher from '@/components/Form/searcher';
import Btn from '@/components/ui/btn';
import DrawerCustom from '@/components/ui/drawerCustom';
import { ROUTES } from '@/constants';
import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';

interface SearcherHotelProps {
  isDisabled: boolean;
}

export default function SearcherHotel({ isDisabled }: SearcherHotelProps) {
  const [isSearcherClose, setSearcherClose] = useState<boolean>(isDisabled);
  const [isSearcherHotel, setSearcherHotel] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <>
      <CardHotelPromo
        isDisabled={isSearcherClose}
        onPressClose={() => setSearcherClose(!isSearcherHotel)}
        onPressSubmit={() => setSearcherHotel(!isSearcherHotel)}
      />
      <DrawerCustom
        backdrop="blur"
        placement="bottom"
        radius="lg"
        size="lg"
        isOpen={isSearcherHotel}
        header="Reservar hoteles"
        onOpenChange={() => setSearcherHotel(false)}
        body={<Searcher />}
        footer={<Btn onPress={() => navigate({ to: ROUTES.AVAILABILITY })}>Buscar</Btn>}
      />
    </>
  );
}
