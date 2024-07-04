import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("contact");

  return (
    <div>
      <h1>{t("title")}</h1>
      <h4>{t("description")}</h4>
      <form>
        <label htmlFor="name" className="flex flex-col">
          {t("name")}
          <input type="text" id="name" name="name" />
        </label>
        <label htmlFor="email">{t("email")}</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">{t("message")}</label>
        <textarea id="message" name="message"></textarea>
        <button type="submit">{t("sendMessage")}</button>
      </form>
    </div>
  );
};

export default Contact;
