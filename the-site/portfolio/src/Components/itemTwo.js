import React from 'react';

import './css/projects.scss';
import './css/project-2.scss';
import '../index.scss';



function ProjectTwo({name, content, symbolOne, symbolTwo, image}) {
    return (
        <div clasName="content-wrapper">
            <section className="projects">
        
                <section className="project-1 project-background">
                    <div className="feature-container">
                         <div className="film-title">
                            <h3>{ name}</h3>
                          </div>

                          <p>
                            {content}
                          </p> 
                          
                          <div className="symbols-and-text">
                            <img className="laptop" src={symbolOne} alt=""/>
                            <p>Web Development</p>

                            <img className="ruler" src={symbolTwo} alt=""/>
                            <p className="content-2">Web Design</p>

                            <button className="m-btn btn-details proTwoBtn"> See Details</button>
                          </div>
                            
                    </div>
                    
                    <img className="project-image img-2" src={image} alt=""/>
                </section>
               
            </section>
        </div>
    );
}

export default ProjectTwo;