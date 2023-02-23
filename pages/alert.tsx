import AlertComponent from "@/components/AlertComponent";
import Navbar from "@/components/Navbar";
import { Heading, Text } from "@chakra-ui/react";
import { pick } from "lodash";
import React from "react";

function Alert() {
  return (
    <>
      <Navbar />
      <AlertComponent />
    </>
  );
}

export default Alert;

Alert.messages = [...Navbar.messages, ...AlertComponent.messages];

export async function getServerSideProps(context: { locale: string }) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language.
      messages: pick(
        await import(`../messages/${context.locale}.json`),
        Alert.messages
      ),
    },
  };
}
