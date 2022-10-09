const axios = require('axios');
require("dotenv").config();

const jokeService = async () => {
    console.log("The Joke");
    return await axios.get(`${process.env.jokeURL}`);
};

const jokeServiceSetup = async (setup) => {
    console.log("The joke setup");
    return await axios.get(`${process.env.jokeURL}${setup}`);
};

module.exports = {jokeService, jokeServiceSetup};