import React from 'react'
import { Link } from 'react-router-dom'
import { useTracker } from 'meteor/react-meteor-data'

export default () => {
    const {user} = useTracker(() => ({
        user :Meteor.user()
    }))
    return (
        <nav style={{width: '16rem', padding: '1rem', display: 'flex', justifyContent: 'space-evenly'}}>
            <Link to="/">Home</Link>
            <Link to="/page1">Page 1</Link>
            <Link to="/page2">Page 2</Link>
            {user ? <button onClick={e => Meteor.logout()}>Logout</button> : null}
        </nav>
    )
}
