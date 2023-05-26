import { useTranslation } from "react-i18next";
import Main from "../components/main/main";

import RegisterNow from "../components/RegisterNow/RegisterNow";

import Header from "../components/header/header";


const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <Main />
      <RegisterNow />
    </>
  );
};

export default HomePage;
