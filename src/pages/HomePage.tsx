import { useTranslation } from "react-i18next";
import Test from "../components/test/Test";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>Home Page</h1>
      <br />
      <h2>{t("welcome.welcome1")}</h2>
      <br />
      <h3>{t("hello.hello1")}</h3>
      <Test/>
    </>
  );
};

export default HomePage;
