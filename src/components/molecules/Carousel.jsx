import React, { useState } from "react";
import Carousel from 'react-multi-carousel';
import '../../styles/cart.css'
const style = {
    cart : {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    }
}

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Carousels = ({data}) => {

    return (
        <>
        {data && data.index && data.index.length > 0 ? 
            <Carousel responsive={responsive} 
                showDots={true} 
                infinite={true} 
                swipeable={false}
                draggable={false}
                autoPlay={true}
                autoPlaySpeed={4000}
                >
                {data?.index?.map((item) =>(
                        <div className='item_slide'>
                            <img src={item.thumbnail} alt="" />
                        </div>
                ))}
            </Carousel>
         : ""
        }  
        </>
    );
};
export default Carousels;