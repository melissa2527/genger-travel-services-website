import React from 'react';
import {WordsData} from './WordsData';
import './about.scss';

export const Aboutpage = () => {
    return (
        <div className='about-container'>
            <div className='about-section'>
                <img className='about-photo' src='./img/vanessa.jpg' alt='Vanessa'/>
                <WordsData />
            </div>
        </div>
    )
}
