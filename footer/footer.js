import React from 'react'

import './footer.css';

import FontAwesome from 'react-fontawesome'



export default function Footer() {
   
    const facebook=<i class="fab fa-facebook" id="footerIcon"></i>
const whatsapp=<i class="fab fa-twitter" id="footerIcon"></i>
const instagram=<i class="fab fa-instagram-square" id="footerIcon"></i>
const google=<i class="fab fa-google-plus" id="footerIcon"></i>

    return (
        <div className="FooterMainContainerAMN">
            
            <div className="FooterContainerAMN">
            <div className="meeeeeAMN">
                <h1 className="meeeeeAMN1">ENVOY</h1>
                <p className="meeeeeAMN2">We Create possibilities for the Connected World</p>
                <h4 className="meeeeeAMN3">Be Smiley<FontAwesome name="smile-wink" id="footerIcon"/></h4>
            </div>
            <ul>
                <li className="FooterHeadlineAMN">COMPANY</li>
                <li>About Us</li>
                <li>Newsroom</li>
                <li>Investors</li>
                <li>Blog</li>
                <li>Carrier</li>
            </ul>
            <ul>
                <li className="FooterHeadlineAMN">OUR SHOWROOM</li>
                <li>Salem</li>
                <li>Erode</li>
                <li>Coimbatore</li>
                <li>Chennai</li>
                <li>Madurai</li>
            </ul>
            <ul>
                <li className="FooterHeadlineAMN">EXPLORE</li>
                <li>Home</li>
                <li>About Us</li>
                <li>Store</li>
                <li>Contact</li>
                <li>ACcount</li>
            </ul>
            <ul >
                <li className="FooterHeadlineAMN">FOLLOW US</li>
                <li>Instagram{instagram}</li>
                <li>Twitter{whatsapp}</li>
                <li>Facebook{facebook}</li>
                <li>Google{google}</li>
            </ul>
            <ul>
                <li className="FooterHeadlineAMN">CONTACT US</li>
                <div className="footerCOntactAWN">
                <li>PHONE<FontAwesome name="mobile-alt" className="footerCOntactAWNICON"/></li>
                <li>MAIL<FontAwesome name="envelope" className="footerCOntactAWNICON"/></li>
                <li>SMS<FontAwesome name="sms" className="footerCOntactAWNICON"/></li>
                </div>
            </ul>
            </div>
        </div>
    )
}
