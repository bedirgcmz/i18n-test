import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

const Navbar = () => {
  const t = useTranslations("common");
  const locale = useLocale();

  return (
    <nav className="">
      <ul className="flex justify-end gap-3">
        <li>
          <Link href={`/${locale}`}>{t("home")}</Link>
        </li>
        <li>
          <Link href={`/${locale}/contact`}>{t("contact")}</Link>
        </li>
        <li>
          <Link href={`/${locale}/about`}>{t("about")}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
