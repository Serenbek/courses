import Main from "../components/main/main";
import RegisterNow from "../components/RegisterNow/RegisterNow";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import WeWork from "../components/wework/wework";
import ThirdBlock from "../components/thirdBlock/thirdBlock";
import AppBlock from "../components/appBlock/downApp";
import Teachers from "../components/teachers/teachers";
import Featured from "../components/FeaturedCourses/Featured";

const HomePage = () => {
  return (
    <>
      <Header />
      <Main />
      <WeWork />
      <ThirdBlock />
      <Featured/>
      <Teachers />
      <AppBlock />
      <RegisterNow />
      <Footer />
    </>
  );
};

export default HomePage;
