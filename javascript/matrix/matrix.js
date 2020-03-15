//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(string) {
    this.string = string;
    // throw new Error("Remove this statement and implement this function");
  }

  get rows() {
    return this.string.split(/\r?\n/).map(row => row.split(" ").map(e => Number(e)));
    // throw new Error("Remove this statement and implement this function");
  }

  get columns() {
    let rows = this.string.split(/\r?\n/).map(row => row.split(" ").map(e => Number(e)));
    return rows[0].map((col, i) => rows.map(row => row[i]));
  }
}
