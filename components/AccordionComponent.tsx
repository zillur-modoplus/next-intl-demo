import { Heading, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import React from "react";

function AccordionComponent() {
  const t = useTranslations("Accordion");
  return (
    <>
      <Heading>{t("heading")}</Heading>
      <Text>{t("text")}</Text>
    </>
  );
}

AccordionComponent.messages = ["Accordion"];

export default AccordionComponent;
