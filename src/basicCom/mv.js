import { createReadStream, createWriteStream, rm } from "fs";
import { resolve, basename } from "path";
import { TEXT } from "../settings/constants.js";

export const mv = async (pathFile, pathDirectory) => {
  const nameFile = basename(pathFile);
  const readS = createReadStream(resolve(process.cwd(), pathFile));
  const writeS = createWriteStream(resolve(process.cwd(), pathDirectory, `${nameFile}`));
  readS.pipe(writeS);
  writeS.on("finish", () => {
    rm(resolve(process.cwd(), pathFile));
    console.log(TEXT.FILECopied);
  });
  readS.on("error", (err) => console.error(TEXT.FAILOperation));
  writeS.on("error", (err) => console.error(TEXT.FAILOperation));
};
