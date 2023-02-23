import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { NextIntlProvider } from "next-intl";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </NextIntlProvider>
  );
}
