import React from 'react'
import Navbar from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Projects from './components/Projects'
import Contact from './components/Contact'


const App = () => {

  return (

    <Router>

      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/Projects">
          <Projects />
        </Route>

      </Switch>
      <Footer />
    </Router>

  )

}

export default App;


