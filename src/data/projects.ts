// export interface Project {
//   id: string;
//   title: string;
//   description: string;
//   fullDescription: string;
//   image: string;
//   images: string[];
//   tags: string[];
//   techStack: string[];
//   category: string;
//   featured: boolean;
//   githubUrl?: string;
//   liveUrl?: string;
//   features: string[];
//   challenges: string[];
//   metrics: {
//     value: string;
//     label: string;
//     description?: string;
//   }[];
//   implementation: {
//     approach: string;
//     technologies: {
//       name: string;
//       reason: string;
//     }[];
//   };
//   architecture?: string;
//   // documentation may include setup, usage, api, contributing, and other free-form notes
//   documentation: Record<string, any>;
//   // repository metadata / notes — allow flexible shape since different projects provide different fields
//   repoNotes?: Record<string, any>;
// }

export const projectsData = [
  {
    id: "devtinder",
    title: "DevTinder",
    description:
      "A developer networking platform built with the MERN stack featuring user connections and real-time chat.",
    fullDescription:
      "DevTinder is a full-stack web application that allows developers to discover profiles, send connection requests, and communicate through real-time chat. The platform includes authentication, profile management, and secure route access. Razorpay payment integration was added to support premium features.",
    image: "/projects/devtinder.png",
    githubUrl: "https://github.com/vaibhav-madan-20/DevTinder",
    liveUrl: "https://devtinder.vaibhavmadan.in",
    tags: ["MERN Stack", "Social Media", "Razorpay"],
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Razorpay"],
    features: [
      "User authentication and profile management",
      "Connection request system with accept/reject workflow",
      "Real-time chat using WebSockets",
      "Protected routes for authenticated users",
      "Payment integration for premium features",
    ],
  },

  {
    id: "chess-app",
    title: "Chess App",
    description:
      "An online chess platform supporting AI, local, and multiplayer gameplay.",
    fullDescription:
      "A full-stack chess application built using the MERN stack that supports multiple modes including AI gameplay with Stockfish, local play, and real-time multiplayer matches. The application includes timers, multiple time controls, and private invite-based rooms.",
    githubUrl: "https://github.com/vaibhav-madan-20/Chess",
    liveUrl: "https://chess.vaibhavmadan.in",
    tags: ["MERN Stack", "WebSocket"],
    image: "/projects/chess.png",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "WS",
      "Stockfish",
      "react-chessboard",
    ],
    features: [
      "Real-time multiplayer matches",
      "AI gameplay using Stockfish",
      "Game timers with multiple time controls",
      "Private room creation with invite codes",
      "Guest and authenticated user modes",
    ],
    challenges: [
      "Synchronizing game state across multiple players",
      "Managing timers accurately in real time",
    ],
  },

  {
    id: "movie-app",
    title: "Movie Website",
    description:
      "A React-based movie browsing application with smart search and trailer playback.",
    fullDescription:
      "A Netflix-inspired web application built with React and Firebase that allows users to browse movies, watch trailers, and search content using AI-powered queries. The project integrates external APIs for movie data and media playback.",
    githubUrl: "https://github.com/vaibhav-madan-20/Movie-website",
    liveUrl: "https://netflix-gpt-two-zeta.vercel.app/",
    tags: ["React", "Firebase"],
    techStack: ["React", "Firebase", "TMDB API", "YouTube API", "Gemini"],
    image: "/projects/movie website.png",
    features: [
      "User authentication with Firebase",
      "Movie browsing and search",
      "Trailer playback integration",
      "Multi-language support",
      "Responsive user interface",
    ],
  },

  {
    id: "food-app",
    title: "Food App",
    description:
      "A React-based food ordering interface with search and cart functionality.",
    fullDescription:
      "A front-end application that displays restaurant listings and menus with search and filtering capabilities. The project includes cart management and unit testing using modern testing libraries.",
    githubUrl: "https://github.com/vaibhav-madan-20/Food-app/",
    liveUrl: "https://swiggy-clone-pearl.vercel.app/",
    tags: ["React", "Testing"],
    techStack: ["React", "Jest", "React Testing Library"],
    image: "/projects/food app.png",
    features: [
      "Restaurant listings and menu browsing",
      "Search and filtering functionality",
      "Cart management",
      "Shimmer loading UI",
      "Unit testing for components",
    ],
  },

  {
    id: "google-images-downloader",
    title: "Google Images Downloader",
    description:
      "A Python script to download images from Google Images based on a search query.",
    fullDescription:
      "A small Python script that uses Selenium to open Google Images, collect image URLs, and download them using HTTP requests. It was mainly created to automate downloading images for personal use instead of doing it manually.",
    image: "/projects/google images downloader.png",
    tags: ["Python", "Selenium"],
    techStack: ["Python", "Selenium", "Requests"],
    githubUrl: "https://github.com/vaibhav-madan-20/Google-images-downloader",
    features: [
      "Search images using a keyword",
      "Extract image URLs from the page",
      "Download images locally",
      "Command-line usage",
    ],
  },

  {
    id: "video-app",
    title: "Video App",
    description:
      "A React-based YouTube inspired video app that allows users to browse and watch videos using the YouTube Data API.",
    fullDescription:
      "A frontend project built with React that replicates basic YouTube functionality such as browsing videos, searching, and watching content. The application integrates the YouTube Data API for fetching video data and uses the YouTube player for playback. It also includes a simple simulated live chat feature for the watch page.",
    image: "/projects/video app.png",
    tags: ["React", "YouTube API"],
    techStack: ["React", "YouTube API"],
    githubUrl: "https://github.com/vaibhav-madan-20/Video-app",
    liveUrl: "https://youtube-clone-flame-rho.vercel.app",
    features: [
      "Video browsing using YouTube Data API",
      "Search functionality",
      "Video playback with embedded player",
      "Simulated live chat on the watch page",
    ],
  },
];
