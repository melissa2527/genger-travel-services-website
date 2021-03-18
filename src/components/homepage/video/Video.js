import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './video.scss';

export const Video = () => {

    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])

    return (
        <div className='video-container' data-aos='fade-up'>
            <h3>Want to Travel?</h3>
            <iframe 
                width="600" height="415" title='travel-video'
                src='https://www.youtube.com/embed/XhFwBuBWs18?controls=0&autoplay=1&mute=1&loop=1'>
                    
            </iframe>
        </div>
    )
}
