import { FormControl, Select } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

function SelectLanguage() {
  const router = useRouter();
  const { pathname, locale } = router;
  const onChangeLocale = (e: any) => {
    const locale = e.target.value;
    document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; path=/`;
    router.push("/", "/", { locale });
  };
  return (
    <FormControl>
      <Select
        variant="unstyled"
        w={16}
        size="xl"
        defaultValue={locale}
        onChange={onChangeLocale}
      >
        <option value="de">DE</option>
        <option value="en">EN</option>
      </Select>
    </FormControl>
  );
}

export default SelectLanguage;
