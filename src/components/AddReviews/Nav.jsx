import React from 'react'
import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <nav>
            <Link to={"/reviews"}><button>Main page</button></Link>
        </nav>
    )
}
