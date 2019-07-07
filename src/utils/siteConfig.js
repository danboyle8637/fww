const helpers = require("./helpers");

module.exports = {
  breakPoints: {
    mobile: helpers.getRems(600),
    tablet: helpers.getRems(960),
    ipadPro: helpers.getRems(1024),
    laptop: helpers.getRems(1440),
    ultraWide: helpers.getRems(1460),
  },
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
