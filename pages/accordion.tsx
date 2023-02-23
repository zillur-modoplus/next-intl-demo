import AccordionComponent from "@/components/AccordionComponent";
import Navbar from "@/components/Navbar";
import { Button, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function Accordion() {
  return (
    <>
      <Button>
        <Link href={"/"}>Go back to homepage</Link>
      </Button>
      <Navbar />

      <AccordionComponent />
    </>
  );
}

export default Accordion;
