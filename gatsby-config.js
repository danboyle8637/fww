const path = require("path");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Fit Women's Weekly`,
    description: `A fresh take on intense workouts and healthy meal planning for modern day, busy women.`,
    author: `Never Back Down`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `HomeImages`,
        path: path.join(__dirname, "src", "images", "Home"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `WhatWeDoImages`,
        path: `${__dirname}/src/images/WhatWeDo`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `WhatWeDoCopy`,
        path: `${__dirname}/src/content/WhatWeDo`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `BBCCopy`,
        path: `${__dirname}/src/content/BodyBurnChallenges`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `BBCImages`,
        path: `${__dirname}/src/images/BBC`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `StrongCopy`,
        path: `${__dirname}/src/content/Strong`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `IgniteCopy`,
        path: `${__dirname}/src/content/Ignite`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `ProgramImages`,
        path: `${__dirname}/src/images/Programs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `TheAppCopy`,
        path: `${__dirname}/src/content/TheApp`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `NutritionImages`,
        path: `${__dirname}/src/images/Nutrition`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `FollowMeCopy`,
        path: `${__dirname}/src/content/FollowMe`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `ContactCopy`,
        path: `${__dirname}/src/content/Contact`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `AboutCopy`,
        path: `${__dirname}/src/content/About`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `AboutImages`,
        path: `${__dirname}/src/images/About`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `TheAppImages`,
        path: `${__dirname}/src/images/TheApp`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `AppImages`,
        path: `${__dirname}/src/images/App`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Firestore`,
        path: `${__dirname}/src/content/Firestore`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              // defaults to false
              usePrefix: false,
              providers: {
                include: ["Vimeo"],
                exclude: [
                  "Reddit",
                  "Instagram",
                  "Flickr",
                  "Twitter",
                  "YouTube",
                  "CodePen",
                  "Twitch",
                  "SoundCloud",
                ],
                settings: {
                  Vimeo: {
                    responsive: true,
                  },
                },
              },
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECTID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `fit-womens-weekly`,
        short_name: `fww`,
        start_url: `/`,
        background_color: `#141414`,
        theme_color: `#8B53F6`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
