import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

// Page Components
import Nav from '/imports/ui/Nav'
import Home from '/imports/ui/Home'
import Page1 from '/imports/ui/Page1'
import Page2 from '/imports/ui/Page2'
import ProfilePage from '/imports/ui/Profile'
import NotFound from '/imports/ui/NotFound'

// routes
export default () => {
  return (
    <Router>
      <Nav/>
      <hr/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/page1" component={Page1}/>
        <Route path="/page2" component={Page2}/>
        <ProtectedRoute path="/profile" component={ProfilePage}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </Router>
  )
}

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const userId = Meteor.userId()
      return userId
      ? (<Component {...props} user={Meteor.user()} />)
      : (<Redirect to={{ pathname: '/' }}/>)
    }}
  />
)