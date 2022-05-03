import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ data }) => {
    const { name, company } = data.site.siteMetadata.contact;
    return (
        <Layout>
            <SEO title="About" />
            <h1>About us</h1>
            <p>{`${company} was started by ${name} in 2022.`}</p>
            <p>{`At ${company} we give information about newer video games as well as show the review scores that they got.`}</p>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <StaticImage
                    src="C:\Users\joeac\Desktop\Giuseppe-Cannizzo-P2\blog\src\images\happy-gamer.jpg"
                    width={300}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="A Gatsby astronaut"
                    style={{ marginBottom: `1.45rem` }}
                />
            </div>
            <Link to="/">Home</Link>
        </Layout>
    )
}

export default About

export const query = graphql`
query{
  site {
    siteMetadata {
      contact {
        name
        company
      }
    }
  }
}
`