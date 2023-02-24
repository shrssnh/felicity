import React from "react"
import title from '../title.svg'

export default function Felicity() {
    return(
        <>
            <div className="line left forward"/>
            <img className="forward title" src={title}></img>
            <p className="fivo ver forward">version <code className="red">20.23</code></p>
            <button className="register forward">REGISTER NOW</button>
            <div className="line middle forward"/>
            <div className="line right forward"/>
        </>
    )
}