import React, {useEffect} from 'react';
import './gallery.scss';
import {galleryData} from './galleryData';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Gallery = () => {

    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])

    return (
        <div className='gallery-page'>
            <h1>Genger Travel Photos</h1>
            <div className='gallery-container' data-aos='fade-up'>
                {galleryData.map(city => 
                    <div className='card-image'>
                        <h3>{city.city}</h3>
                        <img src={city.img} alt={city.alt}/>
                    </div>    
                )}
            </div>
        </div>
    )
}

