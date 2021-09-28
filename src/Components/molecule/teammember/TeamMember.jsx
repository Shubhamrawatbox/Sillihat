import React from "react";
import Span from "../../atom/span/Span";
import { Teamdata } from "../../Data/TeamData";


const TeamMember = () => {
  return (
    <div className="teamwrapper">
      {Teamdata.map((data, index) => {
        return (
          <div className="box">
            <div className="image">
              <img src={data.Teamimage} alt="Not Found" key={index} />
            </div>
            <div className="teamcontent">
              <h4>{data.Teamname}</h4>
              <Span props={data.Position} />
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default TeamMember;
