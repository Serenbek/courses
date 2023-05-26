import { useTranslation } from "react-i18next";
import Test from "../components/test/Test";
import Main from "../components/main/main";
import RegisterNow from "../components/RegisterNow/RegisterNow";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Main />
      <RegisterNow />
    </>
  );
};

export default HomePage;
