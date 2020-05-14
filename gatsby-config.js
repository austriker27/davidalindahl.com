module.exports = {
  siteMetadata: {
    title: "David A. Lindahl - a front end developer passionate about design and building things",
    siteURL: "www.davidalindahl.com",
    author: "David A. Lindahl",
    description: "David A. Lindahl - a front end developer passionate about design and building things"
  },
  pathPrefix: '/',
  plugins: [
      {
          resolve: 'gatsby-plugin-fathom',
          options: {
              // Fathom server URL. Defaults to `cdn.usefathom.com`
            //   trackingUrl: 'your-fathom-instance.com',
              // Unique site id
              siteId: 'ALOHVAQX',
              // Domain whitelist
            //   whitelistHostnames: [
            //       'yoursite.com'
            //   ]
          }
      },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          "gatsby-remark-copy-linked-files",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`
  ],
}
