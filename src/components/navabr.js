import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    return(
        <div className='navbar forwardd'>
            <Link to="/Home" className='gogo fel'>FEL.</Link>
            <ul className='links fivo'>
                <li><Link to="/Events">events</Link></li>
                <li><a href="/About">about</a></li>
                <li><a href="/Sponsors">past sponsors</a></li>
            </ul>
            <a href="" className='fivo sign'>sign in</a>
        </div>
    )
}