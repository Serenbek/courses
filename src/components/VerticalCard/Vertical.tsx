import React from "react";
import styles from "./Vertical.module.scss";
import { Typography } from "@mui/material";
import bg from "../../assets/images/VerticalCard/IMG.svg";
import avatar from "../../assets/images/VerticalCard/avatar.svg";
import { useTranslation } from "react-i18next";
interface VerticalValue {
    image?: string;
    text?: string;
    link?: string;
    name?: string;
    nameIcon?: string;
    date?:string
    number?:string
  }
const Vertical: React.FC <VerticalValue>= ({
        image,
        text,
        name,
        date,
        nameIcon,
        number
      }) => {
        const { t } = useTranslation();
  return (
    <div className={styles.vertical}>
      <div className={styles.vertical__img}>
        <img src={image} alt="vertical__main_icon" />
      </div>
      <div className="flex" style={{gap:"24px", marginTop:"24px",justifyContent:"center"}}>
        <div className={styles.vertical__calendar}>
          <Typography variant="h4">{date && t(date)}</Typography>
          <hr />
          <Typography variant="h2">{number}</Typography>
        </div>
        <div className={styles.vertical__right}>
          <Typography variant="h1">{text && t(text)}</Typography>
          <Typography variant="subtitle1" component="p">
          {t("latest.title")}
          </Typography>
          <div className={styles.right__persone}>
          <div className={styles.vartical__img}>
            <img src={nameIcon} alt="name__icon" />
          </div>
          <div className={styles.persone__name}>
            <Typography variant="subtitle1" component='p'> {name && t(name)}</Typography>
            <Typography variant="subtitle1" component="a">
              8 min read
            </Typography>
          </div>
        </div>
        </div>
     
      </div>
    </div>
  );
};

export default Vertical;
