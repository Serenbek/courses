import Slider from "react-slick";
import styles from "./Featured.module.scss";
import { Typography } from "@mui/material";
import Devider from "../../devider/Devider";
import avatar from "../../assets/images/featured/Avatar.svg";
import star from "../../assets/images/featured/Vector.svg";
import clock from "../../assets/images/featured/ic_clock.svg";
import rating from "../../assets/images/featured/ic_skill_level_intermediate.svg";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { FeaturedArr } from "../../constants/featured";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prev from "../../assets/images/featured/prev.svg";
import next from "../../assets/images/featured/next.svg";
import { Button } from "@mui/material";
import { useRef } from "react";

const Featured = () => {
  const { t } = useTranslation();
  const arrowRef = useRef<Slider>(null);
  const renderCard = useMemo(
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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        },
      },
    ],
  };

  return (
    <div className={styles.featured}>
      <div className="container">
        <div className={styles.main__slider}>
          <div className={styles.paragraph}>
            <div className={styles.paragraph__under}>
              <Devider text="Featured Courses" />
              <Typography variant="subtitle1" component="p">
                Nullam accumsan lorem in dui. Praesent ac massa at ligula
                laoreet iaculis.
              </Typography>
            </div>
            <div className={styles.buttons}>
              <button
                className={styles.prev}
                onClick={() => arrowRef.current?.slickPrev()}
              >
                <img src={prev} alt="Prev arrow" />
              </button>
              <button
                className={styles.next}
                onClick={() => arrowRef.current?.slickNext()}
              >
                <img src={next} alt="Next arrow" />
              </button>
            </div>
          </div>
          <div className={styles.cards}>
            <Slider ref={arrowRef} {...settings}>
              {renderCard}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
