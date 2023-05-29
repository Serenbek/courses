import Main from "../components/main/main";
import RegisterNow from "../components/RegisterNow/RegisterNow";
import Header from "../components/header/header";
import WeWork from "../components/wework/wework";


const HomePage = () => {
  return (
    <>
      <Header />
      <Main />
      <WeWork/>
      <RegisterNow />
    </>
  );
};

export default HomePage;
