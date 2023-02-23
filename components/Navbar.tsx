import { Button, Flex, HStack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import SelectLanguage from "./ChangeLanguage";

function Navbar() {
  const t = useTranslations("Navbar");
  return (
    <Flex>
      <HStack>
        <Button bg={"yellowgreen"}>
          {" "}
          <Link href={"/accordion"}>{t("accordion")}</Link>
        </Button>
        <Button bg={"yellowgreen"}>
          {" "}
          <Link href={"/alert"}>{t("alert")}</Link>
        </Button>
        <Button bg={"yellowgreen"}>
          {" "}
          <Link href={"/"}>{t("homepage")}</Link>
        </Button>
      </HStack>
      <SelectLanguage />
    </Flex>
  );
}

export default Navbar;

Navbar.messages = ["Navbar"];
