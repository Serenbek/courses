import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./DropUsLine.module.scss";
import leftimg from "../../assets/images/getintouch/illustration_courses_contact.svg";
import Devider from "../../devider/Devider";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import CustomButton from "../button/Button";

const DropUsLine = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = "service_ec0nuv9";
    const templateId = "template_ym13hbs";
    const userId = "ae5-bU9qaERVPbxVT";

    const templateParams = {
      name,
      email,
      subject,
      message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then(() => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");

        console.log("Email sent successfully");
      })
      .catch((error) => {
        console.error("Error sending email", error);
      });
  };

  return (
    <div className={styles.drop}>
      <div style={{ display: "flex", gap: "250px", alignItems: "center" }} className="container">
        <div className={styles.left__drop}>
          <img src={leftimg} alt="" />
        </div>
        <div className={styles.right__drop}>
          <div className={styles.get__form__paragraph}>
            <Devider text="Drop us a line" />
            <Typography variant="subtitle1" component="p">
              We normally respond within 2 business days
            </Typography>
          </div>
          <form className={styles.get__inputs} onSubmit={handleFormSubmit}>
            <input
              placeholder="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <input
              className={styles.input__message}
              placeholder="Message"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="flex" style={{ alignItems: "start", marginTop: "52px" }}>
              <CustomButton text="Send Message" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DropUsLine;
