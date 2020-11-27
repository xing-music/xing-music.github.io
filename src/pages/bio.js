import React from "react";
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

export default function Bio() {
  const data = useStaticQuery(
    graphql`query {
        file(relativePath: { eq: "DSC01293_2.jpg" }) {
            childImageSharp {
                # fixed(width: 640, height: 640) {
                #   ...GatsbyImageSharpFixed
                # }
                # original width: 3794
                fluid(maxWidth: 3793) {
                ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
    }`
  )

  return <section className="body" id="bio">
    <div className='header-container'>
        <Img fluid={data.file.childImageSharp.fluid} style={{height: '100px'}}/>
        <div className='title-container'>
            <div className='title-decoration left'></div>
            <h1 className='title'>Xing</h1>
            <div className='title-decoration right'></div>
        </div>
    </div>
    <div className="separator-character primary-color">{"\u{2022}"}</div>
    <p>
      XING is an Austrian Singer-Songwriter with Chinese roots. Growing up in a Chinese household, as an adolescent she found it difficult to find representation. Her music explores themes such as 'culture clash', racism, body shaming and self-acceptance. She approaches these topics with searing honesty and authenticity, defining her own path in music and life. Her art is influenced and inspired by genres like Soul, R'n'B and Hip-Hop.
    </p>
    </section>;
}
