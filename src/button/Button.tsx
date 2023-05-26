import React from "react";
import styles from "./Button.module.scss";
import { Typography } from "@mui/material";
import Image from "react";
import { useTranslation } from "react-i18next";

interface LabeledValue {
  imagebtn?: string;
  text?: string;
  link?: string;
  vector?: string;
  nameIcon?: string;
}
const CustomButton: React.FC<LabeledValue> = ({
  imagebtn,
  text,
  link,
  vector,
  nameIcon,
}) => {
  return (
    <button className={styles.button__props}>
      <img className={styles.img} src={imagebtn} alt={nameIcon} />
      <Typography>{text}</Typography>
      <img className={styles.button__vector} src={vector} alt={nameIcon} />
    </button>
  );
};

export default CustomButton;
