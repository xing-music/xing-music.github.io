/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require(`path`)

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Xing',


  },
  plugins: [
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Quattrocento Sans`,
              variants: [`400`, `700`]
            },
            {
              family: `Yeseva One`,
              variants: [`400`]
            },
          ],
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Quattrocento Sans`,
    //         variants: [`400`, `700`]
    //       },
    //       {
    //         family: `Yeseva One`,
    //         variants: [`400`]
    //       }
    //     ],
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svg-icons/
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: 0,
        duration: 0
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        // name: `GatsbyJS`,
        // short_name: `GatsbyJS`,
        // start_url: `/`,
        // background_color: `#f7f0eb`,
        // theme_color: `#a2466c`,
        // display: `standalone`,
        icon: `src/images/DSC01400web.jpg`
      },
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-no-sourcemaps`,
  ],
}
