import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import Menu from './Components/menu';

import Footer from './Components/footer';
import Home from './Components/Home';
import Projects from './Components/projects';

import Contact from './Components/contact';

// css
import './App.scss';

function App() {
  return (
    <Router>
     
       <section className="content-wrapper">
          <Menu />

          <Route exact path="/">
            <Home />
          </Route>
          
          <Route path="/projects">
              <Projects />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Footer />
        </section>
    </Router>
  );


  // function App() {
  //   return (
  //     <Router>
  //       <div className="content-wrapper">
  //         <section>
  //           <Menu />
  //           <Message />
  //           <Projects />
  //           <ProjectTwo />
  //           <Footer />
  //         </section>
  //       </div>
  //     </Router>
  //   );
}

export default App;
