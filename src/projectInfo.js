import React from "react";
import project1 from "../public/images/petsitter.png";
import project2 from "../public/images/todoapp.png";
import project3 from "../public/images/portfolio-web.png";
import project4 from "../public/images/tourist-attraction.png";
import project5 from "../public/images/basic-web-resume.png";
import project6 from "../public/images/travel-web1.png";
import project7 from "../public/images/restaurant-review.png";
import project8 from "../public/images/the-media-app.png";

const projectInfo = [
  {
    id: 1,
    type: "Techstack: Next.js, Frammer-motion, Tailwind, Email JS",
    title: "Portfolio Website",
    summary:
      "To introduce myself while developing my skills by using Next.js and Frammer-motion for the first time. To show all of my skills, experience, education, and projects.",
    link: "/",
    github: "https://github.com/GivPenjinun/Portfolio-Website",
    project: "/",
    img: project3,
  },
  {
    id: 2,
    type: "Techstack: React, MUI, Tailwind, Supabase, Prisma, Node.js, Express, SQL",
    title: "Petsitter Application",
    summary:
      "Pet sitter applications were developed for pet lovers to find suitable pet sitters for their lovely pets. This app has two roles: pet owner and pet sitter. Each role has its own paths and dashbords.",
    link: "https://pet-sitter-app-client.vercel.app/",
    github: "https://github.com/GivPenjinun/Pet-Sitter-App",
    project: "https://pet-sitter-app-client.vercel.app/",
    img: project1,
  },
  {
    id: 3,
    type: "Techstack: React, Tailwind, Node.js, Express, MySQL",
    title: "The Media - Blog Application",
    summary:
      "The Media is inspired by medium.com. The Media has 2 roles. the first ones are the writers who can write or update or delete their posts. The second ones are readers who can search for interesting posts by filter and can add poss to their favorite posts",
    link: "https://github.com/GivPenjinun/the-media",
    github: "https://github.com/GivPenjinun/the-media",
    project: "https://github.com/GivPenjinun/the-media",
    img: project8,
  },
  {
    id: 4,
    type: "Techstack: React, Node.js, Express, PostgresSQL",
    title: "Todo-App",
    summary:
      "Todo Application has register and login feature. It also has CRUD API so it can create, update, delete and read all lists by using Postgres and install the database on Vercel. Now, Deployed by vercel",
    link: "https://todoapp-postgres-client.onrender.com",
    github: "https://github.com/GivPenjinun/todoapp-postgres/tree/main",
    project: "https://todoapp-postgres-client.onrender.com",
    img: { project2 },
  },
  {
    id: 5,
    type: "Techstack: React, Node.js, Postgres",
    title: "Restaurant review app",
    summary:
      "This is an app for reviewing and rating restaurants. You can review by adding your opinion, editing, or rating. The app will show all reviews and calculate the average rating for each restaurant by using CRUD API and Postgres's aggregate function.",
    link: "https://github.com/GivPenjinun/restaurants-reviews-app/",
    github: "https://github.com/GivPenjinun/restaurants-reviews-app/",
    project: "https://github.com/GivPenjinun/restaurants-reviews-app/",
    img: project7,
  },
  {
    id: 6,
    type: "Techstack: React",
    title: "Travel Agency Website",
    summary: "This is responsive UI travel agency website.",
    link: "https://superlative-parfait-10da34.netlify.app/",
    github: "https://github.com/GivPenjinun/travel-web-1",
    project: "https://superlative-parfait-10da34.netlify.app/",
    img: project6,
  },
  {
    id: 7,
    type: "Techstack: React, Node.js, Express",
    title: "Tourist Attraction",
    summary:
      "Tourist Attraction has searching feature built with debounce callback function. With this feature, users can insert keywords or click on tag for searching interesting place. Users also can copy link for the website they are interesting",
    link: "https://github.com/GivPenjinun/tourist-attraction",
    github: "https://github.com/GivPenjinun/tourist-attraction",
    project: "https://github.com/GivPenjinun/tourist-attraction",
    img: project4,
  },
  {
    id: 8,
    type: "Techstack: React",
    title: "Basic Resume Website",
    summary: "A basic responsive resume website.",
    link: "https://dashing-profiterole-517d3c.netlify.app/",
    github: "https://github.com/GivPenjinun/web-resume",
    project: "https://dashing-profiterole-517d3c.netlify.app/",
    img: project5,
  },
];

export default projectInfo;
