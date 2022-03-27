import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <>
            <nav class="nav-bar">
                <ul>
                    <li>
                        <a class="home" href="#top">Home</a>
                    </li>
                    <li>
                        <Link to="/music">Music</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}