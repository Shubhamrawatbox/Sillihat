import React from 'react'
import { SliderData } from '../../Data/sliderdata'
import Slider from '../../molecule/slider/Slider'

const Banner = () => {
    return (
        <>
        <Slider slides={SliderData}/>
        </>
    )
}

export default Banner
