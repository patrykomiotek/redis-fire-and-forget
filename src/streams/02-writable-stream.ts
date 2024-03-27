import fs from "fs";

const inputFilePath = `${process.cwd()}/src/streams/data/input-data.txt`;
const outputFilePath = `${process.cwd()}/src/streams/data/output-data.txt`;

// const readableStream = fs.createReadStream(filePath); // buffer
const readableStream = fs.createReadStream(inputFilePath, "utf8");
const writableStream = fs.createWriteStream(outputFilePath);

readableStream.on("data", (chunk) => {
  console.log("\n\nnew chunk:");
  writableStream.write(chunk);
});
