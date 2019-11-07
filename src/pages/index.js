import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `purple` }}>
  <Link to="/contact/">Contact</Link>
  <Header headerText="luu ca may" />
    <p>#imilldev</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)
