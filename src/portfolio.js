

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/programming-computer";



const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1000
};



const illustration = {
  animated: true
};

const greeting = {
  username: "Dheeraj Yadav",
  title: "Hi, I'm Dheeraj",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with MERN Stack mainly React JS and some other cool libraries, frameworks and designing tools."),
  resumeLink:
    "https://drive.google.com/file/d/1_j2BLLQbJqfJB0OALNlL_ne3tEK48Mji/view",
  displayGreeting: true
};


const socialMediaLinks = {
  github: "https://github.com/dheerajyadav18",
  linkedin: "https://www.linkedin.com/in/dheerajyadav18/",
  gmail: "dheerajyadav2200@gmail.com",
  instagram: "https://www.instagram.com/dheeraj_yadav_18_",
  twitter: "https://www.twitter.com/dheerajyadav18_",
  facebook: "https://www.facebook.com/dheerajyadav2200",
  Dribble: "https://dribbble.com/dheerajyadav18",
  geeksforgeeks: "https://auth.geeksforgeeks.org/user/dheerajyadav18/profile",

  display: true
};


const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER AND DESIGNER WHO WANTS TO EXPLORE EVERY TECH STACK AND TOOLS",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase / Versel / Netlify "
    )
  ],


  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "express",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "behance",
      fontAwesomeClassname: "fab fa-behance"
    },
    {
      skillName: "dribbble",
      fontAwesomeClassname: "fab fa-dribbble"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "medium",
      fontAwesomeClassname: "fab fa-medium"
    }
  ],
  display: true
};



const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Indore Institute of Science and Technology",
      logo: require("./assets/images/IIST.png"),
      subHeader: "B.Tech in Computer Science and Engineering (8.71 CGPA)",
      duration: "March 2020 - June 2024",
      desc: "Attending Multiple Courses and Member of Technical Clubs in IIST",
      descBullets: [
        "Minor Project With 92% of Success!",
        "Took courses about Software Engineering and Certifications of SIG's!"
      ]
    },
    {
      schoolName: "Shri Agrasen Maharaj Vidhyalaya",
      logo: require("./assets/images/agrasernV.png"),
      subHeader: "Intermediate/+2",
      duration: "April 2019 - March 2020",
      desc: "Cultural Secretary of School and Student of Maths + Bio!",
      descBullets: ["Regular & Disciplined Student With Good Character Certificate!"]
    }
  ]
};


const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};



const workExperiences = {
  display: true,
  experience: [
    {
      role: "UI/UX Core Team Member & Front-End Role",
      company: "Google Developer Student Club-IIST",
      companylogo: require("./assets/images/GDSC1.PNG"),
      date: "July 2021 – May 2023",

    },
    {
      role: "Lead Graphic Designer",
      company: "Codechef IIST",
      companylogo: require("./assets/images/Codechef.PNG"),
      date: "November 2021 – June 2023",

    },
    {
      role: "Social Media Executive Team",
      company: "Geeks For Geeks-IIST",
      companylogo: require("./assets/images/GFG.PNG"),
      date: "September 2022 – May 2023",

    }
  ]
};


const openSource = {
  showGithubProfile: "true",
  display: true
};



