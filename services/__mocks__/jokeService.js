const jokeService = async () => {
    console.log("The Joke");
    return Promise.resolve({
        data:[{
            "id": 128,
            "type": "general",
            "setup": "How do you know if there's an elephant under your bed?",
            "punchline": "Your head hits the ceiling!"
        },
        {   "id": 7,
            "type": "general",
            "setup": "What do you call a singing Laptop",
            "punchline": "A Dell"
        },
        {
            "id": 121,
            "type": "general",
            "setup": "How do locomotives know where they're going?",
            "punchline": "Lots of training"
        },
    ]
    })
};

const jokeServiceSetup = async (id) => {
    console.log("The joke id");
    return Promise.resolve({data:{
        id: 247, type: "general", setup: "What does a female snake use for support?", punchline: "A co-Bra!"
    }});
};

module.exports = {jokeService, jokeServiceSetup};