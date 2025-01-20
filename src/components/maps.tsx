import { Button, Image } from "@heroui/react";
import { useState } from "react";
import Map, {
  Marker,
  NavigationControl,
  Popup,
  ScaleControl,
} from "react-map-gl/maplibre";

export const Maps = () => {
  const [state, setState] = useState<boolean>(false);

  return (
    <>
      {!state && (
        <div className="relative">
          <div className="absolute z-20 flex items-center justify-center w-full h-full">
            <Button
              variant="shadow"
              size="md"
              className="text-white bg-primary focus:outline-none"
              onPress={() => setState(true)}
            >
              VER MAPA
            </Button>
          </div>
          <Image radius="lg" alt="Hotel" src="../../map.png" width="100%" />
        </div>
      )}

      {state && (
        <Map
          initialViewState={{
            longitude: -3.70379,
            latitude: 40.416775,
            zoom: 12,
          }}
          style={{ width: "100%", height: 124 }}
          mapStyle={`https://api.maptiler.com/maps/basic-v2/style.json?key=cGtkLqW3MVfYTVlsftUs`}
        >
          <Marker longitude={-100} latitude={40} anchor="bottom">
            <img src="../../public/user.png" />
          </Marker>
          <NavigationControl />
          <ScaleControl />
          <Popup
            longitude={-100}
            latitude={40}
            anchor="bottom"
            onClose={() => console.log}
          >
            You are here
          </Popup>
        </Map>
      )}
    </>
  );
};
