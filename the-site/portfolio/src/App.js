
import Menu from './Components/menu';
import Message from './Components/welcome';
import Projects from './Components/projects';
import ProjectTwo from './Components/project-2';
import Footer from './Components/footer';

// css
import './App.scss';

function App() {
  return (
    <div className="content-wrapper">
      <section>
        <Menu />
        <Message />
        <Projects />
        <ProjectTwo />
        <Footer />
      </section>
    </div>
  );
}

export default App;
