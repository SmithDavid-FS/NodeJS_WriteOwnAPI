const { jokeService, jokeServiceSetup} = require("./jokeService");

describe("Joke Service Test", () => {
    test('Should return a joke with setup and punchline', async () => {
        const result = await jokeService();
        expect(result.data.type).toEqual("general");
        // expect(result.data[14].id).toEqual("15");
        // expect(result.data[14].setup).toEqual();
        // expect(result.data[14].punchline).toEqual();
    });
    test('Should return setup of joke', async () => {
        const result = await jokeServiceSetup(128);
        expect(result.data.id).toEqual(128);
        expect(result.data.setup).toEqual("How do you know if there's an elephant under your bed?");
        expect(result.data.punchline).toEqual("Your head hits the ceiling!"); 
    })
});
