const { getRandomNumber } = require("./number");
const PHRASES = require("../data/phrases.json");

exports.getPhrases = (noOfPhrases = 20) => {
  return Array(noOfPhrases)
    .fill(0)
    .map(() => PHRASES[getRandomNumber(0, PHRASES.length - 1)]);
};
