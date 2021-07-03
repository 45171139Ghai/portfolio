import React from 'react';
import Message from '../Components/welcome';
import Education from '../Components/education';
import ItemOne from '../Components/itemOne';
import ProjectTwo from '../Components/itemTwo';

import image from './Assets/lighthouse.png';
import laptop from './Assets/laptop.svg';
import ruler from './Assets/ruler-r.svg';

// css
import './css/home.scss';

// import './css/projects.scss';
// import './css/project-2.scss';
// import '../index.scss';


const projectObj = {
  name: "Yoga Yoga", 
  content: "Current site I am working on. /It's a basic yoga studio website. More details  coming soon",
  symbolOne: laptop, symbolTwo: ruler, image: image};

const Home = () => {
    return (
        <section>
          <Message />
          <ItemOne />
          <ProjectTwo name={projectObj.name} 
          content={projectObj.content} symbolOne={projectObj.symbolOne}
          symbolTwo={projectObj.symbolTwo} image={projectObj.image} />
          <Education />
        </section>
      );
};

export default Home;