import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <Link to="/">Home</Link>
    <Link to="/contact/">Contact</Link>
    <Header headerText="About" />
    <Header headerText="Listening to my heart" />
    <p>I am an indigenous aymara software engineer that permanently researchs that place where art meets technology</p>
  </Layout>
)