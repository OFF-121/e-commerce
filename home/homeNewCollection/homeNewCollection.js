import React from 'react'

import './homeNewCollection.css'
import HomeNewCollectionLists from './homeNewCollectionList'

export default function HomeNewCollection() {
    return (
        <div className="NewCollectionContainer">
            <h1 className="NewCollectionText">New Collections</h1>
            <div className="NewCollectionImgContainer">
                {HomeNewCollectionLists.map((item,index)=>{
                    return(
                        <img src={item.img} alt="NewCollection" key={index} className="NewCollectionImg"/>
                    )
                })}
            </div>
        </div>
    )
}
