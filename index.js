const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//This capitalizes the first word of each array
function titleCased() {
  const capitalizedWords = tutorials.map((word) => {
    debugger
    return word.split(" ").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
  })
  return capitalizedWords
}

// const titleCased = tutorials.map((words) => {
//   return words[0].toUpperCase() + words.slice(1);
// });

//now need to capitalize the first letter of every
