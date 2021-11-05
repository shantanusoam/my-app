import React from 'react'


import { Conatainer,ImageContainer,ContentContainer,ContentHeadingContainer,Heading,SubHeading,ContentStepsContainer,StepNoContainer ,NoContainer,StarightLine,StepNoContentContainer,SteapHeadingContainer,StepHeading,StepSubheading} from './ProvideExpertServiceElement';
import OpenTrailer from '../../images/PES.png'
const ProvideExpertService = ({isOpen,toggle}) => {
    return (
    
          
             <>
<Conatainer>
    
    <ContentContainer>
        <ContentHeadingContainer><Heading>We Provide Expert Service and aim to have a long term with you</Heading>
        <SubHeading>We provide a full range of front end mechanical repairs for all makes and models of cars, no matter</SubHeading>
    </ContentHeadingContainer>
    <ContentStepsContainer>
        <StepNoContainer>
            <NoContainer>01</NoContainer>
            <StarightLine></StarightLine>
            <NoContainer>02</NoContainer>
            <StarightLine></StarightLine>
            <NoContainer>03</NoContainer>
        </StepNoContainer>
        <StepNoContentContainer>
            <SteapHeadingContainer><StepHeading>Select your Trailers</StepHeading><StepSubheading>Seelect trailer from our wide varity of trailer</StepSubheading></SteapHeadingContainer>
            <SteapHeadingContainer><StepHeading>Book an Appointment</StepHeading><StepSubheading>Through True Rich Attended does no end it his mother since real</StepSubheading></SteapHeadingContainer>
            <SteapHeadingContainer><StepHeading>Get your Trailer</StepHeading><StepSubheading>Ecstatic unsatiable saw his giving Remain expense you position concluded. </StepSubheading></SteapHeadingContainer>

        </StepNoContentContainer>
    </ContentStepsContainer>
    </ContentContainer>
    <ImageContainer>
    <img src={OpenTrailer} alt="" width="413px"/>
    </ImageContainer>
</Conatainer>
             </>
             
        
    )
}

export default ProvideExpertService