
import React from 'react';
import { useHistory } from "react-router-dom";
import FontAwesome from 'react-fontawesome';
import { Link} from 'react-router-dom'


import './navbar.css'
import { useSelector } from 'react-redux';

export default function Navbar() {

  const Quantity=useSelector(state=>state.cart.items);

  const total=Quantity.length;


   const icon=<FontAwesome name="dolly" className="icon"/>
   const NumberOfCart=<span className="BtnnumberOfItems">{total}</span>;
   const AcntIcon=<FontAwesome name="user-tie" className="AccountIcon"/>
   
   const history=useHistory();
   const HomePageGOo=()=>{history.push("/")}

    return (
      <div className="navvvvv">
        <div className="navbacrContainer">
        <div className="headText" onClick={HomePageGOo}>
          <span className="pravin">Pravin</span> <span>Fashion's</span>
        </div>
        <div className="navLinksContainer">
          <ul className="NAVul">
              <Link to="/About" className="Link">About</Link>
              <Link to="/storeComponent" className="Link">Store</Link>
              <Link to="/contact" className="Link">Contact</Link>
              <Link to="/acc" className="Link">Account {AcntIcon}</Link>
              <Link to="/store" className="cartLink">{icon}Cart {NumberOfCart}</Link>
          </ul>
        </div>
      </div>
      </div>
    );
}
