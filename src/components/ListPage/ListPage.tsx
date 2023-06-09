import React from "react";
import styles from "./ListPage.module.scss";
import Slider from "react-slick";
import Devider from "../../devider/Devider";
import { TextField, Typography, Pagination } from "@mui/material";
import { ListCard, ListOptionArr, ListStarArr } from "../../constants/list";
import { useMemo } from "react";
import adaptivebtn from "../../assets/images/gorizontal/Button (1).svg"
import { render } from "@testing-library/react";
import GorizontalCard from "../GorizontalCard/GorizontalCard";
import { useState } from "react";
import { FeaturedArr } from "../../constants/featured";
import { useTranslation } from "react-i18next";
import avatar from "../../assets/images/featured/Avatar.svg";
import star from "../../assets/images/featured/Vector.svg";
import clock from "../../assets/images/featured/ic_clock.svg";
import rating from "../../assets/images/featured/ic_skill_level_intermediate.svg";
const List = () => {
  const { t } = useTranslation();
  const renderImg = useMemo(
    () =>
      ListStarArr.map((item, index) => (
        <div className={styles.star__img} key={index}>
          <img src={item.img} alt="" />
          <div className={styles.up}>
            <Typography variant="subtitle1" component="p">
              & Up
            </Typography>
          </div>
        </div>
      )),
    []
  );
  const RenderOptions = useMemo(
    () =>
      ListOptionArr.map((item) => (
        <React.Fragment key={item.title}>
          <Typography variant="subtitle1" component="p">
            {item.title}
          </Typography>
          <select className={styles.wrapper__locations}>
            <option>{item.option}</option>
          </select>
        </React.Fragment>
      )),
    []
  );
  const [searchText, setSearchText] = useState("");
  const renderCard = ListCard.map((card) => (
    <GorizontalCard
      key={`${card.name}-${card.teacher}`}
      type={card.type}
      btntext={card.btntext}
      newprice={card.newprice}
      name={card.name}
      price={card.price}
      title={card.title}
      teacher={card.teacher}
      bg={card.bg}
    />
  ));
  const filteredRenderCard = renderCard.filter((card) =>
    card.props.type.toLowerCase().includes(searchText.toLowerCase())
  );
  const renderCardMob = useMemo(
    () =>
      FeaturedArr.map((item, index) => (
        <div className={styles.featured__card} key={`${item.bg}_${index}`}>
          <div className={styles.top__card_img}>
            <img
              className={styles.card__img}
              src={item.bg}
              alt="vertical__icon"
            />
            <div className={styles.forbtn}>
              <button
                className={
                  item.btntext ? styles.card__btn : styles.card__btn__none
                }
              >
                {item.btntext}
              </button>
            </div>
          </div>
          <div className={styles.card__content_bottom}>
            <div className={styles.bottom__management_price}>
              <Typography variant="subtitle1" component="a">
               {t("featured.management1")}
              </Typography>
              <div
                style={{ display: "flex", gap: "4px" }}
                className={styles.price}
              >
                <Typography
                  variant="h1"
                  style={{ color: "#919EAB", textDecoration: "line-through" }}
                >
                  {t(item.newprice)}
                </Typography>
                <Typography variant="h1"> {t(item.price)}</Typography>
              </div>
            </div>
            <div className={styles.bottom__dont_waste}>
              <Typography variant="h2">{t(item.title)}</Typography>
            </div>
            <div className={styles.card__result}>
              <div className={styles.result__gap}>
                <img src={star} alt="" />
                <Typography variant="h3">4.8</Typography>
                <Typography variant="subtitle1" component="p">
                  (1,089)
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
              {item.name && t(item.name)}
              </Typography>
              <Typography variant="subtitle2" component="p">
              {item.teacher && t(item.teacher)}
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
      )),
    [t]
  );
  return (
    <>
      <div style={{ display: "flex", marginTop: "40px" }} className="container">
        <Devider text="Courses" />
        <img className={styles.adaptive__btn} src={adaptivebtn} alt="" />
      </div>
      <div className={styles.list__page}>
        <div className="container" style={{ display: "flex", gap: "64px" }}>
          <div className={styles.content__left}>
            <div className={styles.input__background}>
              <input
                className={styles.searching__input}
                type="search"
                name="searching__input"
                id=""
                placeholder="Search..."
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
            <div className={styles.rating}>{renderImg}</div>
            <div className={styles.list__selections}>{RenderOptions}</div>
          </div>
          <div className={styles.content__right}>
            {filteredRenderCard}
            <Pagination count={10} />
          </div>
          <div className={styles.card__mobile}>{renderCardMob}  <Pagination count={10} /> </div>
        </div>
      </div>
    </>
  );
};

export default List;
