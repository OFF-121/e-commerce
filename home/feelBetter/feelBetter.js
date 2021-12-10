import React from 'react'

import './feelbetter.css'

import feelBetterImg from '../../assests/feelBetter.jpg'

export default function FeelBetter() {

    return (
      <span className="feelBetterTextContainer">
        <div className="feelBetterText">
          <div className="headTextfeelBetter">
            <span className="pravin">Pravin</span> <span>Fashion's</span>
          </div>
          Our New Collections would definitly makes
          <br /> You to look Good and Classy. The most
          <br /> popular styles come in conservative colours <br />
          choose clothes that make you look attractive <br />
          and having a superb dressing sense means <br />
          you know how to dress in the most
          <br /> attractive way.
          <br />
          <br />
          <br />
          Dressing well allows one to gain self-confidence <br />
          and that's an important aspect of communication.
          <br /> Good communication skills can be obtained easily if <br /> one
          decides to choose what to wear wisely.
        </div>

        <img src={feelBetterImg} alt="feelBetter" className="feelBetterImg" />
      </span>
    );
}
