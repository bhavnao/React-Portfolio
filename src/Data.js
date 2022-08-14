// App Images
import worththewatch from './assets/images/appImages/WorthTheWatch.png';
import communityconnect from './assets/images/appImages/Community-Connect.jpg';
import ecommerce from './assets/images/appImages/ECommerce.png';
import techblog from './assets/images/appImages/Tech-Blog.jpg';
import weatherdashboard from './assets/images/appImages/Weather-Dashboard.jpg';
import codequiz from './assets/images/appImages/CodeQuiz.jpg';
// import teamprofilegenerator from './assets/images/appImages/Team-Profile-Generator.png';
// import workdayscheduler from './assets/images/appImages/Work-Day-Scheduler.png';
// import notetaker from './assets/images/appImages/NoteTaker.png';



export const projects = [
    {
        id: "bhavnao/ECommerce",
        title: "eCommerce Marketplace",
        description:
            " eCommerce Marketplace that brings buyers & sellers together and work with real-world data to solve a real-world challenge, focusing on data and user demand. App is built using MongoDB, Express, React, and Node.",
        imageUrl: ecommerce,
        appUrl: "https://boiling-oasis-17653.herokuapp.com/",
        technology: "MERN, Node.js, React, MongoDB, GraphQL, Bcrypt",

    },

    {
        id: "bhavnao/Community-Connect",
        title: "Community Connect",
        description:
            "The web application which provides an easy and convenient way for people to connect to their neighbors, plan local events, keep up with local news, and start community donation drives.  App augmented to my SQL skills.",
        imageUrl: communityconnect,
        appUrl: "https://gentle-peak-70353.herokuapp.com/",
        technology: "NodeJS, Express, Bcrypt, Multer, MySQL2, Sequelize, Heroku",

    },
    {
        id: "bhavnao/WorthTheWatch",
        title: "Worth The Watch ",
        description:
            "App helps to search a movie, browse the actors, read the storyline and watch the YouTube trailer. It is developed using the IMDB and the YouTube API. App was a step to learn the API integrations.",
        imageUrl: worththewatch,
        appUrl: "https://bhavnao.github.io/WorthTheWatch/",

        technology: "Javascript, IMDB API, Youtube API",

    },
    {
        id: "bhavnao/Tech-Blog",
        title: "Tech Blog",
        description: "A CMS-style site implementing MVC paradigm where developers can publish their blog and comment on other's posts.",
        imageUrl: techblog,
        appUrl: "https://young-ridge-52472.herokuapp.com",
        technology: "Bulma CSS, Node JS, Express, Sequelize, Mysql, Dotenv, Handlebars, Express-session",
    },
    {
        id: "bhavnao/Weather-Dashboard",
        title: "Weather Dashboard",
        description:
            "Dashboard provides weather info for a city today and the next 5 days. It uses third-party APIs from the OpenWeatherMap.",
        imageUrl: weatherdashboard,
        appUrl: "https://bhavnao.github.io/Weather-Dashboard/",
        technology: "HTML, CSS, JavaScript, Bootstrap, OpenWeatherMap API",

    },
    {
        id: "bhavnao/Code-Quiz",
        title: "Code Quiz",
        description:
            "A timed quiz on JavaScript fundamentals that stores the high scores and has a timer function that checks the answer.",
        imageUrl: codequiz,
        appUrl: "https://bhavnao.github.io/HW-4-Code-Quiz/",
        technology: " Javascript, HTML, CSS",
    },

];