import React from 'react';
import './info.scss';
import {infoData} from './infoData';

export const Info = () => {
    return (
        <div className='info-container'>
            <h3>Planning a Trip?</h3>
            <p>Whether your trip is for business or pleasure, domestic or international, we can help! With an individualized collaborative planning process and a vast network of travel partners, we can coordinate a seamless trip for you! Contact us to learn more.</p>
            
            <div className='info-photos'>
            {infoData.map(info => (
                <div>
                    <img src={info.image} alt={info.name} height={200}/>
                    <div className='caption'>{info.caption}</div>
                </div>
            ))}
             </div>  
        </div>
    )
}
