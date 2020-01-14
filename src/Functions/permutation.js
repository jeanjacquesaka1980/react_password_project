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
