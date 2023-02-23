import { Heading, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import React from "react";

function AlertComponent() {
  const t = useTranslations("Alert");
  return (
    <>
      <Heading>{t("heading")}</Heading>
      <Text>{t("text")}</Text>
    </>
  );
}

AlertComponent.messages = ["Alert"];

export default AlertComponent;
