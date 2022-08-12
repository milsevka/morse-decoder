const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let str;
    for (i = 0; i < expr.length; i += 10) {
      str = [expr.substring(i, i + 10)];
      arr.push(str);
    }
  
    const symbols = [];
  
    for (let index = 0; index < arr.length; index++) {
      const littleArray = arr[index];
      const prevRes = [];
  
      for (let index = 0; index < littleArray.length; index++) {
        let element = littleArray[index];
  
        for (let index = 0; index < element.length; index++) {
          const number = element[index];
  
          if (number === "1") {
            const binaryNumber = number + element[index + 1];
  
            if (binaryNumber === "10") {
              prevRes.push(".");
            } else if (binaryNumber === "11") {
              prevRes.push("-");
            }
            index++;
          }
        }
      }
  
      symbols.push(prevRes);
    }
  
    const sumSymbols = [];
  
    symbols.map((element) => {
      sumSymbols.push(element.join(""));
    });
  
    let resultStr = "";
  
    sumSymbols.map((element) => {
      resultStr += element ? MORSE_TABLE[element] : " ";
    });
  
    return resultStr;
  }
  module.exports = {
    decode,
  };