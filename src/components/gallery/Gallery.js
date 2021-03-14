import React from 'react';
import './gallery.scss';


export const Gallery = () => {
    return (
        <div>
            <h1>Genger Travel Photos</h1>
            <div className='gallery-container>'>
                <div className='card' style={{'background-image': 'url("./img/kasos.jpg")'}}>1</div>
                <div className='card' style={{'background-image': 'url("./img/santorini.jpg")'}}>2</div>
                <div className='card' style={{'background-image': 'url("./img/lake-bled.jpg")'}}>3</div>
                <div className='card' style={{'background-image': 'url("./img/tonle-sap.jpg")'}}>4</div>
            </div>
        </div>
    )
}
