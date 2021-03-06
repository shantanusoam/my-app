import React from 'react'
import {AboutContainer,CardListRow,NavLink,LinkRo} from './TrailerListElement'
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';
import EmblaCarousel from "./EmblaCarousel";
import { animateScroll as scroll,Link } from 'react-scroll';
import {Trailers} from '../../trailer.js'
const SLIDE_COUNT = 3;
const slides = Array.from(Array(SLIDE_COUNT).keys());
class TrailerList extends React.Component {
  constructor(){
      super();
      this.state = {
     
         
      }
  }
   
    
    render() {
        
        const PageComponent = this.props.component
  
      return (
        <AboutContainer id="Products">
         
         <h3 className="text-center text-black font-bold text-3xl pb-8 md:pb-3">Inventory</h3>
         <CardListRow>
             <div className="xl:px-14 xl:py-10 md:py-0 md:px-0 bg-white flex flex-row flex-wrap justify-center items-center space-y-5 ">
    {Trailers.map(trailer=>
   <LinkRo key={trailer.id} to={{
    pathname: "/Product",
    state: {id:trailer.id} // your data array of objects
  }} className=" flex-1 " key={trailer.id} id={trailer.id}>
    <Fade bottom key={trailer.id} >
      
    <div className="bg-white rounded-xl  m-9 hover:shadow-2xl flex-1 " key={trailer.id} id={trailer.id}>
      <EmblaCarousel slides={slides} id={trailer.id}/>
                 {/* <img src={trailer.img} alt="Trailers images" className="rounded-t-xl h-80 w-full object-cover"/> */}
   
            <div className="p-8">
                <h3 className="font-bold text-2xl mb-5">{trailer.title}</h3>
                <br />
                <h3 className=" text-1xl mb-5 ">{trailer.Description}</h3>
            <NavLink key={trailer.id} to={{
    pathname: "/Product",
    state: {id:trailer.id} // your data array of objects
  }}><p>{trailer.date}</p></NavLink>
            
    </div>
      
     
    </div>
   
    </Fade>
    </LinkRo>
    )
    }
    
    
   {/* <Fade bottom>
   <div className="bg-white rounded-xl hover:shadow-2xl m-9">
                 <img src={tr2} alt="boy with camera" className="rounded-t-xl h-80 w-full object-cover"/>
   
            <div className="p-8">
                <h3 className="font-bold text-2xl mb-5">Build a Card</h3>
                <br />
            <p>20 jan 2020</p>
            
    </div>
      
     
   </div>
   </Fade>
 
   <Roll right>
   <div className="bg-white rounded-xl hover:shadow-2xl m-9">
                 <img src={tr3} alt="boy with camera" className="rounded-t-xl h-80 w-full object-cover"/>
   
            <div className="p-8">
                <h3 className="font-bold text-2xl mb-5">Build a Card</h3>
                <br />
            <p>20 jan 2020</p>
            
    </div>
      
     
   </div>
   </Roll> */}
  
   
   
   </div>
   
             
         </CardListRow>
         


      </AboutContainer>
      )
    }
  }
  const TrailerLists = ({isOpen,toggle}) => {
    return (
      <AboutContainer id="About">
         
         <h3 className="text-center text-black font-bold text-3xl pb-8 md:pb-3">Trailer</h3>
         <CardListRow>
             <div className="xl:px-14 xl:py-10 md:py-0 md:px-0 bg-white flex flex-row flex-wrap justify-center items-center space-y-5 ">
    {this.state.Trailers.map(trailer=>
    <Roll left key={trailer.img}>
    <div className="bg-white rounded-xl  m-9 hover:shadow-2xl">
                 <img src={trailer.img} alt="boy with camera" className="rounded-t-xl h-80 w-full object-cover"/>
   
            <div className="p-8">
                <h3 className="font-bold text-2xl mb-5">{trailer.title}</h3>
                <br />
            <p>{trailer.date}</p>
            
    </div>
      
     
   </div>
    </Roll>)
    }
    
    
   {/* <Fade bottom>
   <div className="bg-white rounded-xl hover:shadow-2xl m-9">
                 <img src={tr2} alt="boy with camera" className="rounded-t-xl h-80 w-full object-cover"/>
   
            <div className="p-8">
                <h3 className="font-bold text-2xl mb-5">Build a Card</h3>
                <br />
            <p>20 jan 2020</p>
            
    </div>
      
     
   </div>
   </Fade>
 
   <Roll right>
   <div className="bg-white rounded-xl hover:shadow-2xl m-9">
                 <img src={tr3} alt="boy with camera" className="rounded-t-xl h-80 w-full object-cover"/>
   
            <div className="p-8">
                <h3 className="font-bold text-2xl mb-5">Build a Card</h3>
                <br />
            <p>20 jan 2020</p>
            
    </div>
      
     
   </div>
   </Roll> */}
  
   
   
   </div>
   
             
         </CardListRow>
         


      </AboutContainer>
      
    )
}
export default TrailerList