import scss from "./RegisterNow.module.scss";
import img_email from "../../assets/images/main/Asset 1 2.svg";
import Typography from "@mui/material/Typography/Typography";
import { useTranslation } from "react-i18next";

function RegisterNow() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className={scss.wrapper}>
        <div className={scss.left}>
          <Typography variant="h3">{t("register.registerNow")}</Typography>
          <Typography variant="subtitle1" component="p">
            Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus.
            Sed magna purus, fermentum eu
          </Typography>
          <div className={scss.in}>
            <input type="email" placeholder="Enter your email" />
            <button>{t("register.button")}</button>
          </div>
        </div>
        <div className={scss.right}>
          <img src={img_email} alt="email_photo" />
        </div>
      </div>
    </div>
  );
}

export default RegisterNow;
