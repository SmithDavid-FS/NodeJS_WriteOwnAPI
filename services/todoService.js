const axios = require("axios");
require("dotenv").config();

const todoService = async () => {
    console.log("The Real Todos");
    return await axios.get(`${process.env.todosURL}`);
};

const todoServiceById = async (setup) => {
    console.log("The Reeal todos by setup and punchline");
    return await axios.get(`${process.env.todosURL}${setup}`);
};

module.exports = {todoService, todoServiceById};