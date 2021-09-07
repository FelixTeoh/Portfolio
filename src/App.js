import './App.css';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import  About  from './components/Pages/About';
import  Work  from './components/Pages/Work';
import  Contact  from './components/Pages/Contact';
import Project from './components/Pages/Project';


function App() {
  return (
    <>
    <Router>
      <NavBar />
    <Switch>
      <Route exact path="/">
        <About />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route path="/work">
        <Work />
      </Route>
      <Route path="/project">
        <Project />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
    </Router>
    </>
  )
}

export default App;
