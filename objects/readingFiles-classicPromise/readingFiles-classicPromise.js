import fs from "fs";

// ###################################
// ############# WARNING #############
// # PROGRAM MAY CRASH YOUR COMPUTER #
// ############# WARNING #############
// ###################################

// If you want to avoid the chance of a crash lower this number
const ARR_SIZE = 100_000_000;

createArray(ARR_SIZE).then((arr) => {
  linearSortArray(arr).then((newArr) => {
    writeArrayToFile(newArr, "array.json").catch((err) => console.log(err));
  });
});

function createArray(size) {
  return new Promise((resolve, rejects) => {
    const start = new Date();
    const array = [];
    for (let i = 0; i < size; i++) {
      array.push(Math.floor(Math.random() * 1000) + 1);
    }
    resolve(array);
    console.log("creating array: ", (new Date() - start) / 1000);
  });
}

function linearSortArray(array) {
  return new Promise((resolve, rejects) => {
    const start = new Date();
    resolve(array.sort((a, b) => a - b));
    console.log("sorting array: ", (new Date() - start) / 1000);
  });
}

function writeArrayToFile(array, filename) {
  return new Promise((resolve, rejects) => {
    const start = new Date();
    fs.writeFile(
      `./objects/readingFiles-classicPromise/${filename}`,
      `[${array}]`,
      "utf8",
      (err, data) => {
        if (err) rejects(err);
        resolve(data);
      }
    );
    console.log("writing file: ", (new Date() - start) / 1000);
  });
}
