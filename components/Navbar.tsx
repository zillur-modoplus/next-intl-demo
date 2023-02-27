import { Button, Flex, HStack, Link } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import React from "react";
import SelectLanguage from "./ChangeLanguage";

function Navbar() {
  const t = useTranslations("Navbar");
  const { locale } = useRouter();
  return (
    <Flex>
      <HStack>
        <Button bg={"yellowgreen"}>
          {" "}
          <Link href={`/${locale}/accordion`}>{t("accordion")}</Link>
        </Button>
        <Button bg={"yellowgreen"}>
          {" "}
          <Link href={`/${locale}/alert`}>{t("alert")}</Link>
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
