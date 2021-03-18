import React, {useEffect} from 'react';
import './info.scss';
import {infoData} from './infoData';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Info = () => {

    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])

    return (
        <div className='info-container'>
            <h2 data-aos='fade-up'>Planning a Trip?</h2>
            <p data-aos='fade-up'>Whether your trip is for business or pleasure, domestic or international, we can help! With an individualized collaborative planning process and a vast network of travel partners, we can coordinate a seamless trip for you! Contact us to learn more.</p>
            
            <div className='info-photos'>
            {infoData.map((info, index) => (
                <div key={index} data-aos='fade-up'>
                    <img src={info.image} alt={info.name} height={280}/>
                    <div className='caption'>
                        <span>
                            <i class="fas fa-map-marker-alt"></i>
                        </span>
                        <span>
                            {info.caption}
                        </span>
                    </div>
                </div>
            ))}
             </div>  
        </div>
    )
}
