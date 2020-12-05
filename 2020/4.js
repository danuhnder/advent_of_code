/* --- Day 4: Passport Processing ---

You arrive at the airport only to realize that you grabbed your North Pole Credentials instead of your passport. While these documents are extremely similar, North Pole Credentials aren't issued by a country and therefore aren't actually valid documentation for travel in most of the world.

It seems like you're not the only one having problems, though; a very long line has formed for the automatic passport scanners, and the delay could upset your travel itinerary.

Due to some questionable network security, you realize you might be able to solve both of these problems at the same time.

The automatic passport scanners are slow because they're having trouble detecting which passports have all required fields. The expected fields are as follows:

    byr (Birth Year)
    iyr (Issue Year)
    eyr (Expiration Year)
    hgt (Height)
    hcl (Hair Color)
    ecl (Eye Color)
    pid (Passport ID)
    cid (Country ID)

Passport data is validated in batch files (your puzzle input). Each passport is represented as a sequence of key:value pairs separated by spaces or newlines. Passports are separated by blank lines.

Here is an example batch file containing four passports:

ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in

The first passport is valid - all eight fields are present. The second passport is invalid - it is missing hgt (the Height field).

The third passport is interesting; the only missing field is cid, so it looks like data from North Pole Credentials, not a passport at all! Surely, nobody would mind if you made the system temporarily ignore missing cid fields. Treat this "passport" as valid.

The fourth passport is missing two fields, cid and byr. Missing cid is fine, but missing any other field is not, so this passport is invalid.

According to the above rules, your improved system would report 2 valid passports.

Count the number of valid passports - those that have all required fields. Treat cid as optional. In your batch file, how many passports are valid?

*/


const samplePuzzleInput = `

ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in

`
const { includes } = require('./4data');
const puzzleInput = require('./4data')

/* I don't think this works. I think i have to build a crawler
const replaceLineBreaks = (str) => str.replace(/\n/g, "@");

const turnDoublesIntoObjs = 

console.log(inputParser(puzzleInput));  */

// if its a character keep it. 

const inputParser = (input) => JSON.parse(`[${input.replace(/\n/g, '@').split('@@').join(`"},{"`).split('@').join(`","`).split(' ').join(`","`).split(':').join(`":"`).slice(3, -3)}]`)

// console.log(passportsAsObjects.length)

const checkPassport = (obj) => {
  if('byr' in obj && 'iyr' in obj && 'eyr' in obj && 'hgt' in obj && 'hcl' in obj && 'ecl' in obj && 'pid' in obj) {
    return true;
  }
  return false;
}

const reallyCheckPassport = (obj) => {
  
  //checks validity of birthyear
  const byr = parseInt(obj.byr)
  
  if(byr < 1920 || byr > 2002) {
  return false;
  }

  //checks validity of issue year
  const iyr = parseInt(obj.iyr)
  
  if(iyr < 2010 || iyr > 2020) {
  return false;
  }

  //checks validity of expiry year
  const eyr = parseInt(obj.eyr)
  
  if(eyr < 2020 || eyr > 2030) {
  return false;
  }

  // checks validity of height
  const hgt = obj.hgt
  const unit = hgt.slice(-2); 
  
  if (unit !== 'cm' && unit !== 'in') {
    return false;
  }
  if (unit === 'cm') {
    const hgtVal = parseInt(hgt.slice(0, -2))
    
    if (hgtVal < 150 || hgtVal > 193) {
      return false;
    }
  }
  if (unit === 'in') {
    const hgtVal = parseInt(hgt.slice(0, -2))
    
    if (hgtVal < 59 || hgtVal > 76) {
      return false;
    }
  }
  // checks validity of hair color
  const hcl = obj.hcl;
  if (hcl[0] !== '#') {
    return false;
  }
  for (let i = 1; i < 7; i++) {
    const validChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f']
    
    if (!hcl[i] || !validChars.includes(hcl[i])) {
      return false;
    }
  }
  // checks validity of eye color
  const ecl = obj.ecl;
  const validCodes = ['amb', 'blu', 'grn', 'gry', 'hzl', 'oth', 'brn']
  if (!validCodes.includes(ecl)) {
    return false;
  }

  // checks passport id
  const pid = obj.pid;
  if (pid.length !== 9) {
    return false;
  }
  for (let char of pid) {
    const validChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    if (!validChars.includes(char)) {
      return false;
    }
  }

  return true;
}

const invalid = `

eyr:1972 cid:100
hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926

iyr:2019
hcl:#602927 eyr:1967 hgt:170cm
ecl:grn pid:012533040 byr:1946

hcl:dab227 iyr:2012
ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277

hgt:59cm ecl:zzz
eyr:2038 hcl:74454a iyr:2023
pid:3556412378 byr:2007

`

const valid = `

pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
hcl:#623a2f

eyr:2029 ecl:blu cid:129 byr:1989
iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm

hcl:#888785
hgt:164cm byr:2001 iyr:2015 cid:88
pid:545766238 ecl:hzl
eyr:2022

iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719

`




const validPassportCounter = (arr) => {
  let validPassports = 0;
  for (let passport of arr) { 
    if (checkPassport(passport)) {
      if (reallyCheckPassport(passport)) {
        validPassports++;
      }
    }
  }
  return validPassports;
};

console.log(validPassportCounter(inputParser(valid)))