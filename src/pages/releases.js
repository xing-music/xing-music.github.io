import React from "react";
import H2 from '../components/h2';
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

export default function Releases() {
  const data = useStaticQuery(
    graphql`query {
        file(relativePath: { eq: "cover_own_the_gold.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 640) {
                ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
    }`
  );

  return <div>
    <section className="body" id="releases">
      <H2 title='Releases' />
        {/* <Img fixed={data.file.childImageSharp.fixed}/> */}
        <div className='releases'>
          <div className='release-container'>
            <a href="https://music.apple.com/at/album/own-the-gold-single/1510275353" target="_blank" rel="noreferrer">
              <img src={'/cover_own_the_gold.jpg'} alt='XING - Own The Gold' className='release' />
              {/* <Img fluid={data.file.childImageSharp.fluid}  alt='XING - Own The Gold' className='release'/> */}
            </a>
          </div>
          <div className='release-container'>
            <a href="https://music.apple.com/at/album/salty-single/1531619165" target="_blank" rel="noreferrer">
              <img src={'/cover_salty.jpg'} alt='XING - Salty' className='release' />
            </a>
          </div>
        </div>
    </section>
  </div>;
}
