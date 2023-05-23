import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import scss from "./Test.module.scss";
import { useTranslation } from "react-i18next";

const Test = () => {
  const { t } = useTranslation();
  return (
    <div className={scss.wrapper}>
      <div className="container">
        <p>{t("test.test2")}</p>
        <div className={scss.test__main}>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          />
        </div>
      </div>
    </div>
  );
};

export default Test;
