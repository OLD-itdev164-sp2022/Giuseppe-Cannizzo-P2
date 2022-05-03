import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = ({ data }) => {
    const { name, company, address } = data.site.siteMetadata.contact;
    return (
        <Layout>
        <SEO title="Contact" />
        <h1>Contact Us</h1>
        <p>Please send all inquiries to: </p>
        <div>{company}</div>
        <div>{`C/O ${name}`}</div>
        <div>{address}</div>

        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <StaticImage
          src="C:\Users\joeac\Desktop\Giuseppe-Cannizzo-P2\blog\src\images\gamer-plays-video-game.jpg"
          width={300}
          quality={95}
          formats={["auto", "webp","avif"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem`}}
        />    
        </div>
        <Link to="/">Home</Link>
        </Layout>
    )
}

export default Contact

export const query = graphql`
  query {
  site {
    siteMetadata {
      contact {
        address
        company
        name
      }
    }
  }
}
`