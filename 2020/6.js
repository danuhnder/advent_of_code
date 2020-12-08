

const fullInput = require('./6data.js');
const sampleInput = [`
abc

a
b
c

ab
ac

a
a
a
a

b
`]

const inputParser = (input) => input[0].split(/\n\s*\n/).map(str => str.replace(/\n/g, ""));


const formCounter = arrayOfStrings => {
  let sumItUp = 0;
  
  arrayOfStrings.forEach(str => {
    const answers = [];
    for(const char of str) {
      if(!answers.includes(char)){
        answers.push(char)
      }
    };
    sumItUp += answers.length;
  }); 
  return sumItUp;
}

console.log(formCounter(inputParser(fullInput)));
