import { Button, HStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <HStack>
      <Button bg={"yellowgreen"}>
        {" "}
        <Link href={"/accordion"}>Accordion </Link>
      </Button>
      <Button bg={"yellowgreen"}>
        {" "}
        <Link href={"/alert"}>Alert</Link>
      </Button>
      <Button bg={"yellowgreen"}>
        {" "}
        <Link href={"/"}>Homepage</Link>
      </Button>
    </HStack>
  );
}

export default Navbar;
