import scss from "./teachers.module.scss";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import { teachersCard } from "../../constants/teachers";

function Teachers() {
  const { t } = useTranslation();
  return (
    <div className={scss.teachers}>
      <div className={scss.teachers__wrapper + " container"}>
        <div className={scss.teachers__title__text}>
          <Typography
            variant="h2"
            gutterBottom
            className={scss.teachers__title}
          >
            {t("teachers.meetTeachers")}
          </Typography>
          <div className={scss.teachers__block__text}>
            <Typography
              variant="body1"
              gutterBottom
              className={scss.teachers__text}
            >
              {t("teachers.sisince")}
            </Typography>
          </div>
        </div>
        <div className={scss.teachers__card}>
          {teachersCard.map((item, index) => (
            <div className={scss.teachers__item} key={`${item.title}_${index}`}>
              <Typography
                variant="h6"
                gutterBottom
                className={scss.teachers__item__title}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                className={scss.teachers__item__text}
              >
                {item.date}
              </Typography>
              <img
                src={item.img}
                alt="card"
                className={scss.teachers__item__img}
              />
            </div>
          ))}
        </div>
        <div className={scss.teachers__button}>
          <Button variant="outlined" className={scss.techers__btn}>
            {t("teachers.viewAll")}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Teachers;
