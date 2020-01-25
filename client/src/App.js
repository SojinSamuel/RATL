import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import BottomNav from './components/BottomNav'
import Home from './pages/Home'
import Connections from './pages/Connections'
import Archived from './pages/Archived'
import Jobs from './pages/Jobs'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

const App =()=>{


  return(
    <Router>

    <Navbar/>
  
    <BottomNav />

    <Switch>
   
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/archived">
        <Archived />
      </Route>

      <Route path="/jobs">
        <Jobs />
      </Route>

      <Route path="/connections">
        <Connections />
      </Route>
      </Switch>

    </Router>
    
  
    
  )
}



export default App
