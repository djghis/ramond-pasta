import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Menu from '../components/menu/menu'
import Instagram from '../components/instagram'
import LeafletMap from '../components/leafletMap'
import Footer from '../components/footer'

const IndexPage = ({data}) => {

return (
  <Layout>
    <SEO title="Home" />
    <section className="hero">
      <Img fluid={data.coffeeShop.childImageSharp.fluid} className="hero-image"/>
    </section>
    <section className="container">
      <span className="description">
        Find us on <a href='https://just-eat.co.uk' target="_blank" rel="noopener norefferer">Just Eat</a>
      </span>
      <div className="gallery-grid">
        <Img fluid={data.latte.childImageSharp.fluid} className="gallery-img1"/>
        <Img fluid={data.coffeeBags.childImageSharp.fluid} className="gallery-img2"/>
        <Img fluid={data.coffeePortrait.childImageSharp.fluid} className="gallery-img3"/>
      </div>
      <div className="about-grid">
        <h2>We Love Fresh Pasta</h2>
        <p>We have studied pasta for years and years and years</p>
      </div>
    </section>
    <div className="parallax"></div>
    <section className="container">
      <Menu />
      <Instagram />
    </section>
    {typeof window !== 'undefined' &&
      <LeafletMap
        position={[55.9476, -3.1966]} // Your Coordinates
        zoom={18} // Zoom Level
        markerText={"Strada, Fresh Pasta (Ok just now It is Petit Paris)"} // Icon text
      />
    }
    <Footer />
  </Layout>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    coffeeShop: file(relativePath: { eq: "coffee-shop-exterior.jpg" }) {
      ...fluidImage
    }
    coffeePortrait: file(relativePath: { eq: "coffee-portrait.jpg" }) {
      ...fluidImage
    }
    latte: file(relativePath: { eq: "latte.jpg" }) {
      ...fluidImage
    }
    coffeeBags: file(relativePath: { eq: "coffee-bags.jpg" }) {
      ...fluidImage
    }
  }
`;

export default IndexPage
