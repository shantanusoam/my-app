import React from 'react'
import {AboutContainer,TextContaner } from './AboutMainElements'
import whitetruck from '../../images/AbouMain.png';
const AboutMain = ({isOpen,toggle}) => {
    return (
      <AboutContainer id="About">
        <TextContaner>
            <h1 className="text-left text-black font-bold text-6xl pb-8">Who we are and what we do</h1>
            <p className="text-left text-gray-800 pb-8">We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical </p>
        </TextContaner>
        <img src={whitetruck} alt="" width="1500rem"/>
      </AboutContainer>
      
    )
}

export default AboutMain