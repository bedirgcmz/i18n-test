import { useLocale, useTranslations } from "next-intl";
import React from "react";

const AboutPage = () => {
  const t = useTranslations("about");
  const locale = useLocale();

  return (
    <div>
      {t("title")}

      <p>{locale == "en" && "Welcome"}</p>
      <p>{locale == "tr" && "Hosgeldiniz"}</p>
    </div>
  );
};

export default AboutPage;