const bigProjects = {
  title: "Development Projects",
  subtitle: "Hackathon Projects, College Minor Project, Personal Projects",
  projects: [
    {
      image: require("./assets/images/Home.PNG"),
      projectName: "Admin Dashboard (Minor Project)",
      projectDesc: "It is a dashboard which contain different types of applications. By this, we can easily got numerous application into a single dashboard what we are using in our day to day life.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://minor-project-admin-dashboard.vercel.app/"
        },
        {
          name: "Github",
          url: "https://github.com/dheerajyadav18/Minor-Project-Admin-Dashboard"
        }


      ]
    },
    {
      image: require("./assets/images/shramsathi.PNG"),
      projectName: "Rajasthan-IT-Day-Hackathon-Project",
      projectDesc: "Empowering Rural Workers with an online platform for finding work opportunities in their own area.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://rajasthan-it-day-hackathon.vercel.app/"
        },
        {
          name: "Github",
          url: "https://github.com/dheerajyadav18/Rajasthan-IT-Day-Hackathon-Project"
        }
      ]
    },
    {
      image: require("./assets/images/Cofarmer.PNG"),
      projectName: "IIST-Internal-Hackathon-Project",
      projectDesc: "Simplify the process or decrease the wide gap between farmer and consumers.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://internal-hackathon.vercel.app/"
        },
        {
          name: "Github",
          url: "https://github.com/dheerajyadav18/IIST-Internal-Hackathon-Project"
        }
      ]
    },
    {
      image: require("./assets/images/Newsgrid.PNG"),
      projectName: "NewsGrid-Website",
      projectDesc: "Some Sports Article.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://snazzy-haupia-e5a925.netlify.app/?"
        },
        {
          name: "Github",
          url: "https://github.com/dheerajyadav18/NewsGrid-Website"
        }
      ]
    },
    {
      image: require("./assets/images/flutter.png"),
      projectName: "Catalog-App-Using-Flutter",
      projectDesc: "Phone Catalogs",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/dheerajyadav18/Catalog-App-Using-Flutter"
        }
      ]
    },
    {
      image: require("./assets/images/shramsathi.PNG"),
      projectName: "CodingCommunityWebsite",
      projectDesc: "GDSC-IIST, Codechef-IIST, GFG-IIST, NSCC-IIST",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/dheerajyadav18/coding_community_website"
        }
      ]
    },
    {
      image: require("./assets/images/financial.PNG"),
      projectName: "Financial-Website-Project",
      projectDesc: "We Provide World Class Financial Assistance!",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dheerajyadav18.github.io/DheeRaj-Financial-Website-Project/"
        },
        {
          name: "Github",
          url: "https://github.com/dheerajyadav18/DheeRaj-Financial-Website-Project"
        }
      ]
    },
    {
      image: require("./assets/images/hotel.PNG"),
      projectName: "Hotel-Website",
      projectDesc: "Enjoy Your Stay.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dheerajyadav18.github.io/Hotel-Website-Project-DRY-/"
        },
        {
          name: "Github",
          url: "https://github.com/dheerajyadav18/Hotel-Website-Project-DRY-"
        }
      ]
    }
  ],

  display: true
};

const DesigningProjects = {
  title: "Designing Projects",

  projects: [
    {
      image: require("./assets/images/SignUp page web.png"),
      projectName: "TrackForce",
      projectDesc: "Tool for monitoring ground personnel.",
      footerLink: [
        {
          name: "Figma Link",
          url: "https://www.figma.com/file/STKrORYz1TT9nqUawvu52W/TrackForce?node-id=5%3A380&t=TfXcG9IEsBAQ5C3K-1"
        }

      ]
    },
    {
      image: require("./assets/images/Shram_Saathi.png"),
      projectName: "Shram Saathi Project",
      projectDesc: "Empowering Rural Workers with an online platform for finding work opportunities in their own area.",
      footerLink: [
        {
          name: "Figma Link",
          url: "https://www.figma.com/file/ODbHSAkwPCh0YTjozHOy2A/Shram-Saathi!?node-id=0%3A1&t=cEVfQ4DtV5rcc73P-1"
        }
      ]
    },
    {
      image: require("./assets/images/finalproj.PNG"),
      projectName: "Figma Course Project",
      projectDesc: "Creating a Design Prototype For Real World Project!",
      footerLink: [
        {
          name: "Figma Link",
          url: "https://www.figma.com/file/sfVjlRbc6U1Qy20Odap6vU/FinalProjectFile?node-id=45%3A4067&t=WyJ4XrLtCNXSDXPE-1"
        }
      ]
    },
    {
      image: require("./assets/images/wireframes.PNG"),
      projectName: "Wireframes Of Project",
      projectDesc: "Wireframing is a practice most commonly used by UX designers.",
      footerLink: [
        {
          name: "Whimsical Link",
          url: "https://whimsical.com/dy-project-DheCcJzvJ55fqJEoBxc8Lt"
        }
      ]
    }
  ],

  display: true
};


