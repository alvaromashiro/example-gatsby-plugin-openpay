import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <form onSubmit={console.log}>
      <input type="email" className="action-email" />
    </form>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
