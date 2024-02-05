import { createReadStream, createWriteStream } from "fs";
import { resolve, basename } from "path";
import { TEXT } from "../settings/constants.js";
import { pipeline } from 'stream';

export const cp = async (pathFile, pathDirectory) => {
  const nameFile = basename(pathFile);
  const readS = createReadStream(resolve(process.cwd(), pathFile));
  const writeS = createWriteStream(
    resolve(process.cwd(), pathDirectory, `${nameFile}`)
  );

  pipeline(readS, writeS, (error) => {
    if (error) {
      console.error(TEXT.FAILOperation);
    } else {
      console.log(TEXT.FILECopied);
    }
  })
};
