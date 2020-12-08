/*
You write a quick program to use your phone's camera to scan all of the nearby boarding passes (your puzzle input); perhaps you can find your seat through process of elimination.

Instead of zones or groups, this airline uses binary space partitioning to seat people. A seat might be specified like FBFBBFFRLR, where F means "front", B means "back", L means "left", and R means "right".

The first 7 characters will either be F or B; these specify exactly one of the 128 rows on the plane (numbered 0 through 127). Each letter tells you which half of a region the given seat is in. Start with the whole list of rows; the first letter indicates whether the seat is in the front (0 through 63) or the back (64 through 127). The next letter indicates which half of that region the seat is in, and so on until you're left with exactly one row.

For example, consider just the first seven characters of FBFBBFFRLR:

    Start by considering the whole range, rows 0 through 127.
    F means to take the lower half, keeping rows 0 through 63.
    B means to take the upper half, keeping rows 32 through 63.
    F means to take the lower half, keeping rows 32 through 47.
    B means to take the upper half, keeping rows 40 through 47.
    B keeps rows 44 through 47.
    F keeps rows 44 through 45.
    The final F keeps the lower of the two, row 44.

The last three characters will be either L or R; these specify exactly one of the 8 columns of seats on the plane (numbered 0 through 7). The same process as above proceeds again, this time with only three steps. L means to keep the lower half, while R means to keep the upper half.

For example, consider just the last 3 characters of FBFBBFFRLR:

    Start by considering the whole range, columns 0 through 7.
    R means to take the upper half, keeping columns 4 through 7.
    L means to take the lower half, keeping columns 4 through 5.
    The final R keeps the upper of the two, column 5.

So, decoding FBFBBFFRLR reveals that it is the seat at row 44, column 5.

Every seat also has a unique seat ID: multiply the row by 8, then add the column. In this example, the seat has ID 44 * 8 + 5 = 357.

Here are some other boarding passes:

    BFFFBBFRRR: row 70, column 7, seat ID 567.
    FFFBBBFRRR: row 14, column 7, seat ID 119.
    BBFFBBFRLL: row 102, column 4, seat ID 820.

As a sanity check, look through your list of boarding passes. What is the highest seat ID on a boarding pass?
*/

const makeRowsAndColumns = (rows, columns) => {
  const output = {
    rows: [],
    columns: []
  };
  for (let i = 0; i < rows; i++){
    output.rows.push(i);
  }
  for (let i = 0; i < columns; i++){
    output.columns.push(i);
  }
  return output;
} 

const one27AndSeven = makeRowsAndColumns(128, 8)
// console.log(one27AndSeven);

const ticketChecker = (ticket, seats) => {
  
  const rows = seats.rows;
  const columns = seats.columns;

  let thisRow;
  let thisColumn;

    const rowAndColumnCheck = (ticket, rows, columns) => {
      
      
      if (ticket[0] === 'F') {
        const newRows = rows.filter( (val, index) => index < rows.length / 2);
        if (newRows.length === 1) {
          thisRow = newRows[0]
        }
        rowAndColumnCheck(ticket.slice(1), newRows, columns);
      }
      if (ticket[0] === 'B') {
        const newRows = rows.filter( (val, index) => index >= rows.length / 2);
        if (newRows.length === 1) {
          thisRow = newRows[0]
        }
        rowAndColumnCheck(ticket.slice(1), newRows, columns);
      }
      if (ticket[0] === 'L') {
        console.log(columns);
        const newCols = columns.filter( (val, index) => index < columns.length / 2);
        console.log(newCols);
        if (newCols.length === 1) {
          thisColumn = newCols[0];
          return [rows[0], newCols[0]]
        } 
        rowAndColumnCheck(ticket.slice(1), rows, newCols);
      }
      if (ticket[0] === 'R') {
        console.log(columns);
        const newCols = columns.filter( (val, index) => index >= columns.length / 2);
        console.log(newCols);
        if (newCols.length === 1) {
          thisColumn = newCols[0];
          return [rows[0], newCols[0]]
        } 
        rowAndColumnCheck(ticket.slice(1), rows, newCols);
      }

    }

    rowAndColumnCheck(ticket, rows, columns)
    
    return thisRow * 8 + thisColumn


} 

console.log(ticketChecker("BBFFBBFRLL", one27AndSeven))


const findHighestSeatNum = (arr, seats) => {
  let highestSeatNum = 0;
  arr.forEach(ticket => {
    const seatNum = ticketChecker(ticket, seats)
    if ( seatNum > highestSeatNum) {
      highestSeatNum = seatNum;
    }
  });
  return highestSeatNum;
}

const fullPuzzleInput = require('./5data');

const passes = fullPuzzleInput
// .split(/\n/g).join(", ").slice(2, -2);
// console.log(passes);

// console.log(findHighestSeatNum(passes, one27AndSeven));

const findMySeatNumber = (arr, seats) => {
  const allSeatNumbers = [];
  arr.forEach(ticket => {
    const seatNum = ticketChecker(ticket, seats)
    allSeatNumbers.push(seatNum)
  });
  for(let i = 0; i < allSeatNumbers.length; i++) {
    if (!allSeatNumbers.includes(i)) {
      console.log(i);
    }
  }

}
findMySeatNumber(passes, one27AndSeven)