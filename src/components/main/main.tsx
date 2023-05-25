import React, { useMemo } from "react";
import styles from "./main.module.scss";
import Typography from "@mui/material/Typography/Typography";
import CustomButton from "../../button/Button";
import bg from "../../assets/images/main/main1.png";
import vector from "../../assets/images/main/OVERLAY COLOR11.svg";
import fab from "../../assets/images/main/Fab.svg";
import { useTranslation } from "react-i18next";
import { maincardssarr, renderbtntext } from "../../constants/main";
const Main = () => {
  const { t } = useTranslation();
  const renderText = useMemo(
    () =>
      maincardssarr.map((item) => (
        <div className={styles.jobs}>
          <Typography variant="h4">{t(item.title)}</Typography>
          <Typography variant="subtitle1" component="p">
            {t(item.date)}
          </Typography>
        </div>
      )),
    [t]
  );

  return (
    <div className={styles.main}>
      <div className="container" style={{ display: "flex", gap: "24px" }}>
        <div className={styles.main__left}>
          <div className={styles.left__paragraph}>
            <Typography variant="h1">{t("main.free")}</Typography>
            <Typography variant="h2">{t("main.online")}</Typography>
            <Typography variant="subtitle1" component="a">
              {t("main.courses")}
            </Typography>
            <Typography variant="h1">{t("main.from")} </Typography>
            <Typography variant="h1"> {t("main.expert")}</Typography>
          </div>
          <div className={styles.left__subtitle}>
            <Typography variant="subtitle1" component="p">
              Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum
              <br />
              laoreet sapien, quis venenatis ante odio sit amet eros.
            </Typography>
          </div>
          <div className={styles.left__ready}>
            <CustomButton vector={vector} text="Ready Start" />
            <div className={styles.left__watch}>
              <img className={styles.fab} src={fab} alt="fab" />
              <Typography variant="subtitle1" component="b">
                {t("main.watch")}
              </Typography>
            </div>
          </div>
          <hr className={styles.left__hr} />
          <div className={styles.left__results}>{renderText}</div>
        </div>
        <div className={styles.main__right}>
          <img src={bg} alt="bg" />
        </div>
      </div>
    </div>
  );
};

export default Main;
