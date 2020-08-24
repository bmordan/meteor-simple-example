import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
    <nav style={{width: '16rem', padding: '1rem', display: 'flex', justifyContent: 'space-evenly'}}>
        <Link to="/">Home</Link>
        <Link to="/page1">Page 1</Link>
        <Link to="/page2">Page 2</Link>
    </nav>
)
