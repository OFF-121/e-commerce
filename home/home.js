import React from 'react'
import ImageSlider from './offersImageSlider/imageSlider'

import './home.css'
import FeelBetter from './feelBetter/feelBetter'
import HomeNewCollection from './homeNewCollection/homeNewCollection'

export default function Home() {
    return (
        <div>
            <ImageSlider/>
            <FeelBetter/>
            <HomeNewCollection/>
        </div>
    )
}
