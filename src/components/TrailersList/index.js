import React from 'react'
import {AboutContainer,CardListRow} from './TrailerListElement'
import tr1 from '../../images/trailer1.png';
import tr2 from '../../images/trailer2.png';
import tr3 from '../../images/trailer3.png';
import { animateScroll as scroll,Link } from 'react-scroll';

const TrailerList = ({isOpen,toggle}) => {
    return (
      <AboutContainer id="About">
         
         <h3 className="text-center text-black font-bold text-3xl pb-8">Trailer</h3>
         <CardListRow>
         <div className="px-14 py-10 bg-white flex flex-row flex-wrap justify-center items-center space-y-5 ">
         <div className="bg-white rounded-xl  m-9 hover:shadow-2xl">
                 <img src={tr1} alt="boy with camera" className="rounded-t-xl h-80 w-full object-cover"/>
   
            <div className="p-8">
                <h3 className="font-bold text-2xl mb-5">Build a Card</h3>
                <br />
            <p>20 jan 2020</p>
            
    </div>
      
     
   </div>
   <div className="bg-white rounded-xl hover:shadow-2xl m-9">
                 <img src={tr2} alt="boy with camera" className="rounded-t-xl h-80 w-full object-cover"/>
   
            <div className="p-8">
                <h3 className="font-bold text-2xl mb-5">Build a Card</h3>
                <br />
            <p>20 jan 2020</p>
            
    </div>
      
     
   </div>
   <div className="bg-white rounded-xl hover:shadow-2xl m-9">
                 <img src={tr3} alt="boy with camera" className="rounded-t-xl h-80 w-full object-cover"/>
   
            <div className="p-8">
                <h3 className="font-bold text-2xl mb-5">Build a Card</h3>
                <br />
            <p>20 jan 2020</p>
            
    </div>
      
     
   </div>
   
   
   </div>
   
             
         </CardListRow>
         


      </AboutContainer>
      
    )
}

export default TrailerList