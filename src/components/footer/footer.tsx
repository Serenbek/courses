import scss from "./footer.module.scss";
import logo from "../../assets/images/footer/logo.svg";
import TextField from "@mui/material/TextField";
import arrowEmail from "../../assets/images/footer/arrowWhite.svg";
import { socialData } from "../../constants/footer";
import { Link } from "react-router-dom";
import email from "../../assets/images/footer/footerEmail.svg";
import location from "../../assets/images/footer/footerLocation.svg";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <div className={scss.footer}>
      <div className="container">
        <div className={scss.footer__wrapper}>
          <div className={scss.footer__zone}>
            <img src={logo} alt="Logo" />
            <div className={scss.footer__zone__desc}>{t("footer.bigText")}</div>
            <div className={scss.social__wrapper}>
              <div className={scss.social__wrapper}>
                {socialData.map((item) => (
                  <div key={item.url} className={scss.social_wrapper}>
                    <Link to={item.url} target="_blank">
                      <img src={item.img} alt="Social" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={scss.footer__info}>
            <div className={scss.get__email}>
              <Link to="https://example.com/">
                <img src={email} alt="email" />
              </Link>
              <Link to="https://example.com/"> &nbsp; info@example.com </Link>
            </div>
            <div className={scss.get__email}>
              <Link to="mailto:Hello@agency.com">
                <img src={location} alt="location" />
              </Link>
              <Link to="mailto:Hello@agency.com">
                {" "}
                &nbsp; 655 Schaefer Dale
              </Link>
            </div>
          </div>
          <div className={scss.footer__email}>
            <TextField
              id="demo-helper-text-aligned-no-helper"
              label={t("footer.emailAddress")}
              className={scss.email__input}
            />
            <div className={scss.email__btn}>
              <img src={arrowEmail} alt="arrowEmail" />
            </div>
          </div>
        </div>
        <div className={scss.footer__text__end}>
          <div className={scss.footer__left__text}>
            {t("footer.rightsReserved")}
          </div>
          <div className={scss.footer__right__wrapper}>
            <div className={scss.footer__rights__text}>
              {t("footer.helpCenter")}
            </div>
            <div className={scss.footer__rights__text}>
              {t("footer.termsService")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
