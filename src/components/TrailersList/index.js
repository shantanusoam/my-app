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
                title:"Trailer1",
                date:"20 jan 2020",
                Description:"We provide a best self drone easy to use and operate. With auto pilot, the device will take a beautiful view for the best of flying operation. Drone light is every creators dream. Setting apperture manually and high battery performance. With 2 Terabyte storage, you can take a lot of picture in one take. 4K Camera resolution make your video clean and feels like a real environtment. Capture your moment in easy way effortlesly with auto pilot system. No need to learn how to fly and operate drone. Enjoy your simple and easy flying experience. Drone light is everything you need."
              },
              {
                animation: 'bottom',
                img:tr2,
                title:"Trailer2",
                date:"20 jan 2020",
                Description:"We provide a best self drone easy to use and operate. With auto pilot, the device will take a beautiful view for the best of flying operation. Drone light is every creators dream. Setting apperture manually and high battery performance. With 2 Terabyte storage, you can take a lot of picture in one take. 4K Camera resolution make your video clean and feels like a real environtment. Capture your moment in easy way effortlesly with auto pilot system. No need to learn how to fly and operate drone. Enjoy your simple and easy flying experience. Drone light is everything you need."
              },
              {
                animation: 'right',
                img:tr3,
                title:"Trailer3",
                date:"20 jan 2020",
                Description:"We provide a best self drone easy to use and operate. With auto pilot, the device will take a beautiful view for the best of flying operation. Drone light is every creators dream. Setting apperture manually and high battery performance. With 2 Terabyte storage, you can take a lot of picture in one take. 4K Camera resolution make your video clean and feels like a real environtment. Capture your moment in easy way effortlesly with auto pilot system. No need to learn how to fly and operate drone. Enjoy your simple and easy flying experience. Drone light is everything you need."
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
    <div className="bg-white rounded-xl  m-9 hover:shadow-2xl">
                 <img src={trailer.img} alt="Trailers images" className="rounded-t-xl h-80 w-full object-cover"/>
   
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