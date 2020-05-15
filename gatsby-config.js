module.exports = {
  siteMetadata: {
    name: `David A. Lindahl`,
        description: `Front End/UI Developer | E-commerce Entrepreneur | Outdoor Adventurer | Design Enthusiast | Photographer`,
    keywords: [`UI developer`, `gatsbyjs`, `web developer`],
    siteUrl: `https://davidalindahl.com`,
    // siteImage: `images/terminal-open-graph-image.jpg`,
    siteImage: `images/open-graph-image.jpg`,
    // profileImage: `images/terminal-profile-image.jpg`,
    profileImage: `images/open-graph-image.jpg`,
    lang: `en`,
    config: {
      sidebarWidth: 280,
    },
  },
  plugins: [
      {
      resolve: `gatsby-transformer-remark`,
      options: {
          plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    //   {
    //       resolve: 'gatsby-plugin-fathom',
    //       options: {
    //           // Fathom server URL. Defaults to `cdn.usefathom.com`
    //           //   trackingUrl: 'your-fathom-instance.com',
    //           // Unique site id
    //           siteId: 'ALOHVAQX',
    //           // Domain whitelist
    //           //   whitelistHostnames: [
    //           //       'yoursite.com'
    //           //   ]
    //       }
    //   },
    {
      resolve: `@pauliescanlon/gatsby-theme-terminal`,
      options: {
        source: [`portfolio`, `sideprojects`, `posts`],
      },
    },
  ],
}
