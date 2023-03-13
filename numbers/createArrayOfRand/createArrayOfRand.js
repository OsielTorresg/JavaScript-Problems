console.table(createArray(100));

function createArray(size) {
  const start = new Date();
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
  }
  console.log("creating array: ", (new Date() - start) / 1000);
  return array;
}
