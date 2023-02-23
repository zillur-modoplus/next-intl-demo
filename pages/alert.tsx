import AlertComponent from "@/components/AlertComponent";
import Navbar from "@/components/Navbar";
import { Heading, Text } from "@chakra-ui/react";
import React from "react";

function alert() {
  return (
    <>
      <Navbar />

      <AlertComponent />
    </>
  );
}

export default alert;
