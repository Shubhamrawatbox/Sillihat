import React from "react";
import { Clientdata } from "../../Data/TeamData";

const ClientPhoto = () => {
  return (
    <div className="client-inner">
      {Clientdata.map((data, index) => {
        return (
          <div className="clinet-box">
            <img src={data.Clientimage} alt="" key={index} />
          </div>
        );
      })}
    </div>
  );
};

export default ClientPhoto;
