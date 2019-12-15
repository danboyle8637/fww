/* eslint-disable */
const helpers = require("./helpers");

module.exports = {
  breakPoints: {
    mobile: helpers.getRems(600),
    tablet: helpers.getRems(960),
    ipadPro: helpers.getRems(1100),
    laptop: helpers.getRems(1450),
    ultraWide: helpers.getRems(1460),
  },
  api: {
    baseUrl: "https://resetapi.fitwomensweekly.com",
  },
  functions: {
    baseUrl:
      "https://us-central1-fit-womens-weekly.cloudfunctions.net/fwwContactPage",
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
      { id: 9, title: "Podcast", path: "/podcast-channels" },
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
    { id: 0, title: "Login", path: "https://reset.fitwomensweekly.com" },
    { id: 1, title: "Join", path: "https://reset.fitwomensweekly.com/7-day-reset-step1" },
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
      { id: 6, path: "/podcast-channels", name: "podcast" },
    ],
    group3: [
      { id: 7, path: "/programs", name: "programs" },
      { id: 8, path: "/join-a-7-day-reset-program", name: "7 day reset" },
      { id: 9, path: "/contact", name: "contact" },
    ],
    group4: [
      { id: 10, path: "/privacy-policy", name: "privacy" },
      { id: 11, path: "/disclaimer", name: "disclaimer" },
      { id: 12, path: "/terms-of-use", name: "terms" },
    ],
  },
  seo: {
    homePage: {
      title: "Fit Women's Weekly Online Workouts for Busy Women",
      description:
        "This is a fitness and nutrition app that makes workout programs for women who live busy lives. It's about building a workout habit that will last you a lifetime.",
      fbTitle: "Online Workouts and Programs for Busy Women",
      url: "https://fitwomensweekly.com",
    },
    aboutPage: {
      title: "Who Is Building Fit Women's Weekly?",
      description:
        "Fit Women's Weekly is 100% designed, filmed, developed, from the ground up by two personal trainers with over 22 years of experience. Here's why that matters.",
      fbTitle: "Who Is Building Fit Women's Weekly?",
      url: "https://fitwomensweekly.com/about",
    },
    whatWeDoPage: {
      title: "A 100% New Take On How Workouts Fit In Your Life?",
      description:
        "Learn how we design workouts in a totally new way... how to design programs that will fit your life... and how we inject intensity so you get amazing results.",
      fbTitle: "New Workout Design To Fit Your Life",
      url: "https://fitwomensweekly.com/what-we-do",
    },
    workoutsForBusyWomenPage: {
      title: "New Workouts Designed For Busy, Motivated Women",
      description:
        "One mission to help women fit exercise into your busy day. And we've built a system and style to do this so you can get results and transform your life.",
      fbTitle: "New Workouts Designed For Busy, Motivated Women",
      url: "https://fitwomensweekly.com/workouts-for-busy-women/",
    },
    beginnerToAdvancedWorkoutsPage: {
      title: "Workouts Designed For Your Fitness Level",
      description:
        "We don't design one size fits all workouts. Those don't work for anybody. We design workouts for your fitness level. So you can progress faster with better results.",
      fbTitle: "Workouts Designed For Your Fitness Level",
      url: "https://fitwomensweekly.com/beginner-workouts-to-advanced/",
    },
    onlinePersonalTrainingPage: {
      title: "More Than Workouts. Training. Coaching. Support.",
      description:
        "Online fitness apps are more than just workouts. It's about holding you accountable to your goals. Accountable to yourself. To help you get results and keep them.",
      fbTitle: "More Than Workouts. Training. Coaching. Support.",
      url: "https://fitwomensweekly.com/online-personal-training/",
    },
    theAppPage: {
      title: "Can a Workout App Redefine Exercise In a Busy World?",
      description:
        "Learn how we are building a fully featured app that's simple to use... and breaks down getting exercise into your life on a consistent basis.",
      fbTitle: "A Redefintion of a Workout App for Busy Women",
      url: "https://fitwomensweekly.com/the-app",
    },
    programsPage: {
      title: "Learn About Our Programs For All Fitness Levels",
      description:
        "We are building a fully library of beginner workout programs to advanced level programs. We already have over 184 workouts in the app and counting.",
      fbTitle: "Learn About Our Programs For All Fitness Levels",
      url: "https://fitwomensweekly.com/programs",
    },
    ignitePage: {
      title: "Ignite Program is Strength Training for Beginners",
      description:
        "Ignite is our beginner program. You'll learn about exercise form and how to get started with strength training the right way. Learn more to get started.",
      fbTitle: "Ignite Program is Strength Training for Beginners",
      url: "https://fitwomensweekly.com/ignite-strength-for-beginners",
    },
    bodyBurnChallengesPage: {
      title: "Body Burn Challenges is Bodyweight and Dumbbell Workouts",
      description:
        "Body Burn Challenges is a huge program you can do with only bodyweight or add in dumbbells for a greater challenge. It's intense and works really well.",
      fbTitle: "Bodyweight and Dumbbells with Body Burn Challenges",
      url: "https://fitwomensweekly.com/body-burn-challenges",
    },
    strongPage: {
      title: "Learn Kettlebell Training with the Strong Program",
      description:
        "Strong is two programs in one. It's a Kettlebell Clinic to teach you kettlebell technique. Then it's a hardcore workout program to test your skills. Learn more here.",
      fbTitle: "Learn Kettlebell Training with the Strong Program",
      url: "https://fitwomensweekly.com/strong-kettlebell-training",
    },
    sevenDayResetPage: {
      title: "Get Started for Free With a 7 Day Reset Challenge",
      description:
        "I've created three different 7 Day Reset programs for each fitness level. You'll learn about exercise technique and get to practice with tough workouts. It's free to join.",
      fbTitle: "Get Started for Free With a 7 Day Reset Challenge",
      url: "https://fitwomensweekly.com/join-a-7-day-reset-program",
    },
    followMePage: {
      title: "Follow Me On Social Media Where It Matters To You",
      description:
        "Learn where I post on social media and then follow only the platforms you care about. I highly recommend my podcast and YouTube channel though. Check it out!",
      fbTitle: "Follow Me On Social Media Where It Matters To You",
      url: "https://fitwomensweekly.com/follow-me",
    },
    podcastChannelPage: {
      title: "Listen To The Podcast On Your Device and Service",
      description:
        "I've made sure the podcast is easy to find on all platforms. Here are some of the biggest. Click below and you can go to the podcast page on each platform.",
      fbTitle: "Listen To The Podcast On Your Device and Service",
      url: "https://fitwomensweekly.com/podcast-channels",
    },
    contactPage: {
      title: "Contact Me If You Have Any Questions",
      description:
        "If you have questions about a program, the app, the podcast, or anything related to strength training and nutrition. Ask me here.",
      fbTitle: "Contact Me If You Have Any Questions",
      url: "https://fitwomensweekly.com/contact",
    },
  },
};
