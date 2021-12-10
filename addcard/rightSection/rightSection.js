import React from 'react'
import { useSelector } from 'react-redux';
import './rightSection.css'
export default function RightSection() {

  const itemss=useSelector(state=>state.cart.items);
  const ItemCount=useSelector(state=>state.cart.totalQuantity);

  let amount=0
  itemss.map((item)=>{
   return( amount+= parseInt(item.totalprice));
  })

 

  let tax=ItemCount*53;

  let totalAmount=amount+tax;
  
    return (
        <div className="rightcontainer">
            <h3 className="AmountHeader">Total Amount </h3>
          <div className="BillingSection">
            <div className="BillingSection1">
              <p>Price :</p>
              <p>{amount}.00</p>
            </div>
            <div className="BillingSection1">
              <p>Tax :</p>
              <p>{tax}.00</p>
            </div>
          </div>
          <div className="">
              <hr/>
                <div className="BillingSection3"> 
                    <p>Total Amount of (including GST) </p>
                    <p>{totalAmount}.00/-</p>
                </div>
                <button className="CartBuyBtn" >Buy</button>
            </div>
        </div>
    )
}
