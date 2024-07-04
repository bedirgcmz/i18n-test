import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  return (
    <div>
      <h2>{t("title")}</h2>
      <p>{t("description")}</p>
    </div>
  );
}
