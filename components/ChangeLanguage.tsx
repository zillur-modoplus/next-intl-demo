import { useRouter } from "next/router";
import React from "react";

type Props = {};

function ChangeLanguage({}: Props) {
  const router = useRouter();
  const { locale } = router;
  // const t = locale === "en" ? en : de
  const changeLanguage = (e: { target: { value: any } }) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };
  return (
    <>
      <select
        onChange={changeLanguage}
        defaultValue={locale}
        className="text-white text-shadow-sm text-lg bg-transparent tracking-wide"
      >
        <option className="text-black" value="en">
          EN
        </option>
        <option className="text-black" value="fr">
          FR
        </option>
      </select>
    </>
  );
}

export default ChangeLanguage;
