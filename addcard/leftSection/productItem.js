import React from 'react'
import FontAwesome from 'react-fontawesome';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
import './product.css'
export default function ProductItem(props) {

    const crossIcon=<FontAwesome name="times" className="cross"/>
  const itemm=useSelector(state=>state.cart.items);
    const dispatch=useDispatch();
console.log(itemm);
    const addItemToCarthandler=()=>{
      dispatch(cartActions.addItemToCart({
        name:props.name,
        id:props.id,
        img:props.img,
        about:props.about,
        totalprice:props.totalprice,
        price:props.price
       
      }))
     }
   
     const removeItemToCarthandler=()=>{
      dispatch(cartActions.removeItemToCart({
        name:props.name,
        id:props.id,
        img:props.img,
        about:props.about,
        totalprice:props.totalprice,
        price:props.price
       
      }))
     }

    return (
      <div className="productItemContainer">
        <div className="productItem">
          <div className="CartDetials">
            <img src={props.img} className="cartImg" alt="cartImages"/>
            <div className="CartDetialsAbout">
              <h4 className="CartDetialsAbout-H1">{props.name}</h4>
              <h4 className="CartDetialsAbout-H2">
               {props.about}
              </h4>
            </div>
          </div>
          <div className="Cartprice">
            <div>
              <button className="cartIncreaseButton" onClick={addItemToCarthandler}>+</button>

              <button className="cartDecreaseButton" onClick={removeItemToCarthandler}>-</button>
              <h2 className="NumberOfItems">{crossIcon} {props.quantity}</h2>
            </div>
           
            <h3>{props.totalprice}.00 rs/-</h3>
          </div>

          
        </div>
      </div>
    );
}
