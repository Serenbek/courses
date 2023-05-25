import React from "react";
import styles from "./Button.module.scss";
import { Typography } from "@mui/material";
import Image from "react"
import { useTranslation } from "react-i18next";

interface LabeledValue {
  imagebtn?: string;
  text?: string;
  link?: string;
  vector?: string;
}
const CustomButton: React.FC<LabeledValue> = ({
   imagebtn,
  text,
  link,
  vector,
}) => {
  return (
    <button className={styles.button__props}>
      <img src={imagebtn} alt={imagebtn} />
      <Typography  >
        {text}
      </Typography>
      <img className={styles.button__vector} src={vector} alt="" />
    </button> 
  );
};


export default CustomButton;
