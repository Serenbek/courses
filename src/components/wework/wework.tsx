import React from "react";
import styles from "./wework.module.scss";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { Typography } from "@mui/material";
import { WorkArr } from "../../constants/work";
const WeWork = () => {
  const { t } = useTranslation();
  const renderImg = useMemo(
    () =>
      WorkArr.map((item) => (
        <div className={styles.card}>
          <img src={item.img} alt="" />
        </div>
      )),
    [t]
  );
  return (
    <div className={styles.work}>
      <div className="container">
        <div className={styles.work__paragraph}>
          <Typography variant="h1">{t("work.title")}</Typography>
          <Typography variant="subtitle1" component="p">
            Quisque aliquet, libero consequat elementum convallis.
          </Typography>
        </div>
        <div className={styles.work__icons}>{renderImg}</div>
      </div>
    </div>
  );
};

export default WeWork;
