import { Link } from "@heroui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import CardBase from "./cardBase";

export default function CardOther({
  descriptions,
  onPressEdit,
  onPressDelete,
}: any) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();

  const preview = descriptions?.slice(0, 15);

  return (
    <CardBase
      onPressEdit={onPressEdit}
      onPressDelete={onPressDelete}
      header={t("TRIP.OTHER")}
      body={
        <div className="flex flex-col">
          {isExpanded ? (
            <p>{descriptions.map((item: string) => item)}</p>
          ) : (
            <p>{preview.map((item: string) => item.slice(0, 82))}...</p>
          )}
          <Link
            color="foreground"
            underline="always"
            onPress={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Ver más" : "Ver menos"}
          </Link>
        </div>
      }
    />
  );
}
