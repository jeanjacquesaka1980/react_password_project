import { CHARS } from "../Lib/chars";
import { NUMBERS } from "../Lib/numbers";

let numbersAndChars = [...NUMBERS, ...CHARS];

export const permutation = () => {

  let permutatedArr = [];

  numbersAndChars.map(el => {
    numbersAndChars.map(el2 => {
      numbersAndChars.map(el3 => {
        numbersAndChars.map(el4 => {
          permutatedArr.push([el, el2, el3, el4]);
        });
      });
    });
  });
};

export const generatePass = arr => {
  const randomArr = [];
  for (let i = 0; i < 4; i++) {
    let random = Math.floor(Math.random() * arr.length);
    //console.log(random)
    randomArr.push(arr[random]);
  }
  return randomArr.join("");
};

export let generatedPassword = generatePass(numbersAndChars);

// const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// const CHARS = [
//   " ",
//   "!",
//   '"',
//   "#",
//   "$",
//   "%",
//   "&",
//   "'",
//   "(",
//   ")",
//   "*",
//   "+",
//   ",",
//   "-",
//   ".",
//   "/",
//   ":",
//   ";",
//   "<",
//   "=",
//   ">",
//   "?",
//   "@",
//   "[",
//   "]",
//   "^",
//   "_",
//   "`",
//   "{",
//   "|",
//   "}",
//   "~"
// ];
// const NUM_CHARS = [...NUMBERS, ...CHARS];

// const randomisedNumber = () => {
//   const RANDOMISE = [];

//   for (let i = 0; i < 4; i++) {
//     random = Math.floor(Math.random() * NUM_CHARS.length);
//     RANDOMISE.push(NUM_CHARS[random]);
//   }
//   return RANDOMISE;
// };

// // console.log(randomisedNumber())

// const generatePossibilities = () => {
//   const PROBABILITIES = [];

//   NUM_CHARS.map(el => {
//     NUM_CHARS.map(el2 => {
//       NUM_CHARS.map(el3 => {
//         NUM_CHARS.map(el4 => {
//           PROBABILITIES.push([el, el2, el3, el4].join(""));
//         });
//       });
//     });
//   });
//   return PROBABILITIES;
// };

// //console.log(generatePossibilities())

// const check = () => {
//   const PASSWORD = randomisedNumber().join("");
//   const PROBABILITIES = generatePossibilities();

//   console.log(PASSWORD)
//   console.log(PROBABILITIES)

//   const PROB = PROBABILITIES.find((el) => {
//       return el === PASSWORD;
//   })

//   console.log(`You cracked it ! The password is ${JSON.stringify(PROB)}`);

//   console.log(PROBABILITIES[0][0])
//   console.log(PASSWORD[0])
// };

// check();

