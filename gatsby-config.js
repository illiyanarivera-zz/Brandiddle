module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    /*
    {
      resolve: `gatsby-source-mysql`,
      options: {
        connectionDetails: {
          host: 'cs-database.cs.loyola.edu',
          user: 'jahart',
          password: '1753604',
          database: 'brandiddle'
        },
        queries: [
          {
            //getting the username 
            statement: 'SELECT * FROM user_info',
            idFieldName: 'email',
            name: 'test@gmail.com'
          }

          //getting the membership

          //getting the previous made templates
          
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    }, */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/gatsby-config.js`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Simplefolio`,
        short_name: `Simplefolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#02aab0`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
  ],
};
