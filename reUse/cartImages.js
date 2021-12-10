import React from 'react'
import  { useState } from 'react'
import FontAwesome from 'react-fontawesome';

import { useDispatch } from 'react-redux'
import { cartActions } from '../store/cart';

export default function CartImages(props) {
    
   const [Heartcolor,setHeartColor]=useState(false);

   const IconColorHandler=()=>{
       setHeartColor(!Heartcolor);
   }

   const dispatch=useDispatch();

   const addItemToCarthandler=()=>{
     dispatch(cartActions.addItemToCart({
       name:props.name,
       id:props.id,
       img:props.img,
       about:props.about,
       totalprice:props.price,
       price:props.price
     }))
   }

  
   
    return (
       
             <div className="CasualImageContainer">
                   <div>
                     <FontAwesome name="heart" onClick={IconColorHandler} className={Heartcolor ? "emptyHeart" : "redHeart"} />
                   </div>
                   <img src={props.img} alt="casuals"   className="CasualImages" />
                   <div className="cartAbout">
                     <p>{props.about}</p>
                     </div>
                     <div className="cartANameprice">
                       <h3 className="Casualname">{props.name}</h3>
                       <h5 className="CasualPrice">MRP :{props.price}.00 rs</h5>
                       <button className="casualCartButton" onClick={addItemToCarthandler}>+ AddCart </button>
                     </div>
                   
                 </div>
    )
}
