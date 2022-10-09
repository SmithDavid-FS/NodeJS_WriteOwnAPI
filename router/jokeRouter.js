const express = require("express");
const jokeRouter = express.Router();
const {jokeService, jokeServiceSetup} = require("../services/jokeService");

jokeRouter.get("/", (req, res, next) => {
    jokeService()
    .then(result => {
        res.status(200).json(result.data);
    })
    .catch(err => {
        res.status(500).json({
            error: {
                message: err.message,
            },
        });
    });
});

jokeRouter.get("/:id", (req, res, next) => {
    jokeServiceSetup(req.params.id)
    .then((result) => {
        res.status(200).json(result.data);
    })
    .catch(err => {
        res.status(500).json({
            error: {
                message: err.message,
            }
        });
    });
});

module.exports = jokeRouter;