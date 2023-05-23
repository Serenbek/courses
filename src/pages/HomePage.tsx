import { useTranslation } from "react-i18next";
import Test from "../components/test/Test";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>Home Page</h1>
    </>
  );
};

export default HomePage;
