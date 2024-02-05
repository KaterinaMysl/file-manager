import {
  cd,
  cp,
  up,
  ls,
  add,
  cat,
  rn,
  mv,
  remove,
} from "../basicCom/index.js";
import { compress, decompress } from "../compress/index.js";
import { hash } from "../hash/hash.js";
import { os } from "../os/os.js";
import * as readline from "node:readline/promises";
import { TEXT } from "../settings/constants.js";

const parseInput = (input) => {
  const reg = /[^\s'"]+|['"]([^'"]*?)['"](?!['"])/gi;
  const array = [];
  let compare;
  do {
    compare = reg.exec(input);
    if (compare !== null) {
      array.push(compare[1] ? compare[1] : compare[0]);
    }
  } while (compare !== null);
  return array;
};

export const getCommand = async (input) => {
  const argsI = parseInput(input);

  switch (argsI[0]) {
    case "up":
      if (argsI.length > 1) {
        return console.log(TEXT.ERRORInput);
      }
      await up();
      break;

    case "cd":
      if (argsI.length !== 2) {
        return console.log(TEXT.ERRORInput);
      }
      await cd(argsI[1]);
      break;

    case "ls":
      if (argsI.length > 1) {
        return console.log(TEXT.ERRORInput);
      }
      await ls();
      break;

    case "add":
      if (argsI.length !== 2) {
        return console.log(TEXT.ERRORInput);
      }
      await add(argsI[1]);
      break;

    case "cat":
      if (argsI.length !== 2) {
        return console.log(TEXT.ERRORInput);
      }
      await cat(argsI[1]);
      break;

    case "rn":
      if (argsI.length !== 3) {
        return console.log(TEXT.ERRORInput);
      }
      await rn(argsI[1], argsI[2]);
      break;

    case "cp":
      if (argsI.length !== 3) {
        return console.log(TEXT.ERRORInput);
      }
      await cp(argsI[1], argsI[2]);
      break;

    case "mv":
      if (argsI.length !== 3) {
        return console.log(TEXT.ERRORInput);
      }
      await mv(argsI[1], argsI[2]);
      break;

    case "rm":
      if (argsI.length !== 2) {
        return console.log(TEXT.ERRORInput);
      }
      await remove(argsI[1]);
      break;

    case "hash":
      if (argsI.length !== 2) {
        return console.log(TEXT.ERRORInput);
      }
      await hash(argsI[1]);
      break;

    case "compress":
      if (argsI.length !== 3) {
        return console.log(TEXT.ERRORInput);
      }
      await compress(argsI[1], argsI[2]);
      break;

    case "decompress":
      if (argsI.length !== 3) {
        return console.log(TEXT.ERRORInput);
      }
      await decompress(argsI[1], argsI[2]);
      break;

    case "os":
      if (argsI.length !== 2) {
        return console.log(TEXT.ERRORInput);
      }
      os(argsI[1]);
      break;

    default:
      console.log(TEXT.ERRORInput);
      break;
  }
};
