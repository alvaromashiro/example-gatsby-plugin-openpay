import { Link } from "gatsby"
import OpenPayButton from "gatsby-plugin-openpay/src/OpenPayButton"
// import OpenPayButton from "gatsby-plugin-openpay/src/OpenPayButton"
import React, { useState } from "react"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [card, setCard] = useState({
    card_number: "4111111111111111",
    holder_name: "Juan Perez Ramirez",
    expiration_year: "20",
    expiration_month: "12",
    cvv2: "110",
    address: {
      city: "Querétaro",
      line3: "Queretaro",
      postal_code: "76900",
      line1: "Av 5 de Febrero",
      line2: "Roble 207",
      state: "Queretaro",
      country_code: "MX",
    },
  })
  const [sessionId, setSessionId] = useState(null)
  const [token, setToken] = useState(null)

  const handleTokenResponse = response => {
    const { data } = response
    const { id } = data
    setToken(id)
    console.log(id)
  }

  const getSessionId = id => setSessionId(id)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      <OpenPayButton
        card={card}
        handleResponse={handleTokenResponse}
        handleError={console.log}
        getSessionId={getSessionId}
        text="Confirmar"
      ></OpenPayButton>
      {/* <OpenPayButton */}
    </Layout>
  )
}

export default IndexPage
