import Gorizontal from "../components/GorizontalCard/GorizontalCard";
import RegisterNow from "../components/RegisterNow/RegisterNow";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import List from "./../components/ListPage/ListPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
const ListPage = () => {
  return (
    <>
      <Header />
      <List/>
      <RegisterNow/>
      <Footer />
      </>
        );
};


export default ListPage;
