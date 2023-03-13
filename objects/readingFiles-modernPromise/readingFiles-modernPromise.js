import fs from "fs";

// ###################################
// ############# WARNING #############
// # PROGRAM MAY CRASH YOUR COMPUTER #
// ############# WARNING #############
// ###################################

// If you want to avoid the chance of a crash lower this number
const ARR_SIZE = 100_000_000;

main();

async function main() {
  try {
    const array = await createArray(ARR_SIZE);
    const newArr = await linearSortArray(array);
    await writeArrayToFile(newArr, "array.json");
  } catch (err) {
    throw new Error(err);
  }
}

async function createArray(size) {
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

async function linearSortArray(array) {
  return new Promise((resolve, rejects) => {
    const start = new Date();
    resolve(array.sort((a, b) => a - b));
    console.log("sorting array: ", (new Date() - start) / 1000);
  });
}

async function writeArrayToFile(array, filename) {
  return new Promise((resolve, rejects) => {
    const start = new Date();
    fs.writeFile(
      `./objects/readingFiles-modernPromise/${filename}`,
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
