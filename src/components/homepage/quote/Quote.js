import React, {useEffect} from 'react';
import './quote.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Quote = () => {

    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])

    return (
        <div className='quote-container'>
            <div className='quote' data-aos='fade-up'>
                <h5>"The world is a book and those who do not travel, read only one page."</h5>
                <p>St. Augustine</p>
            </div>
            <div className='btn' data-aos='fade-up'>
                <button>Get Ideas</button>
            </div>
        </div>
    )
}
