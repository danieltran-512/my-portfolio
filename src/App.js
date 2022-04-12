import "./style/styles.css";
import NavBar from "./component/NavBar/";
import Home from "./component/Home";
import About from "./component/About";
import Skills from "./component/Skills";
import {Projects} from "./component/Projects";
import {Contact} from "./component/Contact"

function App() {
  return (
      <div>
        <NavBar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>

        <footer style={{borderTop:'0.5px solid var(--primary-color)', margin: '20px'}}>
          <h4 style={{textAlign: 'center', color:'white', marginBottom: 0}}>KEEP IN TOUCH WITH ME</h4>
          <ul className="socials">
            <li>
              <a href="mailto:danieltran512000@gmail.com">
                Email
              </a>
            </li>
            <li>
              <a href="https://github.com/danieltran-512" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/daniel-kien-tran/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.behance.net/danieltran9" target="_blank" rel="noopener noreferrer">
                Behance
              </a>
            </li>
          </ul>
        </footer>
      </div>
  );
}

export default App;
