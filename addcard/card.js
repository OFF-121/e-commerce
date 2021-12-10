import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import './card.css'
import Product from './leftSection/product';
import RightSection from './rightSection/rightSection';
export default function Card() {

  const Quantity=useSelector(state=>state.cart.items);

  const total=Quantity.length;

  const itemss=useSelector(state=>state.cart.items);
  const length=itemss.length===0;

  const history=useHistory();
  
    return (
      <div className="cartContainer">
         {!length &&<div className="leftContainer">
        <h3 className="cartItemNumber">Cart ({total} items)</h3>
            <Product/>
        </div>}
        {length && <div className="NoCartStatus">
          <h1 className="cartStausHeadeer">No Items In Cart</h1>
        <button className="cartStatusBtn" onClick={()=>history.push("/storeComponent")}>Go to Store</button>
        </div> }
        <div className="right">
          <RightSection/>
        </div>
      </div>
    );
}

