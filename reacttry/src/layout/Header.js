import React from 'react'
import {Link} from 'react-router-dom';


export default function Header() {
    return (
        <div>
            <header style={headerStyle}>
                <h1>Todo List</h1>
                <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
            </header>
        </div>
    )
}

const linkStyle={
    color: '#fff',
    textDecoration: 'none'
}
const headerStyle={
    background: '#333',
    color:'#fff',
    textAllign:'center',
    padding: '10px'
}