import React from 'react'
import {AboutContainer,ProductSlideImage,TextContaner} from './ProductBottomElement'
import whitetruck from '../../images/ProductTop.png';
import { animateScroll as scroll,Link } from 'react-scroll';
const ProductBottom = ({isOpen,toggle}) => {
    return (
      <AboutContainer id="About">
        <ProductSlideImage>
        <img src={whitetruck} alt=""  height="200px" width="320px"/>
        <img src={whitetruck} alt="" height="200px" width="320px"/>
        <img src={whitetruck} alt="" height="200px" width="320px"/>
        <img src={whitetruck} alt="" height="200px" width="320px"/>
     
        </ProductSlideImage>
        <TextContaner>
        <h3 className="text-left text-black font-bold text-5xl pb-8">Description</h3>
        <p className="text-left text-gray-800 text-2xl pb-8">We provide a best self drone easy to use and operate. With auto pilot, the device will take a beautiful view for
the best of flying operation. Drone light is every creators dream. Setting apperture manually and high battery
performance. With 2 Terabyte storage, you can take a lot of picture in one take. 4K Camera resolution make
your video clean and feels like a real environtment. Capture your moment in easy way effortlesly with auto
pilot system. No need to learn how to fly and operate drone. Enjoy your simple and easy flying experience.
Drone light is everything you need.</p>
        </TextContaner>
       
      </AboutContainer>
      
    )
}

export default ProductBottom