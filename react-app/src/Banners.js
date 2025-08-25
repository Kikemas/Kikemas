import './Banners.css';
import React from 'react';
import japaneseBanner from './images/bandera_japonesa.jpg';
import spanishBanner from './images/bandera_espanola.jpg';
import englishBanner from './images/bandera_inglesa.jpg';

function Banners(){
    return(
        <ul className='listConfig'>
            <li><img src={japaneseBanner} alt='japanese banner' className='banner'></img></li>
            <li><img src={spanishBanner} alt='spanish banner' className='banner'></img></li>
            <li><img src={englishBanner} alt='english banner' className='banner'></img></li>
        </ul>
    );
}

export default Banners;

