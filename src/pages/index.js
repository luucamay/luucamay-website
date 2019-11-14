import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div>
    <Link to="/about/">About</Link>
    <Link to="/contact/">Contact</Link>
    <Header headerText="LUU CA MAY" />
    <p>#imilldev</p>
    <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
  </div>
)
