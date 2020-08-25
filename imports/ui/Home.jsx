import React from 'react'
import { Link } from 'react-router-dom'
import { LoginForm } from '/imports/ui/Login'
import { useTracker } from 'meteor/react-meteor-data'

export default () => {
    const {user} = useTracker(() => ({
        user :Meteor.user()
    }))
    return (
        <main>
            <h1>Welcome</h1>
            {user
            ? <Link to="/profile">Goto {user.username}'s page</Link>
            : <LoginForm/>
            }
        </main>
    )
}