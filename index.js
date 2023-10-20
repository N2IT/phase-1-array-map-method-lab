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

//const capitalizeWords via the map function completes the for loop native to map() and assigns variable to characters within each string of the array tutorials
//word.split (" ") splits the string into an array of substrings ['what', 'does', 'this', 'keyword', 'mean?']
//.map((w) => w[0].toUpperCase()) assigns variable 'w' to each substring element; 
//w[0].toUpperCase adds a new character to the beginning of the substring; ['Wwhat', 'Ddoes', 'Tthis', 'Kkeyword', 'Mmean?']
// + w.slice(1) removes the second character of each substring
//.join(" ") - concactenates all elements within an array into a string separated by a 'space' 