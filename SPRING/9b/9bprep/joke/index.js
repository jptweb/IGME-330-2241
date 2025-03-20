const request = require('request');

request('https://api.chucknorris.io/jokes/random', (error, response, body) => {
	console.log(body);
});

const cowsay = require("cowsay");

console.log(cowsay.say({ text: "Hello, Node!" }));

