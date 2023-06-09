import React from "react";
import styles from "./gorizontal.module.scss";
import { Typography } from "@mui/material";
import bg from "../../assets/images/gorizontal/IMG.svg";
import avatar from "../../assets/images/VerticalCard/avatar.svg";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import Devider from "../../devider/Devider";
import star from "../../assets/images/featured/Vector.svg";
import clock from "../../assets/images/featured/ic_clock.svg";
import rating from "../../assets/images/featured/ic_skill_level_intermediate.svg";
import { useMemo } from "react";
import { FeaturedArr } from "../../constants/featured";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prev from "../../assets/images/featured/prev.svg";
import next from "../../assets/images/featured/next.svg";
import { Button } from "@mui/material";
import { useRef } from "react";
interface VerticalValue {
  btntext?: string;
  newprice?: string;
  name?: string;
  nameIcon?: string;
  price?: string;
  teacher?: string;
  title?: string;
  bg?:string;
  type?:string

}
const GorizontalCard: React.FC<VerticalValue> = ({
  btntext,
  newprice,
  name,
  price,
  title,
  teacher,
  bg,
  type
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.featured__card} >
      <div className={styles.top__card_img}>
        <img className={styles.card__img} src={bg} alt="vertical__icon" />
        <div className={styles.forbtn}>
          <button
            className={btntext ? styles.card__btn : styles.card__btn__none}
          >
            {btntext}
          </button>
        </div>
      </div>
      <div className={styles.card__content_bottom}>
        <div className={styles.bottom__management_price}>
          <Typography variant="subtitle1" component="a">
           {type}
          </Typography>
          <div style={{ display: "flex", gap: "4px" }} className={styles.price}>
            <Typography
              variant="h1"
              style={{ color: "#919EAB", textDecoration: "line-through" }}
            >
              {newprice}
            </Typography>
            <Typography variant="h1"> {price}</Typography>
          </div>
        </div>
        <div className={styles.bottom__dont_waste}>
          <Typography variant="h2">{title}</Typography>
        </div>
        <div className={styles.card__result}>
          <div className={styles.result__gap}>
            <img src={star} alt="" />
            <Typography variant="h3">4.8</Typography>
            <Typography variant="subtitle1" component="p">
            (10,35k reviews)
            </Typography>
          </div>
          <hr />
          <div className={styles.card__students}>
            <Typography variant="h4">180k</Typography>
            <Typography variant="subtitle2" component="b">
              {t("featured.student")}
            </Typography>
          </div>
        </div>
        <div className={styles.card__peaple}>
          <img src={avatar} alt="card__avatar" />
          <Typography variant="subtitle2" component="b">
            {name && (name)}
          </Typography>
          <Typography variant="subtitle2" component="p">
            {teacher && (teacher)}
          </Typography>
        </div>
        <hr className={styles.dashed__hr} />
        <div className="flex" style={{ marginTop: "32px", gap: "22px" }}>
          <div className={styles.card__clock}>
            <img src={clock} alt="clock" />
            <Typography variant="subtitle2" component="p">
              {t("featured.hours")}
            </Typography>
          </div>
          <div className={styles.card__rating}>
            <img src={rating} alt="rating" />
            <Typography variant="subtitle2" component="p">
              {t("featured.beginner")}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GorizontalCard;
