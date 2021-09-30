import React, { useState } from 'react'
import { TechnologyData } from '../../Data/Carddata';

const PhotoTechnology = () => {
  const [animate,getanimate]=useState(false);
  window.addEventListener('scroll',()=>{
    if(window.scrollY > 2200){
      getanimate(true)
    }else{
      getanimate(false)
    }
  })
    return (
        <div className="inner-technology">
        {TechnologyData.map((e, index) => {
          return (
            <div className={animate ? "box active" : "box"}>
              <img src={e.photo} alt="bahh" key={index} />;
            </div>
          );
        })}
      </div>
    )
}

export default PhotoTechnology
