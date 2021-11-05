import React from 'react'
import {AboutContainer,SpaceContainer,AboutContainerImageContent2,SpaceTruck,AboutContainerContent,AboutContainerTextContent,AboutContainerHeading,AboutContainerSubHeading,AboutContainerPara,AboutContainerButton,AboutContainerImageContent,AboutContainerImage } from './DAboutSectionElement'
import whitetruck from '../../images/whitetruck.png';
const DAboutSection = ({isOpen,toggle}) => {
    return (
      <AboutContainer id="About">
        <AboutContainerImageContent>
        <img src={whitetruck} alt="Our services Truck (White Truck with Trailer running on black road)"/>
             </AboutContainerImageContent>
        
          <AboutContainerContent>
          <SpaceContainer>                 </SpaceContainer>
          
          
            <AboutContainerTextContent>
              {/* <AboutContainerHeading>KAL TIRES</AboutContainerHeading> */}
              <AboutContainerSubHeading>Our services</AboutContainerSubHeading>
              <AboutContainerPara>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw Through True Rich Attended does  </AboutContainerPara>
              <AboutContainerButton>See more</AboutContainerButton>
            </AboutContainerTextContent>
            
            
           
          </AboutContainerContent>
          {/* <AboutContainerImageContent2>
          <img src={bgimage} alt="" height="460px"/>
            </AboutContainerImageContent2> */}
      </AboutContainer>
      
    )
}

export default DAboutSection