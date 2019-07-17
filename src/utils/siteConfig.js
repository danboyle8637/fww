const helpers = require("./helpers");

module.exports = {
  breakPoints: {
    mobile: helpers.getRems(600),
    tablet: helpers.getRems(960),
    ipadPro: helpers.getRems(1100),
    laptop: helpers.getRems(1440),
    ultraWide: helpers.getRems(1460),
  },
  publicMenu: [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "What We Do", path: "/what-we-do" },
    { id: 3, title: "Who We Are", path: "/about" },
    { id: 4, title: "The App", path: "/the-app" },
    { id: 5, title: "Programs", path: "/programs" },
    { id: 6, title: "7 Day Reset", path: "/" },
    { id: 7, title: "Follow Me", path: "/follow-me" },
    { id: 8, title: "Blog", path: "/blog" },
    { id: 9, title: "Podcast", path: "/" },
    { id: 10, title: "Login", path: "/" },
  ],
  resetMemberMenu: [
    { id: 1, title: "Dashboard", path: "/app/" },
    { id: 2, title: "Ignite Reset", path: "/app/ignite-reset" },
    { id: 3, title: "Body Burn Reset", path: "/app/body-burn-reset" },
    { id: 4, title: "Strong Reset", path: "/app/strong-reset" },
    { id: 5, title: "My Account", path: "/app/my-account" },
    { id: 6, title: "Logout", path: "/app/logout" },
  ],
  home: {
    homeLinks: [
      { id: 1, path: "/what-we-do", name: "what we do" },
      { id: 2, path: "/about", name: "who we are" },
      { id: 3, path: "/the-app", name: "the app" },
      { id: 4, path: "/programs", name: "programs" },
      { id: 5, path: "/follow-me", name: "follow me" },
      { id: 6, path: "/blog", name: "blog" },
    ],
  },
  footerLinks: {
    group1: [
      { id: 1, path: "/what-we-do", name: "what we do" },
      { id: 2, path: "/about", name: "who we are" },
      { id: 3, path: "/the-app", name: "the app" },
    ],
    group2: [
      { id: 4, path: "/follow-me", name: "follow me" },
      { id: 5, path: "/", name: "blog" },
      { id: 6, path: "/", name: "podcast" },
    ],
    group3: [
      { id: 7, path: "/programs", name: "programs" },
      { id: 8, path: "/", name: "7 day reset" },
      { id: 9, path: "/contact", name: "contact" },
    ],
    group4: [
      { id: 10, path: "/", name: "privacy" },
      { id: 11, path: "/", name: "disclaimer" },
      { id: 12, path: "/", name: "terms" },
    ],
  },
};
