import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Footer from "../components/footer"

export default () => (
  <Layout>
    <Header headerText="Contact" />
    <p>I'd love to talk! Email me at the address below</p>
    <p>
      <a href="mailto:luucamay@example.com">luucamay@example.com</a>
    </p>
  <Footer></Footer>
  </Layout>
)