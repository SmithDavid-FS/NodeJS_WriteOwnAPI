const axios = require('axios');
//when I add .default to the above call, it breaks the functions below and I cannot find any documentation to get around this error. So my code will not run properly
require("dotenv").config();

const jokeService = async () => {
    console.log("The Joke");
    return await axios.get(`${process.env.jokeURL}`);
};

const jokeServiceSetup = async (id) => {
    console.log("The joke id");
    return await axios.get(`${process.env.jokeURL}[,${id}]`);
};

module.exports = {jokeService, jokeServiceSetup};