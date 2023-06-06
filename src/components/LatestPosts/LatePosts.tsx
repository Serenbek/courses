import React from "react";
import styles from "./LatePosts.module.scss";
import Devider from "../../devider/Devider";
import { Typography } from "@mui/material";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { LateMob, LatestArr } from "../../constants/Latest";
import Vertical from "../VerticalCard/Vertical";
import overlay from "../../assets/images/latestpost/OVERLAY COLOR.svg";
const LatestPosts = () => {
  const { t } = useTranslation();
  const renderCard = useMemo(
    () => LatestArr.map((article) => <Vertical {...article} />),
    [t]
  );
  const renderCardAdaptive = useMemo(
    () =>
        LateMob.map((item, index) =>   
         (
        <div className={styles.adaptive__card}>
          <div className={styles.adaptive__img}>
            <img src={item.img} alt="icon" />
          </div>
          <div className={styles.card__paragraph}>
            <Typography variant="h1" >{item.text && t(item.text)}</Typography>
            <div className={styles.date}>
            <Typography variant="subtitle1" component="p" >May 29, 2017</Typography>
            <circle/>
            <Typography variant="subtitle1" component="p" >8 min read </Typography>
            </div>
          </div>
        </div>
      )),
    [t]
  );
  return (
    <div className={styles.late__posts}>
      <div className="container">
        <div className={styles.paragraph}>
          <Devider text="Latest Posts" />
          <div className={styles.card__mobile}>{renderCardAdaptive}</div>
          <div className={styles.paragraph__view_all}>
            <Typography variant="subtitle1" component="a">
              View All
            </Typography>
            <img src={overlay} alt="overlay" />
          </div>
        </div>
        <div className={styles.Card}>{renderCard}</div>
      </div>
    </div>
  );
};

export default LatestPosts;
