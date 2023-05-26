import { useTranslation } from "react-i18next";
import Test from "../components/test/Test";
import Main from "../components/main/main";
import Header from "../components/header/header";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default HomePage;
