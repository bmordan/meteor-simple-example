import React, { useReducer } from 'react'

const ProfilePage = (props) => {
    const { user } = props
    return (
        <main>
            <h1>{user.username}</h1>
        </main>
    )
}

export default ProfilePage