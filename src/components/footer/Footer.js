import React from 'react';
import './footer.scss';

export const Footer = () => {
    return (
        <footer className='footer-container'>
            <h3>Find More...</h3>
            <div className='footer-items'>
                <a className='item' href='https://www.instagram.com/gengertravelservices/' alt='instagram' target='_blank' rel='noreferrer'>
                    <i class="fab fa-instagram"></i>
                </a>
                <a className='item' href='https://www.facebook.com/GengerTravelServices/' alt='facebook' target='_blank' rel='noreferrer'>
                    <i class="fab fa-facebook-square"></i>
                </a>
                <a className='item' href='https://www.linkedin.com/in/vanessagenger/' alt='linkedin' target='_blank' rel='noreferrer'>
                    <i class="fab fa-linkedin"></i>
                </a>
            </div>
        </footer>
    )
}
