import React from 'react';
import './gallery.scss';


export const Gallery = () => {
    return (
        <div className='gallery-page'>
        <div className='gallery-container' >
                <div className='card-image'>
                    <h3>Edinburgh, Scotland</h3>
                    <img src='./img/edinburgh.jpg' alt='Edinburgh'/>
                </div>
                <div className='card-image'>
                    <h3>Santorini</h3>
                    <img src='./img/santorini.jpg' alt='santorini'/>
                </div>
                <div className='card-image'>
                    <h3>Santorini</h3>
                    <img src='./img/santorini.jpg' alt='santorini'/>
                </div>
                <div className='card-image'>
                    <h3>Dubrovnik, Croatia</h3>
                    <img src='./img/dubrovnik.jpg' alt='Dubrovnik'/>
                </div>
                <div className='card-image'>
                    <h1>Genger Travel Photos</h1>
                    {/* <img src='./img/lake-bled.jpg' alt='lake bled'/> */}
                </div>
                <div className='card-image'>
                    <h3>Monaco</h3>
                    <img src='./img/monaco.jpg' alt='Monaco'/>
                </div>
                <div className='card-image'>
                    <h3>Lake Bled</h3>
                    <img src='./img/lake-bled.jpg' alt='lake bled'/>
                </div>
                <div className='card-image'>
                    <h3>Sarajevo, Bosnia</h3>
                    <img src='./img/sarajevo.jpg' alt='Sarajevo'/>
                </div>
                <div className='card-image'>
                    <h3>Prague</h3>
                    <img src='./img/prague.jpg' alt='Prague, Czech Republic'/>
                </div>
                <div className='card-image'>
                    <h3>Angkor Wat, Cambodia</h3>
                    <img src='./img/angkor-wat.jpg' alt='Angkor Wat'/>
                </div>
                <div className='card-image'>
                    <h3>Santorini</h3>
                    <img src='./img/santorini.jpg' alt='santorini'/>
                </div>
                {/* <div className='card card-tall card-wide' id='one' style={{'background-image': 'url("./img/kasos.jpg")'}}>1</div>
                <div className='card card-tall card-wide' id='two'style={{'background-image': 'url("./img/santorini.jpg")'}}>2</div>
                <div className='card card-tall card-wide'><h1>Genger Travel Photos</h1></div>
                <div className='card card-tall card-wide' style={{'background-image': 'url("./img/lake-bled.jpg")'}}>3</div>
                <div className='card card-tall card-wide' style={{'background-image': 'url("./img/tonle-sap.jpg")'}}>4</div> */}
        </div>
        </div>
    )
}

