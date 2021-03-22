import React from 'react'
import { Banner } from './banner/Banner'
import { Info } from './info/Info'
import { Video } from './video/Video'
import { Quote } from './quote/Quote'
import { Specialties } from './specialties/Specialties'

export const Homepage = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Video />
            {/* <Specialties /> */}
            <Quote />
        </div>
    )
}