const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      image: require("./assets/Certificates/react.PNG"),
      imageAlt: "React",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1gl__iYewtD4oq4VbiE2UQrA-QjSN2rOz?usp=share_link"
        }
      ]
    },
    {
      image: require("./assets/Certificates/cc.PNG"),
      imageAlt: "Codechef IIST",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1gl__iYewtD4oq4VbiE2UQrA-QjSN2rOz?usp=share_link"
        }
      ]
    },
    {
      image: require("./assets/Certificates/CCNA.PNG"),
      imageAlt: "CCNA",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1gl__iYewtD4oq4VbiE2UQrA-QjSN2rOz?usp=share_link"
        }
      ]
    },
    {
      image: require("./assets/Certificates/kavach.PNG"),
      imageAlt: "kavach",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1gl__iYewtD4oq4VbiE2UQrA-QjSN2rOz?usp=share_link"
        }
      ]
    },
    {
      image: require("./assets/Certificates/cloud.jfif"),
      imageAlt: "Cloud",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1gl__iYewtD4oq4VbiE2UQrA-QjSN2rOz?usp=share_link"
        }
      ]
    },
    {
      image: require("./assets/Certificates/cloudgoodies.PNG"),
      imageAlt: "cloudgoodies",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1gl__iYewtD4oq4VbiE2UQrA-QjSN2rOz?usp=share_link"
        }
      ]
    },
    {
      image: require("./assets/Certificates/cyber.jfif"),
      imageAlt: "cyber",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1gl__iYewtD4oq4VbiE2UQrA-QjSN2rOz?usp=share_link"
        }
      ]
    },
    {

      image: require("./assets/Certificates/devfest.PNG"),
      imageAlt: "devfest",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1gl__iYewtD4oq4VbiE2UQrA-QjSN2rOz?usp=share_link"
        }
      ]
    },
    {
      image: require("./assets/Certificates/devtown.PNG"),
      imageAlt: "Devtown",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1gl__iYewtD4oq4VbiE2UQrA-QjSN2rOz?usp=share_link"
        }
      ]
    },
    {
      image: require("./assets/Certificates/event1.PNG"),
      imageAlt: "event",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1gl__iYewtD4oq4VbiE2UQrA-QjSN2rOz?usp=share_link"
        }
      ]
    },
    {
      image: require("./assets/Certificates/figma.PNG"),
      imageAlt: "figma",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1gl__iYewtD4oq4VbiE2UQrA-QjSN2rOz?usp=share_link"
        }
      ]
    },
    {
      image: require("./assets/Certificates/goodies.PNG"),
      imageAlt: "goodies",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1gl__iYewtD4oq4VbiE2UQrA-QjSN2rOz?usp=share_link"
        }
      ]
    },
    {
      image: require("./assets/Certificates/gfg.jfif"),
      imageAlt: "gfg",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1gl__iYewtD4oq4VbiE2UQrA-QjSN2rOz?usp=share_link"
        }
      ]
    },
    {
      image: require("./assets/Certificates/google.jfif"),
      imageAlt: "google",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1gl__iYewtD4oq4VbiE2UQrA-QjSN2rOz?usp=share_link"
        }
      ]
    },
    {
      image: require("./assets/Certificates/hacker.PNG"),
      imageAlt: "hacker",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1gl__iYewtD4oq4VbiE2UQrA-QjSN2rOz?usp=share_link"
        }
      ]
    },
    {
      image: require("./assets/Certificates/html5.jpeg"),
      imageAlt: "html5",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1gl__iYewtD4oq4VbiE2UQrA-QjSN2rOz?usp=share_link"
        }
      ]
    },
    {
      image: require("./assets/Certificates/htmlcss.PNG"),
      imageAlt: "htmlcss",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1gl__iYewtD4oq4VbiE2UQrA-QjSN2rOz?usp=share_link"
        }
      ]
    },
    {
      image: require("./assets/Certificates/iisthackathon.PNG"),
      imageAlt: "iist",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1gl__iYewtD4oq4VbiE2UQrA-QjSN2rOz?usp=share_link"
        }
      ]
    },
    {
      image: require("./assets/Certificates/ct.jfif"),
      imageAlt: "itc",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1gl__iYewtD4oq4VbiE2UQrA-QjSN2rOz?usp=share_link"
        }
      ]
    },

    {
      image: require("./assets/Certificates/skillrack.jfif"),
      imageAlt: "skillrack",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1gl__iYewtD4oq4VbiE2UQrA-QjSN2rOz?usp=share_link"
        }
      ]
    }


  ],
  display: true
};


const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true",
  blogs: [
    {
      url: "https://medium.com/@dheerajyadav18/how-to-write-beautiful-readme-md-for-project-313f3b5ebe36",
      title: "How to write Beautiful README.md for project.",
      description:
        "Description: Provide a brief overview of what your project does, its purpose, and the benefits it provides. Use clear and concise language, and avoid technical jargon as much as possible."
    }
  ],
  display: true
};

// Talks Sections

const talkSection = {
  title: "Interests",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE!"
  ),

  talks: [
    {
      title: "1",
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Instagram"),
  subtitle: "IF ANYONE WANTS TO CONNECT PERSONALLY!",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://www.instagram.com/dheeraj_yadav_18_/"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 6261923534",
  email_address: "dheerajyadav2200@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: 'dheerajyadav18_', //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  DesigningProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
