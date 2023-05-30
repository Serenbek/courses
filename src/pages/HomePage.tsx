import Main from "../components/main/main";
import RegisterNow from "../components/RegisterNow/RegisterNow";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import WeWork from "../components/wework/wework";

const HomePage = () => {
  return (
    <>
      <Header />
      <Main />
      <WeWork />
      <RegisterNow />
      <Footer />
    </>
  );
};

export default HomePage;
