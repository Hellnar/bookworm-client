import React from 'react'
import { NavStyled } from './styled.js'
import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <NavStyled>
            <Link to={"/reviews/add"}><button className="add-review">Add review</button></Link>
            <div className="list-settings">
                <p>Filter</p>
            </div>
        </NavStyled>
    )
}
