import { createReadStream, createWriteStream } from "fs";
import { rm } from "fs/promises";
import { resolve, basename } from "path";
import { pipeline } from "stream";
import { TEXT } from "../settings/constants.js";

export const mv = async (pathFile, pathDirectory) => {
  const nameFile = basename(pathFile);
  const readS = createReadStream(resolve(process.cwd(), pathFile));
  const writeS = createWriteStream(resolve(process.cwd(), pathDirectory, `${nameFile}`));

  pipeline(readS, writeS, (error) => {
    if (error) {
      console.log(TEXT.FAILOperation);
    } else {
      rm(resolve(process.cwd(), pathFile));
      console.log(TEXT.FILEMoved);
    }
  });
};
