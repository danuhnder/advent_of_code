

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

const inputParser = (input) => input[0].slice(1, -1).split(/\n\s*\n/).map(str => str.replace(/\n/g, "@"));

// console.log(inputParser(sampleInput))

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

const formCounter2 = arrayOfStrings => {
  let sumItUp = 0;
  
  arrayOfStrings.forEach(str => {
    const answers = { '@' : 0 };
    for(const char of str) {
      if(answers[char]){
        answers[char]++
      } else {
        answers[char] = 1
      }
          
    };
    for (let key in answers) {
      if (answers[key] > answers['@']) {
        
        sumItUp++
      }
    }

  }); 
  return sumItUp;
}

console.log(formCounter2(inputParser(fullInput)));
