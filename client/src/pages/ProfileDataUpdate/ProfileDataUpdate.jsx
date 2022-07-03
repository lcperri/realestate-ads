import React, { useState } from "react";

import AsideBar from "../../components/AsideBar/AsideBar";
import PersonalData from "../../components/PersonalData/PersonalData";
import PasswordUpdate from "../../components/PasswordUpdate/PasswordUpdate";
import EmailUpdate from "../../components/EmailUpdate/EmailUpdate";

import styles from "./ProfileDataUpdate.module.css";

const ProfileDataUpdate = () => {
  const [isButton, setButton] = useState("Data");

  return (
    <div className={styles.conteiner}>
      <div className={styles.infoconteiner}>
        <AsideBar setButton={setButton} />

        {isButton === "Data" && <PersonalData />}
        {isButton === "Pass" && <PasswordUpdate />}
        {isButton === "email" && <EmailUpdate />}
      </div>
    </div>
  );
};

export default ProfileDataUpdate;
