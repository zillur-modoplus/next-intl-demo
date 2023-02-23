import AccordionComponent from "@/components/AccordionComponent";
import Navbar from "@/components/Navbar";
import { Button, Heading, Text } from "@chakra-ui/react";
import { pick } from "lodash";
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

Accordion.messages = [...Navbar.messages, AccordionComponent.messages];

export async function getServerSideProps(context: { locale: string }) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language.
      messages: pick(
        await import(`../messages/${context.locale}.json`),
        Accordion.messages
      ),
    },
  };
}
