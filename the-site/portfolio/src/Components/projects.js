import shape from './shape.svg';
import image from './film.png';
import laptop from './laptop.svg';
import ruler from './ruler-r.svg';
import './css/projects.scss';
import '../index.scss';


function Projects() {
    return (
        <div clasName="content-wrapper">
            <section className="projects">
                  <div className="project-container">
                    <h3 className="project__title">Featured Projects</h3>
                  
                    <img className="shape-container" src={shape} alt="shape"/>
                  </div>

                  <section className="project-1">
                      <div className="feature-container">

                         <div className="film-title">
                            <h3>film 214 class Portfolio</h3>
                          </div>

                          <p>It is a simple static site that showcases class projects<br></br>
                          From short films to photography projects. 
                          </p> 
                          
                          <div className="symbols-and-text">
                            <img className="laptop" src={laptop} alt=""/>
                            <p>Web Development</p>

                            <img className="ruler" src={ruler} alt=""/>
                            <p className="content-2">Web Design</p>

                            <button className="m-btn btn-details proTwoBtn"> See Details</button>
                          </div>
                           

                            
                      </div>
                    
                      <img className="project-image" src={image} alt=""/>
                  </section>
               
            </section>
        </div>
    );
}

export default Projects;