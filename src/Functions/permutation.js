const generatePass = () => {
  const RANDOMISE = [];

  for (let i = 0; i < 4; i++) {
    let random = Math.floor(Math.random() * NUM_CHARS.length);
    RANDOMISE.push(NUM_CHARS[random]);
  }
  return RANDOMISE;
};

// console.log(randomisedNumber())

const permutation = () => {
  const PROBABILITIES = [];

  NUM_CHARS.map(el => {
    NUM_CHARS.map(el2 => {
      NUM_CHARS.map(el3 => {
        NUM_CHARS.map(el4 => {
          PROBABILITIES.push([el, el2, el3, el4].join(""));
        });
      });
    });
  });
  return PROBABILITIES;
};


//console.log(generatePossibilities())

const check = () => {
  const PASSWORD = generatePass().join("");
  const PROBABILITIES = permutation();

  //console.log(PASSWORD)
  //console.log(PROBABILITIES)

  const PROB = PROBABILITIES.find(el => {
    return el === PASSWORD;
  });

  console.log(`You cracked it ! The password is ${JSON.stringify(PROB)}`);
};

check();

