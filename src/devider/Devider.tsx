import React from "react";
import styles from "./Devider.module.scss";
import { Typography } from "@mui/material";

interface LabeledValue {
  text?: string | any;
}

const Devider: React.FC<LabeledValue> = ({ text }) => {
  return (
    <div className={styles.devider}>
      <Typography variant="h1">{text}</Typography>
    </div>
  );
};

export default Devider;
