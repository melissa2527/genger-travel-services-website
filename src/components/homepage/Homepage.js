import React from 'react'
import { Banner } from './banner/Banner'
import { Info } from './info/Info'
import { Video } from './video/Video'
import { Quote } from './quote/Quote'

export const Homepage = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Video />
            <Quote />
        </div>
    )
}
