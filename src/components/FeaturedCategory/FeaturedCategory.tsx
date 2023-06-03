import scss from "./FeaturedCategory.module.scss";
import Typography from "@mui/material/Typography/Typography";
import Button from "../button/Button";
import { useTranslation } from "react-i18next";

function FeaturedCategory() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className={scss.wrapper}>
        <div className={scss.wrapper_box}>
          <div className={scss.left}>
            <Typography variant="h2">{t("featured.category")}</Typography>
            <Typography variant="subtitle1" component="p">
              Since wire-frame renderings are relatively simple and fast to
              calculate, they are often used in cases
            </Typography>
            <Button text="Explore more" />
          </div>
          <div className={scss.right}>
            <div className={scss.box_wrapper}>
              <div className={scss.box}>
                <Typography variant="h6">{t("featured.python")}</Typography>
                <Typography variant="subtitle1" component="p">
                  28,965,389 students
                </Typography>
              </div>
              <div className={scss.box}>
                <Typography variant="h6">{t("featured.management")}</Typography>
                <Typography variant="subtitle1" component="p">
                  28,965,389 students
                </Typography>
              </div>
              <div className={scss.box_web}>
                <Typography variant="h6">
                  {t("featured.webDevelopment")}
                </Typography>
                <Typography variant="subtitle1" component="p">
                  28,965,389 students
                </Typography>
              </div>
              <div className={scss.box}>
                <Typography variant="h6">{t("featured.photoshop")}</Typography>
                <Typography variant="subtitle1" component="p">
                  28,965,389 students
                </Typography>
              </div>
              <div className={scss.box_machine}>
                <Typography variant="h6">
                  {t("featured.machineLearning")}
                </Typography>
                <Typography variant="subtitle1" component="p">
                  28,965,389 students
                </Typography>
              </div>
              <div className={scss.box}>
                <Typography variant="h6">
                  {t("featured.cyberSecurity")}
                </Typography>
                <Typography variant="subtitle1" component="p">
                  28,965,389 students
                </Typography>
              </div>
              <div className={scss.box}>
                <Typography variant="h6">{t("featured.marketing")}</Typography>
                <Typography variant="subtitle1" component="p">
                  28,965,389 students
                </Typography>
              </div>
              <div className={scss.box}>
                <Typography variant="h6">
                  {t("featured.machineLearning")}
                </Typography>
                <Typography variant="subtitle1" component="p">
                  28,965,389 students
                </Typography>
              </div>
              <div className={scss.box_none}>
                <Typography variant="h6">
                  {t("featured.cyberSecurity")}
                </Typography>
                <Typography variant="subtitle1" component="p">
                  28,965,389 students
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCategory;
