import React, { useMemo } from 'react';
import styles from "./Lessons.module.scss";
import Devider from "../../devider/Devider";
import { Typography } from "@mui/material";
import { lessonsArr } from "../../constants/lessons";
import bg from "../../assets/images/lessons/ic_play.svg"
const lessons = () => {
  const RenderOptions = useMemo(
    () =>
    lessonsArr.map((item) => (
        <React.Fragment >
          <select className={styles.wrapper__locations}>
            <option className={styles.bg__player}>
                <img src={bg} alt="" />
                {item.option}
                </option>
            <option>
              Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere
              vulputate arcu. Donec mi odio, faucibus at, scelerisque quis,
              convallis in,
            </option>
          </select>
        </React.Fragment>
      )),
    []
  );

  return (
    <div className={styles.lesson}>
      <div className="container">
        <div className={styles.lessons__left}>
          <Devider text="Lessons" />
          {RenderOptions}
        </div>
        <div className={styles.lessons__right}></div>
      </div>
    </div>
  );
};

export default lessons;
