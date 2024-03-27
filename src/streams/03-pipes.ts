import fs from "fs";
import http from "http";

const inputFilePath = `${process.cwd()}/src/streams/data/input-data.txt`;
const outputFilePath = `${process.cwd()}/src/streams/data/output-data.txt`;

// const readableStream = fs.createReadStream(filePath); // buffer
// const readableStream = fs.createReadStream(inputFilePath, "utf8");
// const writableStream = fs.createWriteStream(outputFilePath);

// readableStream.on("data", (chunk) => {
//   console.log("\n\nnew chunk:");
//   writableStream.write(chunk);
// });

// BEFORE
// readableStream.pipe(writableStream);

const server = http.createServer((request, response) => {
  console.log("New request: ", request.url);
  response.writeHead(200, { "Content-Type": "text/plain" });
  const readableStream = fs.createReadStream(inputFilePath, "utf8");

  // BEFORE
  // response.end("Hello there!");

  // AFTER
  readableStream.pipe(response);
});

const PORT = 3001;

server.listen(PORT, "127.0.0.1");
console.log(`Server is listening on ${PORT}`);
