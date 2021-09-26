import React, { useState } from "react";
import "./Project.scss";

const Project = () => {
  const [animate,noanimate]=useState(true);
  window.addEventListener('scroll',()=>{
    console.log(window.scrollY);
    if (window.scrollY > 800) {
      noanimate(false)
    }else{
      noanimate(true)
    }
  })
  return (
    <div className="project">
      <div className={animate ? 'about-project' : 'about-project active'}>
        <a href="/">
            Let's Talk about your projects
        </a>
      </div>
    </div>
  );
};

export default Project;
