const helpers = require("./helpers");

module.exports = {
  breakPoints: {
    mobile: helpers.getRems(600),
    tablet: helpers.getRems(960),
    ipadPro: helpers.getRems(1100),
    laptop: helpers.getRems(1450),
    ultraWide: helpers.getRems(1460),
  },
  publicNavMenu: {
    aboutGroup: [
      { id: 2, title: "What We Do", path: "/what-we-do" },
      { id: 3, title: "Who We Are", path: "/about" },
    ],
    workoutsGroup: [
      { id: 4, title: "The App", path: "/the-app" },
      { id: 5, title: "Programs", path: "/programs" },
      { id: 6, title: "7 Day Reset", path: "/join-a-7-day-reset-program" },
    ],
    coachingGroup: [
      { id: 7, title: "Follow Me", path: "/follow-me" },
      { id: 8, title: "Blog", path: "/blog" },
      { id: 9, title: "Podcast", path: "/" },
    ],
    helpGroup: [
      { id: 10, title: "Contact", path: "/contact" },
      {
        id: 11,
        title: "Help Desk",
        path: "https://fitwomensweekly.zendesk.com/hc/en-us",
      },
    ],
  },
  publicLoginMenu: [
    { id: 0, title: "Login", path: "/" },
    { id: 1, title: "Join", path: "/join-a-7-day-reset-program" },
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
      { id: 5, path: "/blog", name: "blog" },
      { id: 6, path: "/", name: "podcast" },
    ],
    group3: [
      { id: 7, path: "/programs", name: "programs" },
      { id: 8, path: "/join-a-7-day-reset-program", name: "7 day reset" },
      { id: 9, path: "/contact", name: "contact" },
    ],
    group4: [
      { id: 10, path: "/", name: "privacy" },
      { id: 11, path: "/", name: "disclaimer" },
      { id: 12, path: "/", name: "terms" },
    ],
  },
};
