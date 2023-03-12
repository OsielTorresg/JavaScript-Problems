import axios from "axios";

main();

async function main() {
  const url = "http://www.boredapi.com/api/activity/";
  // const responses = [];
  for (let i = 0; i < 100; i++) {
    const response = await callWithRetry(async () => await axios.get(url));
    console.log({ response });
  }
}

async function callWithRetry(fn, count = 1) {
  const sleep = (s) => new Promise((resolve) => setTimeout(resolve, s * 1000));
  const result = await fn();
  if (result?.data) return result.data;
  if (count > 5)
    throw new Error(`call to ${fn} failed. Please try again later`);
  console.log(
    `sleeping: ${Math.pow(count, 2)} seconds. n: ${count}. active: ${fn}`
  );
  await sleep(Math.pow(count, 2));
  return await callWithRetry(fn, ++count);
}
