import lineReader from "line-reader";
import dirNode from "./dirNode.js";

let input = "test_day07.txt";
// let input = 'input_day07.txt';
const root = new dirNode("/");
let currDir = root;

lineReader.eachLine(input, (line, last) => {
  if (last) {
    root.ls();
    // console.log("\nLast line printed.");
    // const used = process.memoryUsage().heapUsed / 1024 / 1024;
    // console.log(`The script uses ~ ${Math.round(used * 100) / 100} MB`);
  }
  if (line.startsWith("$ ")) {
    isCommand(line);
  } else if (line.startsWith("dir ")) {
    isDir(line);
  } else {
    // assumes no input errors
    isFile(line);
  }
});

const isCommand = (line) => {
  if (line.startsWith("$ cd")) {
    currDir = currDir.cd(line.split(" ")[2]);
  } else if (line.startsWith("$ ls")) {
    currDir.ls();
  } else {
    throw "unknown command";
  }
};

const isDir = (line) => {
  //   console.log(`mkdir ${line.split(" ")[1]}`);
  currDir.mkdir(line.split(" ")[1]);
};

const isFile = (line) => {
  let size = line.split(" ")[0];
  let fileName = line.split(" ")[1];
  currDir.touch(size, fileName);
};
