import React from "react"
import { Link } from "gatsby"

const Menu = () => {
  return (
    <ul>
      <li>
        <Link to="/page-2/">Page 2</Link>
      </li>
      <li>
        <Link to="/about/">About</Link>
      </li>
    </ul>
  )
}

export default Menu
