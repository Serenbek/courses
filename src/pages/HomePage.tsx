import Main from "../components/main/main";
import RegisterNow from "../components/RegisterNow/RegisterNow";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import WeWork from "../components/wework/wework";
import ThirdBlock from "../components/thirdBlock/thirdBlock";
import AppBlock from "../components/appBlock/downApp";
import Teachers from "../components/teachers/teachers";
import Featured from "../components/FeaturedCourses/Featured";
import FeaturedCategory from "../components/FeaturedCategory/FeaturedCategory";
import Vertical from "../components/VerticalCard/Vertical";
import LatestPosts from "../components/LatestPosts/LatePosts";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
const HomePage = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });


  return (
    <ThemeProvider  theme={lightTheme }>
      <CssBaseline />
     <Header />
      <Main />
      <WeWork />
      <ThirdBlock />
      <Featured/>  
      <FeaturedCategory/>
      <Teachers />
      <LatestPosts/>
      <AppBlock />
      <RegisterNow />
      <Footer /> 
    </ThemeProvider>
  );
};

export default HomePage;
