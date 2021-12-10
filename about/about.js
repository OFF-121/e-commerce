import React from 'react'

import img from '../assests/aboutImg.jpg'
import Footer from '../footer/footer'

import './about.css'
export default function About() {
    return (
        <div className="AboutMainContainer">
            <div className="about-1">
                <img src={img} alt="about" className="abtImg"/>
                <div className="UPPERText">
                    <h1 className="upperOne">ABOUT</h1>
                    <h1 className="upperTwo">US</h1>
                    <p className="upperThree">Our showrooms house the largest collection of silk sarees in Tamil Nadu. At Pothys you get the benefit of diverse silk varieties, exclusive designs and authentic silk brands. Yes, Pothys is the first Textile showroom in Tamil Nadu to launch its own unique brand of silk sarees namely Samudrika, Parampara and Vastrakala.</p>
                    <p className="upperFour">Pothys has established itself as house hold name in the textile industry in Tamil Nadu. Our undisputed reputation stems from our unflinching dedication to give you the highest quality, exclusive and diverse clothing options and unmatched customer service.</p>
                </div>
            </div>
            <div className="about-2">
                <div>
                    <h3 className="downHeading">HERITAGE</h3>
                    <p className="down1">Heritage Nearly five decades have been witness to our transition from modest khadi stores to the largest textile kingdom in Tamilnadu. We strongly believe that it is our time tested heritage that has made us what we are today. Our rich legacy has not just taught us the finer points of business, .....</p>
                </div>
                <div>
                    <h3 className="downHeading">HERITAGE</h3>
                    <p className="down1">The first BIS-certified jewellers in Tamilnadu, Sree kumaran Thangamaligai (SKTM) is among the most trusted in India for the purity and authenticity of its offering. The SKTM showrooms are located in Tirupur, Coimbatore, Erode, Trichy , Karur , Tirunelveli and Chennai. continues to sustain customer confidence. With an extensive collection in gold, platinum, diamonds, silver and precious stones, the stores have become the preferred choice for jewellery lovers.</p>
                </div>              
                <div>
                    <h3 className="downHeading">HERITAGE</h3>
                    <p className="down1">SCM has always been known for the impeccable quality of its garments. Right from the raw material to the finished product, quality control is stringently exercised. It has implemented AQL 2.5 Level Quality Standards and developed a 4 point system to ensure every step of manufacturing process passes rigorous norms.</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
