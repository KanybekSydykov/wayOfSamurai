import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="data:image/jpeg;base64,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"
          alt="background pic of beach"
        ></img>
      </div>

      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;