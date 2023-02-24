import React from "react"
import title from '../sponsors.svg'

export default function Spontit() {
    return(
        <>
            <div className="line left forward"/>
            <img className="forward spontit" src={title}></img>
            <button className="register forward">REGISTER NOW</button>
            <div className="line middle forward"/>
            <div className="line right forward"/>
        </>
    )
}