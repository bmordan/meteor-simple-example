import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

// Page Components
import Nav from '../imports/ui/Nav.jsx'
import Home from '../imports/ui/Home.jsx'
import Page1 from '../imports/ui/Page1.jsx'
import Page2 from '../imports/ui/Page2.jsx'
// import NotFound from '../imports/ui/NotFound.jsx'

const browserHistory = createBrowserHistory()

// routes
export default () => {
  return (
    <Router history={browserHistory}>
      <div>
        <Nav/>
        <hr/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/page1" component={Page1}/>
        <Route exact path="/page2" component={Page2}/>
        {/* <Route component={NotFound}/> */}
      </div>
    </Router>
  )
}