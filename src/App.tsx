import "./App.scss";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListPage from "./pages/ListPage";
import DetailsPage from "./pages/DetailsPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listPage" element={<ListPage />} />
          <Route path="/detailsPage" element={<DetailsPage />} />
          <Route path="/blogPage" element={<BlogPage />} />
          <Route path="/blogDetailsPage" element={<BlogDetailsPage />} />
          <Route path="/aboutPage" element={<AboutPage />} />
          <Route path="/contactPage" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
