import React from "react";
import { verifyUser } from "../services/auth-Service";
import welcomeLogoImg from "../assets/images/Easy_Store_(2).png";

import { NavLink, useParams } from "react-router-dom";

const Welcome = () => {
  const params = useParams();
  console.log(params.confirmationCode);

  if (params.confirmationCode === "/confirm/:confirmationCode") {
    verifyUser(params.confirmationCode);
  }
  verifyUser(params.confirmationCode);
  return (
    <div className="welcome_container">
      <img src={welcomeLogoImg} alt="" />

      <h3>Account confirmed!</h3>

      <NavLink to={"/"}>Please Login</NavLink>
    </div>
  );
};

export default Welcome;
