import React from 'react'
import ImageSliderLists from './imageSliderLists'
import {useEffect, useRef} from 'react';

import FontAwesome from 'react-fontawesome'
import './imageSlider.css'
import { useDispatch, useSelector } from 'react-redux'
import { offerCountAction } from '../../store/cartSlider';


export default function ImageSlider() {
  
    const timeout=useRef(null);
     
    const count=useSelector(state=>state.home.count);
    console.log(count);
    const dispatch = useDispatch();

    const leftArrowOfferHandler=()=>{
       
        dispatch(offerCountAction.prev());
    }
    
    const RightArrowOfferHandler=()=>{
       
        dispatch(offerCountAction.next());
    }


    useEffect(()=>{
       const RightArrowOfferHandler=()=>{
            console.log(count);
            dispatch(offerCountAction.next());
        };
         timeout.current= setTimeout(RightArrowOfferHandler,800);

        return function(){
            if(timeout.current){
                clearTimeout(timeout.current)
            }
        }
    },[count,dispatch]);

    return (
        <div className="offerHomeSlider">
            <FontAwesome name="angle-double-left" className="leftArrowForView" onClick={leftArrowOfferHandler}/>
            <FontAwesome name="angle-double-right" className="rightArrowForView" onClick={RightArrowOfferHandler}/>
           {ImageSliderLists.map((item,index)=>{
               return (
                 <div className="offerHomeSliderContainer" key={index}>
                   {index===count && <React.Fragment>
                   <span className="offerHomeTextContainer">
                       <h1 className="offerHomeTextContainer1">{item.header1}</h1>
                       <h3 className="offerHomeTextContainer2">{item.header2}</h3>
                       <p className="offerHomeTextContainer3">{item.para}</p>
                       <button className="offerHomeBtn">Get It Now</button>
                   </span>
                   <span>
                     <img
                       src={item.img}
                       alt="offersImg"
                       className="OffersHomeImg"
                     />
                   </span>
                   </React.Fragment>}
                 </div>
                  
               );
           })}
        </div>
    )
}
