//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { symlinkSync } from "fs";

export const decodedValue = (array) => {
  let result = array.map(function(color) {
    if (color == 'black') {
      return 0;
    } else if (color == 'brown') {
      return 1;
    } else if (color == 'red') {
      return 2;
    } else if (color == 'orange') {
      return 3;
    } else if (color == 'yellow') {
      return 4;
    } else if (color == 'green') {
      return 5;
    } else if (color == 'blue') {
      return 6;
    } else if (color == 'violet') {
      return 7;
    } else if (color == 'grey') {
      return 8;
    } else if (color == 'white') {
      return 9;
    }
  });
  return Number(result[0].toString() + result[1].toString())
  // throw new Error("Remove this statement and implement this function");`
};
