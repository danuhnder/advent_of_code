// values to give solution for part 1

const input = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,10,19,23,1,6,23,27,1,5,27,31,1,10,31,35,2,10,35,39,1,39,5,43,2,43,6,47,2,9,47,51,1,51,5,55,1,5,55,59,2,10,59,63,1,5,63,67,1,67,10,71,2,6,71,75,2,6,75,79,1,5,79,83,2,6,83,87,2,13,87,91,1,91,6,95,2,13,95,99,1,99,5,103,2,103,10,107,1,9,107,111,1,111,6,115,1,115,2,119,1,119,10,0,99,2,14,0,0]

const opcodeComputer = (array) => {
  
  for (let i = 0; i < array.length; i += 4) {
    const command = array[i];
    const pos1 = array[i+1];
    const pos2 = array[i+2];
    const target = array[i+3];
    if (command === 1) {
      array[target] = array[pos1] + array[pos2];
    }
    if (command === 2) {
      array[target] = array[pos1] * array[pos2];
    }
    if (command === 99) {
      return array;
    }
  }

}

// console.log(opcodeComputer(input))

// PART 2
// let noun = 0;
// let verb = 0;

const input2 = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,10,19,23,1,6,23,27,1,5,27,31,1,10,31,35,2,10,35,39,1,39,5,43,2,43,6,47,2,9,47,51,1,51,5,55,1,5,55,59,2,10,59,63,1,5,63,67,1,67,10,71,2,6,71,75,2,6,75,79,1,5,79,83,2,6,83,87,2,13,87,91,1,91,6,95,2,13,95,99,1,99,5,103,2,103,10,107,1,9,107,111,1,111,6,115,1,115,2,119,1,119,10,0,99,2,14,0,0]

const opcodeComputer2 = (array) => {
  
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      let copyOfArray = array.map(x => x);
      copyOfArray[1] = i;
      copyOfArray[2] = j;
      console.log(copyOfArray)
      const result = opcodeComputer(copyOfArray);
      console.log(result[0])
      if (result[0] === 19690720) {
        return 100 * i + j;
      }
      

    }
  }
}

console.log(opcodeComputer2(input2));