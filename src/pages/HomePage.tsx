import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>Home Page</h1>
      <h2>{t("welcome.welcome1")}</h2>
      <h3>{t("hello.hello1")}</h3>
    </div>
  );
};

export default HomePage;
