// src/constants.js

import htmlLogo from './assets/skills/htmlLogo.png';
import cssLogo from './assets/skills/cssLogo.png';
import jsLogo from './assets/skills/jsLogo.png';
import reactLogo from './assets/skills/reactLogo.png';
import tailwindLogo from './assets/skills/tailwindLogo.png';
import bootstrapLogo from './assets/skills/bootstrapLogo.png';
import nodeLogo from './assets/skills/nodeLogo.png';
import expressLogo from './assets/skills/expressLogo.png';
import mongodbLogo from './assets/skills/mongodbLogo.png';
import mysqlLogo from './assets/skills/mysqlLogo.png';
import gitLogo from './assets/skills/gitLogo.png';
import githubLogo from './assets/skills/githubLogo.png';
import vscodeLogo from './assets/skills/vscodeLogo.png';
import postmanLogo from './assets/skills/postmanLogo.png';
import netlifyLogo from './assets/skills/netlifyLogo.png';
import cLogo from './assets/skills/cLogo.png';

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: jsLogo },
      { name: "React", logo: reactLogo },
      { name: "Tailwind CSS", logo: tailwindLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", logo: nodeLogo },
      { name: "Express.js", logo: expressLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "MySQL", logo: mysqlLogo },
    ],
  },
  {
    title:"Languages",
    skills:[
      {name:"C", logo: cLogo},
      {name:"Python", logo:"https://cdn-icons-png.flaticon.com/512/5968/5968350.png"},
      {name:"Java", logo:"https://cdn-icons-png.flaticon.com/512/226/226777.png"}
    ],
  },
  {
    title:"Tools & Platforms",
    skills:[
      { name:"Git", logo: gitLogo },
    { name:"GitHub", logo: githubLogo },
    { name:"VS Code", logo: vscodeLogo },
    { name:"Postman", logo: postmanLogo },
    { name:"Netlify", logo: netlifyLogo }
    ],
  },
];