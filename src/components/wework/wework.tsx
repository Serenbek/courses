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
      WorkArr.map((item, index) => (
        <div className={styles.card} key={`${item.img}_${index}`}>
          <img src={item.img} alt="work__icons" />
        </div>
      )),
    [t]
  );
  const renderImgMobile = useMemo(
    () =>
      WorkArr.slice(0, 2).map((item, index) => (
        <div className={styles.card} key={`${item.img}_${index}`}>
          <img src={item.img} alt="work__icons" />
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
        <div className={styles.work__icons__mobile}>{renderImgMobile}</div>
      </div>
    </div>
  );
};

export default WeWork;
