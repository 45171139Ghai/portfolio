import React from 'react';

import image from './Assets/yellow.jpeg';
import image2 from './Assets/img.jpg';
// css
import './css/decoration.scss';
const Decoration = ()=> {
    return (
        <section className="content-wrapper grid-1">
           <div className="section-background">
                <img className="image" src={image} alt=""/>
           </div>
           <img className="image-2" src={image2} alt=""/>
           
        </section>
    );
}

export default Decoration;