const Sentiment = require("sentiment");
const monent = require("moment");
const sentiment = new Sentiment();
const result = sentiment.analyze("Cats are cute.");
console.log(result); // Score: -2, Comparative: -0.666
