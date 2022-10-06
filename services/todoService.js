const axios = require("axios");
require("dotenv").config();

const todoService = async () => {
    console.log("The Real Todos");
    return await axios.get(`${process.env.todosURL}`);
};

const todoServiceById = async (id) => {
    console.log("The Real todos by id");
    return await axios.get(`${process.env.todosURL}${id}`);
};

module.exports = {todoService, todoServiceById};