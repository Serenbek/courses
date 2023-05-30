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
    en: { nativName: "English" },
    ru: { nativName: "Russian" },
  };

  const { i18n, t } = useTranslation();

  const [lng, setLng] = useState<boolean>(false);

  const handleLngClose = (): void => {
    setLng((prev: boolean) => !prev);
  };

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
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
              {Object.keys(lngs).map((lng) => (
                <Button
                  className={scss.lngBtn}
                  type="submit"
                  key={lng}
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
