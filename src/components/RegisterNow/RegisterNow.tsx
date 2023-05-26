import React from "react";
import scss from "./RegisterNow.module.scss";
import img_email from "../../assets/register/Asset 1 2.svg";

function RegisterNow() {
  return (
    <div className={scss.container}>
      <div className={scss.wrapper}>
        <div className={scss.left}>
          <h1>Register Now Forget 20% Discount Every Courses</h1>
          <p>
            Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus.
            Sed magna purus, fermentum eu
          </p>
          <div className={scss.in}>
            <input type="email" placeholder="Enter your email"/>
            <button>Register</button>
          </div>
        </div>
        <div className={scss.right}>
          <img src={img_email} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RegisterNow;
