import { Heading, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import React from "react";

function TabsComponent() {
  const t = useTranslations("Tabs");
  return (
    <>
      <Heading>{t("heading")}</Heading>
      <Text>{t("text")}</Text>
    </>
  );
}

export default TabsComponent;

TabsComponent.messages = ["Tabs"];
