import scss from "./thirdBlock.module.scss";
import Typography from "@mui/material/Typography";
import thirdImage from "../../assets/images/thirdBlock/thirdImage.png";
import lineOrange from "../../assets/images/thirdBlock/lineOrange.svg";

function ThirdBlock() {
  return (
    <div className={scss.third}>
      <div className={scss.third__wrapper + " container"}>
        <Typography
          variant="subtitle1"
          gutterBottom
          className={scss.third__text__orange}
        >
          Nullam accumsan lorem in dui.
        </Typography>
        <div className={scss.third__content}>
          <div className={scss.third__left}>
            <img src={thirdImage} alt="thirdContent" />
          </div>
          <div className={scss.third__right}>
            <Typography variant="h3" gutterBottom className={scss.right__title}>
              Phasellus gravida semper nisi. Vestibulum rutrum, mi
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              className={scss.right__content__text}
            >
              Curabitur a felis in nunc fringilla tristique. Fusce egestas elit
              eget lorem. Etiam vitae tortor. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos hymenaeos.
            </Typography>
            <div className={scss.third__right__wrapper}>
              <div className={scss.third__left__text}>
                <img src={lineOrange} alt="lineOrange" />
                <Typography
                  variant="body2"
                  gutterBottom
                  className={scss.content__text}
                >
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis
                </Typography>
              </div>
              <div className={scss.third__right__text}>
                <img src={lineOrange} alt="lineOrange" />
                <Typography
                  variant="body2"
                  gutterBottom
                  className={scss.content__text}
                >
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdBlock;
