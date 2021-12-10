import React from 'react'
import { useSelector } from 'react-redux';
import './product.css'
import ProductItem from './productItem';

export default function Product() {

   const itemss=useSelector(state=>state.cart.items);
   

    return(
        <React.Fragment>
           {itemss.map((item,index)=>{
                return(
                   
                        <ProductItem 
                    key={index}
                    id={item.itemId}
                    name={item.name}
                    img={item.img}
                    about={item.about}
                    quantity={item.quantity}
                    totalprice={item.totalprice}
                    price={item.price}
                    />
                  
                )
            })}
        </React.Fragment>
    )
}
