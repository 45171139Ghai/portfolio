import image from './lighthouse.png';
import laptop from './laptop.svg';
import ruler from './ruler-r.svg';
import './css/projects.scss';
import './css/project-2.scss';
import '../index.scss';


function ProjectTwo() {
    return (
        <div clasName="content-wrapper">
            <section className="projects">
        
                <section className="project-1 project-background">
                    <div className="feature-container">
                         <div className="film-title">
                            <h3>Yoga Studio</h3>
                          </div>

                          <p>Current site I am working on. It's a basic yoga studio website. More details 
                              coming soon <br></br>
                          </p> 
                          
                          <div className="symbols-and-text">
                            <img className="laptop" src={laptop} alt=""/>
                            <p>Web Development</p>

                            <img className="ruler" src={ruler} alt=""/>
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