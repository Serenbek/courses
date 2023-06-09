import React from "react";
import styles from "./GetInTouch.module.scss";
import Devider from "../../devider/Devider";
import { Typography } from "@mui/material";
import { GetInTouchArr } from "../../constants/GetInTouch";
import { useMemo } from "react";
import social from "../../assets/images/getintouch/social.svg";
import { Map, YMaps } from "@pbe/react-yandex-maps";
import map from "../../assets/images/getintouch/map.svg"
const GetInTouch = () => {
  const renderCard = useMemo(
    () =>
      GetInTouchArr.map((item, index) => (
        <div className={styles.contact}>
          <div className={styles.icon}>
            <img src={item.icon} alt="" />
            <Typography variant="subtitle1" component="h1">
              {item.text}
            </Typography>
          </div>
          <div className="flex">
            <Typography variant="subtitle1" component="p">
              {item.title}
            </Typography>
          </div>
        </div>
      )),
    []
  );
  return (
    <div className={styles.GetInTouch}>
        <div className={styles.adaptive}>
      <div style={{ display: "flex", gap:"152px" }} className="container">
        <div className={styles.content__left}>
          <Devider text="Get In Touch" />
          <div className={styles.left__contact}>{renderCard}</div>
          <hr />
          <div className={styles.left__follow_us}>
            <Typography variant="subtitle1" component="p">
              Follow Us
            </Typography>
            <img src={social} alt="" />
          </div>
        </div>
        <div className={styles.content__right}>
        <div className={styles.get__map}>
        <img src={map}alt="" />
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default GetInTouch;
