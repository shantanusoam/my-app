import React from 'react'
import {AboutContainer,TextContaner } from './AboutMainElements'
import whitetruck from '../../images/AbouMain.png';
const AboutMain = ({isOpen,toggle}) => {
    return (
      <AboutContainer id="About">
        <TextContaner>
            <h1 className="text-left text-black font-bold text-6xl pb-8">Who we are and what we do</h1>
        
        </TextContaner>
        <img src={whitetruck} alt="Our services Truck on black road" width="1500rem"/>
        <TextContaner>
            <h1 className="text-left text-black font-bold text-4xl pb-8">Big Rig Canada INC</h1>
            <p className="text-left text-gray-800 text-2xl pb-8">Big Rig Canada is a large and continually-growing trucking company that starts in California as Kal Freight Inc, with over 700 trucks and 2,000 trailers and has over 800 employees. As a dynamic modern transportation company with a strategic corporate location based in Ontario, California, Kal Freight extended its reach to Canada opening a new location in Abbotsford, as Big Rig Canada.</p>
        </TextContaner>
      </AboutContainer>
      
    )
}

export default AboutMain