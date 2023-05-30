import downloadApp from "../../assets/images/appBlock/appImage.png";
import scss from "./downApp.module.scss";
import Typography from "@mui/material/Typography";
import layer from "../../assets/images/appBlock/layer.svg";
import appleStore from "../../assets/images/appBlock/appleStore.svg";
import googlePlay from "../../assets/images/appBlock/googlePlay.svg";
import qrIcon from "../../assets/images/appBlock/qrIcon.svg";
import { useTranslation } from "react-i18next";

function AppBlock() {
  const { t } = useTranslation();

  return (
    <div className={scss.down__app}>
      <div className="container">
        <div className={scss.down__app__wrapper}>
          <div className={scss.left__app}>
            <Typography
              variant="h2"
              gutterBottom
              className={scss.left__title__app}
            >
              {t("app.downloadApp")}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              className={scss.left__text__app}
            >
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Phasellus leo dolor, tempus non, auctor
              et, hendrerit quis, nisi.
            </Typography>
            <div className={scss.qr__wrapper}>
              <div className={scss.left__qr__app}>
                <img src={qrIcon} alt="qrIcon" />
                <Typography variant="h6" gutterBottom className={scss.qr__text}>
                  {t("app.scanQR")}
                </Typography>
              </div>
              <div className={scss.left__line__app}>
                <img src={layer} alt="layer" />
              </div>
              <div className={scss.left__button__app}>
                <div className={scss.left__button}>
                  <div className={scss.apple__store__app}>
                    <img src={appleStore} alt="appleStore" />
                    <div>
                      <Typography
                        variant="caption"
                        gutterBottom
                        className={scss.title__apple__google}
                      >
                        {t("app.downloadOn")}
                      </Typography>
                      <Typography
                        variant="h6"
                        gutterBottom
                        className={scss.text__apple__google}
                      >
                        Apple Store
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className={scss.right__button__app}>
                  <div className={scss.google__play__app}>
                    <img src={googlePlay} alt="googlePlay" />
                    <div>
                      <Typography
                        variant="caption"
                        gutterBottom
                        className={scss.title__apple__google}
                      >
                        {t("app.downloadFrom")}
                      </Typography>
                      <Typography
                        variant="h6"
                        gutterBottom
                        className={scss.text__apple__google}
                      >
                        Google Play
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={scss.right__app}>
            <img src={downloadApp} alt="downloadApp" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppBlock;
