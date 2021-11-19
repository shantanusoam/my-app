import React from 'react'
import {AboutContainer,CardListRow} from './TrailerListElement'
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';
import tr1 from '../../images/trailer1.png';
import tr2 from '../../images/trailer2.png';
import tr3 from '../../images/trailer3.png';
import { animateScroll as scroll,Link } from 'react-scroll';


class TrailerList extends React.Component {
  constructor(){
      super();
      this.state = {
          lol: '',
          Trailers : [
              {
                animation: 'left',
                img:tr1,
                title:"DRY VAN TRAILERS",
                date:"See more",
                Description:"Dry Van Trailers are used to haul non-temperature sensitive products and come in various sizes and specifications to accommodate our customer’s needs. Kal Trailers keeps ready-to-go dry van trailers in its inventory at all times."
              },
              {
                animation: 'bottom',
                img:tr2,
                title:"REFRIGERATED TRAILERS",
                date:"See more",
                Description:"Our refrigerated trailers have an insulated cargo body equipped with a refrigeration unit in order to control cargo temperature. Kal Trailers keeps ready-to-go refrigerated trailers in its inventory at all times."
              },
              {
                animation: 'right',
                img:tr3,
                title:"USED TRUCKS",
                date:"See more",
                Description:"Designed to reduce your cost of ownership, our trucks improved fuel economy, enhanced safety features and lead the way in technological advancements and driver comfort."
              }

          ]
      }
  }
    componentDidMount() {
      document.title = "BigRig"
    }
    
    render() {
        
        const PageComponent = this.props.component
  
      return (
        <AboutContainer id="About">
         
         <h3 className="text-center text-black font-bold text-3xl pb-8 md:pb-3">Trailer</h3>
         <CardListRow>
             <div className="xl:px-14 xl:py-10 md:py-0 md:px-0 bg-white flex flex-row flex-wrap justify-center items-center space-y-5 ">
    {this.state.Trailers.map(trailer=>
    
    <Roll lol  key={trailer.img}>
    <div className="bg-white rounded-xl  m-9 hover:shadow-2xl flex-1 ">
                 <img src={trailer.img} alt="Trailers images" className="rounded-t-xl h-80 w-full object-cover"/>
   
            <div className="p-8">
                <h3 className="font-bold text-2xl mb-5">{trailer.title}</h3>
                <br />
                <h3 className="font-bold text-1xl mb-5 ">{trailer.Description  }</h3>
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