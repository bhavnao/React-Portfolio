// App Images
import worththewatch from './assets/images/appImages/WorthTheWatch.png';
import communityconnect from './assets/images/appImages/Community-Connect.jpg';
import ecommerce from './assets/images/appImages/ECommerce.jpg';
import techblog from './assets/images/appImages/Tech-Blog.jpg';
import weatherdashboard from './assets/images/appImages/Weather-Dashboard.png';
import codequiz from './assets/images/appImages/CodeQuiz.jpg';
// import teamprofilegenerator from './assets/images/appImages/Team-Profile-Generator.png';
// import workdayscheduler from './assets/images/appImages/Work-Day-Scheduler.png';
// import notetaker from './assets/images/appImages/NoteTaker.png';



export const projects = [
  {
    id: "bhavnao/WorthTheWatch",
    title: "Worth The Watch ",
    description:
      "A movie search website to search movies to get detailed information using the imdb API and the youtube API. We can search movues by its name or genre.",
    imageUrl: worththewatch,
    appUrl: "https://bhavnao.github.io/WorthTheWatch/",
    
    technology: "Javascript,IMDB API,Youtube API",
    
  },
  {
    id: "bhavnao/Community-Connect",
    title: "Community Connect",
    description:
      "The web application which provides an easy and convenient way for people to connect to their neighbors, plan local events, keep up with local news, and start community donation drives.",
    imageUrl: communityconnect,
    appUrl: "https://gentle-peak-70353.herokuapp.com/",    
    technology: "NodeJS,Express,Bcrypt,Multer,MySQL2,Sequelize,Heroku",
    
  },
  {
    id: "bhavnao/ECommerce",
    title: "E Commerce Marketplace",
    description:
      "This is a simple Job Finder application where the user can search for the Jobs with keywords like location,role etc.And also the user can Post a Job ",
    imageUrl: ecommerce,
    appUrl: "https://boiling-oasis-17653.herokuapp.com/",    
    technology: "MERN, Node.js,React,MongoDB,Graphql,Bcyptjs", 
    
  },
  {
    id: "bhavnao/Tech-Blog",
    title: "Tech Blog",
    description:"A CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well. follow the MVC paradigm",
    imageUrl: techblog,
    appUrl: "https://young-ridge-52472.herokuapp.com",    
    technology: "Bulma CSS, Node JS, Express, Sequelize, Mysql, Dotenv, Handlebars, Express-session",
      },
  {
    id: "bhavnao/Weather-Dashboard",
    title: "Weather Dashboard",
    description:
      "This app uses third-party APIs that will get the data from openweathermap API that will run in the browser and feature dynamically updated HTML and CSS..",
    imageUrl: weatherdashboard,
    appUrl: "https://bhavnao.github.io/Weather-Dashboard/",    
    technology: "HTML,CSS,Javascript,Bootstrap,openweathermap API",
   
  },
  {
    id: "bhavnao/Code-Quiz",
    title: "Code Quiz",
    description:
      "A timed quiz on Javascript fundamentals that stores high scores, has a timer,function that checks the answer.",
    imageUrl: codequiz,
    appUrl: "https://bhavnao.github.io/HW-4-Code-Quiz/",
    technology: " Javascript, HTML, CSS",
  },

];