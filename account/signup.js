import React from 'react'


import img15 from '../assests/img15.svg'
import BnkCompReuse from '../reusable/BnkCompReuse';



export default function SignUp() {
    const head1="Join Our Team";
    const head2=<h3>Creating an Account <br/> Is Extremely <br/>Easy</h3>
    const head3=<p>Get EveryThing Setup and Ready in Under 10 minutes.All You Need <br/>to do is Add your Information and You are Ready to Go....</p>
    const head4="Start Now";

    const head3Style={backgroundColor:'white',color:'black'
                       , boxShadow: "5px 5px 30px 5px white"};

    return (
        <div className="BnkDiscoverContainer">
            <div>
                <img src={img15} alt="ad1" className="bnkAbtImage"/>
           </div>
          
           <div className="subBnkAbtContainer">
               <BnkCompReuse head1={head1} head2={head2} head3={head3} head4={head4} head3Style={head3Style}/>
           </div>
           
        </div>
    )
}
