import scss from "./CompleteDigital.module.scss";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import arrow from "../../assets/images/completeDigital/Vector.svg";
import star from "../../assets/images/completeDigital/star.svg";
import avatar from "../../assets/images/completeDigital/avatar.svg";
import clock from '../../assets/images/completeDigital/ic_clock.svg'
import skill from '../../assets/images/completeDigital/ic_skill_level_advanced.svg'
import file from '../../assets/images/completeDigital/ic_file.svg'
import global from '../../assets/images/completeDigital/ic_global.svg'
import question from '../../assets/images/completeDigital/ic_question.svg'

function CompleteDigital() {
    const { t } = useTranslation();
  return (
    <div className="container">
      <div className={scss.wrapper}>
        <div className={scss.wrap_box}>
        <div className={scss.nav}>
          <Typography component="p" className={scss.p_}>{t("complete.desigin2")}</Typography>
          <img src={arrow} alt="" />
          <Typography component="p" className={scss.p_width}>{t("complete.graphic")}</Typography>
          <img src={arrow} alt="" />
          <Typography component="p" className={scss.p_color}>
          {t("complete.complete")}
          </Typography>
        </div>
        <div className={scss.main}>
          <div className={scss.left}>
            <div className={scss.top_text}>
              <Typography
                variant="subtitle1"
                component="p"
                className={scss.p_best}
              >
                {t("complete.best")}
              </Typography>
              <Typography variant="h3">
              {t("complete.complete")}
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                className={scss.p_design}
              >
                {t("complete.desigin")}
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                className={scss.p_colorr}
              >
                {t("complete.master")}
              </Typography>
              <div className={scss.star}>
                <img src={star} alt="" />
                <Typography variant="h6">4.8</Typography>
                <Typography component="p" className={scss.p_color}>
                  ({t("complete.reviews")})
                </Typography>
                <hr />
                <Typography variant="subtitle1" component="p">
                  180k
                </Typography>
                <Typography component="p" className={scss.p_font}>
                  {t("complete.students")}
                </Typography>
              </div>
              <div className={scss.avatar}>
                <img src={avatar} alt="" />
                <Typography component="p">Kristin Watson</Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  className={scss.p_font}
                >
                  +10 teachers
                </Typography>
              </div>
            </div>
            <hr className={scss.hr}/>
            <div className={scss.bottom_icon}>
                <div>
                    <img src={clock} alt="clock" />
                    <Typography component="p">{t("complete.hours")}</Typography>
                </div>
                <div>
                    <img src={skill} alt="level" />
                    <Typography component="p">{t("complete.allLevels")}</Typography>
                </div>
                <div>
                    <img src={file} alt="file" />
                    <Typography component="p">{t("complete.lessons")}</Typography>
                </div>
                <div>
                    <img src={global} alt="global" />
                    <Typography component="p">{t("complete.english")}</Typography>
                </div>
                <div>
                    <img src={question} alt="question" />
                    <Typography component="p">{t("complete.quizzes")}</Typography>
                </div>
            </div>
          </div>

          <div className={scss.right}>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default CompleteDigital;
