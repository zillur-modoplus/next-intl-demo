import { Heading, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import React from "react";

function Setup() {
  const t = useTranslations("Setup");
  return (
    <>
      <Heading>{t("heading")}</Heading>
      <Text>{t("text")}</Text>
    </>
  );
}

export default Setup;

Setup.messages = ["Setup"];
