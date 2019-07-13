/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");

// Creating the blog list page and blog post pages.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogListPage = path.resolve(
      `${__dirname}/src/components/Website/Blog/BlogPostList.js`
    );
    const blogPostPage = path.resolve(
      `${__dirname}/src/components/Website/Blog/BlogPost.js`
    );

    graphql(`
      query {
        posts: allSanityBlogPost {
          nodes {
            id
            slug {
              current
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors);
      }

      // Create blog post pages
      const posts = result.data.posts.nodes;
      const postsPerPage = 8;
      const numberOfPostPages = Math.ceil(posts.length / postsPerPage);
      Array.from({ length: numberOfPostPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/blog` : `/blog/${i + 1}`,
          component: blogListPage,
          context: {
            first: postsPerPage,
            skip: i * postsPerPage,
            pageNumber: i + 1,
            hasNextPage: i + 1 < posts.length / postsPerPage,
            hasPrevPage: posts.length / postsPerPage - (i + 1) < i,
            nextPageLink: `/blog/${i + 2}`,
            prevPageLink: i === 0 || 1 ? "/blog" : `/blog/${i}`,
          },
        });
      });

      posts.forEach(post => {
        const slug = `/blog/${post.slug.current}`;
        const id = post.id;
        createPage({
          path: slug,
          component: blogPostPage,
          context: {
            slug,
            id,
          },
        });
      });

      resolve();
    });
  });
};

// Create the client side routing side of the app
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*";

    // Update the page.
    createPage(page);
  }
};

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules:
        stage === "build-html"
          ? [
              {
                test: /ThrowPropsPlugin/,
                use: loaders.null(),
              },
              {
                test: /DrawSVGPlugin/,
                use: loaders.null(),
              },
            ]
          : [],
    },
    resolve: {
      alias: {
        TweenLite: path.resolve(
          "node_modules",
          "gsap/src/uncompressed/TweenLite.js"
        ),
        TweenMax: path.resolve(
          "node_modules",
          "gsap/src/uncompressed/TweenMax.js"
        ),
        TimelineLite: path.resolve(
          "node_modules",
          "gsap/src/uncompressed/TimelineLite.js"
        ),
        TimelineMax: path.resolve(
          "node_modules",
          "gsap/src/uncompressed/TimelineMax.js"
        ),
      },
    },
  });
};
