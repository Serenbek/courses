import { Link } from "react-router-dom";
import search from "../../assets/images/header/headerSearch.svg";
import map from "../../assets/images/header/headerMap.svg";
import divider from "../../assets/images/header/headerDivider.svg";
import logo from "../../assets/images/header/logo.svg";
import scss from "./header.module.scss";
import headerArrow from "../../assets/images/header/headerArrow.svg";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import burgerMenu from "../../assets/images/header/headerBurgerMenu.svg";
import "../../i18n";
import { useTranslation } from "react-i18next";
import { useState } from "react";

interface LanguageData {
  nativName: string;
}

function Header() {
  const lngs: Record<string, LanguageData> = {
    en: { nativName: "En" },
    ru: { nativName: "Рус" },
  };

  const { i18n, t } = useTranslation();

  const [lng, setLng] = useState<boolean>(false);

  const handleLngClose = (): void => {
    setLng((prev: boolean) => !prev);
  };

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    // Existing switch styles

    // Add dark mode styles
    "& .MuiSwitch-track": {
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    },
  }));

  return (
    <nav className={scss.nav}>
      <div className={scss.wrapper + " container"}>
        <div className={scss.navMenu}>
          <Link to="/">
            <img className={scss.menuLogo} src={logo} alt="logo" />
          </Link>
          <Link className={scss.menuLink} to="/">
            {t("header.home")}
          </Link>
          <Link className={scss.menuLink} to="/">
            {t("header.components")}
          </Link>
          <div className={scss.dropDown}>
            <div className={scss.dropBtn}>
              {t("header.pages")} <img src={headerArrow} alt="headerArrow" />
            </div>
            <div className={scss.content}>
              <Link to="/">{t("header.home")}</Link>
              <Link to="/listPage">{t("header.list")}</Link>
              <Link to="/detailsPage">{t("header.details")}</Link>
              <Link to="/blogPage">{t("header.blog")}</Link>
              <Link to="/blogDetailsPage">{t("header.blogDetails")}</Link>
              <Link to="/aboutPage">{t("header.about")}</Link>
              <Link to="/contactPage">{t("header.contact")}</Link>
            </div>
          </div>
          <Link className={scss.menuLink} to="/">
            {t("header.documentation")}
          </Link>
        </div>
        <div className={scss.menuSign}>
          <FormGroup>
            <FormControlLabel
              control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
              label=""
              className={scss.darkMode}
            />
          </FormGroup>
          <div className={scss.burgerMenu}>
            <img src={burgerMenu} alt="burgerMenu" />
          </div>
          <img className={scss.headerSearch} src={search} alt="serach-icon" />
          <img
            className={scss.iconMap}
            src={map}
            alt="map-icon"
            onClick={handleLngClose}
          />
          {lng && (
            <div className={scss.lngBtns} onClick={handleLngClose}>
              {Object.keys(lngs).map((lng, index) => (
                <Button
                  className={scss.lngBtn}
                  type="submit"
                  key={`${lng}_${index}`}
                  onClick={() => i18n.changeLanguage(lng)}
                  disabled={i18n.resolvedLanguage === lng}
                >
                  {lngs[lng].nativName}
                </Button>
              ))}
            </div>
          )}
          <img className={scss.divider} src={divider} alt="divider" />
          <Stack spacing={2} direction="row">
            <Button variant="text" className={scss.loginBtn}>
              {t("header.login")}
            </Button>
            <Button className={scss.joinBtn}>{t("header.join")}</Button>
          </Stack>
        </div>
      </div>
    </nav>
  );
}
export default Header;
