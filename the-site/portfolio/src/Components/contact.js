import React from 'react';

import ProjectTwo from '../Components/itemTwo';
import image from './Assets/lighthouse.png';

import symbolOne from './Assets/laptop.svg';
import symbolTwo from './Assets/ruler-r.svg';


const projectObj = {
  name: "Contact", 
  content: "Get in touch with me, if you have some questions or just want to talk about coding in general.",
  symbolOne: symbolOne, symbolTwo: symbolTwo, image: image};

const Contact = () => {
    // const section_style ={margin: "10em 0", display: "flex", 
    // justifyContent:"center", alignItems:"center"};
    
    return (
        <section  className="content-wrapper">
         <ProjectTwo name={projectObj.name} content={projectObj.content} 
         image={projectObj.image} symbolOne = {projectObj.symbolOne}
         symbolTwo = {projectObj.symbolTwo} />
        </section>
      );
};

export default Contact;