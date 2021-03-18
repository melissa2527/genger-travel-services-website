import React, {useEffect} from 'react'
import './banner.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Banner = () => {

    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])
    return (
        <div className='banner-container'>
            <div className='text-container'>
                <div className='banner-text' data-aos='fade-left'>
                    <h1>The World Awaits!</h1>
                    <h3>Live your travel dreams...</h3>
                </div>
            </div>
        </div>
    )
}
