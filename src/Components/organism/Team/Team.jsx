import React from "react";
import Heading from "../../atom/heading/Heading";
import Paragraph from "../../atom/paragraph/Paragraph";
import TeamMember from "../../molecule/teammember/TeamMember";
import './Team.scss';
import { TiSocialLinkedin } from "react-icons/ti";

const Team = () => {
  return (
    <section className="team" id="team">
      <Heading prop="The Team." />
      <div className="teampara">
        <Paragraph
          prop="Over 40+ years of collective industry experience.
        Worked with 12 startups and businesses as a service provider.
        Experienced with top-notch MNCs and startups in Silicon Valley."
      size="para-small"
      bold="para-none"
        />
      </div>
      <div className="inner-team">
          <TeamMember/>
          <div className="linkdin">
                <TiSocialLinkedin className="one"/>
                <TiSocialLinkedin className="one"/>
            </div>
      </div>
    </section>
  );
};

export default Team;
