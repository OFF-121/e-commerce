import React from 'react'
import FontAwesome from 'react-fontawesome'

import './contact.css'
export default function Contact() {
   
    const mail=<FontAwesome name="envelope" className="mailIcon"/>
    const facebook=<i class="fab fa-facebook"></i>
    const whatsapp=<i class="fab fa-twitter"></i>
    const instagram=<i class="fab fa-instagram-square"></i>
    const google=<i class="fab fa-google-plus"></i>
    

    return (
        <div className="contactContainer">
            <div className="leftContactContainer">
                <div className="leftSubCOntainer">
                    <h1 className="leftText">Still Can't Find What You are Looking For ??</h1>
                    <h4>Contact Us</h4>
                    <p className="mailBox">SEND US AN MAIL{mail}</p>
                    <div className="iconContaner">
                    <p>{facebook}</p>
                    <p>{whatsapp}</p>
                    <p>{instagram}</p>
                    <p>{google}</p>
                    </div>
                </div>
            </div>
            <div className="centerColor"></div>
            <div className="rightContainer">
                <div className="rightSubCOntainer">
                    <h3 className="ContactHeader">CONTACT   FORM</h3>
                    <form onClick="submit" className="ContactForm" >
                         <input type="text" className="inputConatct" placeholder="Enter Your Name"/>
                         <input type="email" className="inputConatct" placeholder="Enter a valid Mail Address"/>
                         <textarea type="text" className="TextAreaConatct" placeholder="Enter Your Message..."/>
                         <button className="BtnContact">Submit</button>
                    </form>
                </div>
            </div>
            
            
            
            
            
        </div>
    )
}
