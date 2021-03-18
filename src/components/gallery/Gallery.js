import React, {useState, useEffect} from 'react';
import './gallery.scss';
import {galleryData} from './galleryData';
import Aos from 'aos';
import 'aos/dist/aos.css';
import backgroundVideo from '../../assets/video.mp4';

export const Gallery = () => {
    const [video, setVideo] = useState(false)

    useEffect(() => {
        Aos.init({duration: 1500})
        showVideo()
    }, [])

    const showVideo = () => {
        if(window.innerWidth <= 700) {
            setVideo(true)
        } else {
            setVideo(false)
        }
    }

    window.addEventListener('resize', showVideo);
            
    return (
        <div className='gallery-page'>
        {video ? 
                <div className='video-container'>
                    <video src={backgroundVideo} type='video/mp4' autoPlay loop muted playsInline style={{'max-width': '100%'}} />
                    <h2>Genger Travel Photos</h2>
                </div> :
                <h1>Genger Travel Photos</h1>
            }
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

