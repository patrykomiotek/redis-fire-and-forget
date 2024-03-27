import fs from "fs";

const inputFilePath = `${process.cwd()}/src/streams/data/input-data.txt`;

const readableStream = fs.createReadStream(inputFilePath); // buffer
// const readableStream = fs.createReadStream(inputFilePath, "utf8");

readableStream.on("data", (chunk) => {
  console.log("\n\nnew chunk:");
  console.log(chunk);
});
