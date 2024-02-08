
import { createReadStream, createWriteStream } from "fs";
import zlib from "zlib";
import { resolve } from "path";
import { pipeline } from "stream";
import { access } from "fs/promises";
import { TEXT } from "../settings/constants.js";

export const compress = async (pathFile, pathDirectory) => {
  const filePath = resolve(process.cwd(), pathFile);

  try {
    await access(filePath);

    const readStream = createReadStream(filePath);
    const writeStream = createWriteStream(
      resolve(process.cwd(), pathDirectory)
    );
    const compressStream = zlib.createBrotliCompress();

    pipeline(readStream, compressStream, writeStream, (error) => {
      if (error) {
        console.log(TEXT.FAILOperation);
      } else {
        console.log(TEXT.FILECompressed);
      }
    });
  } catch (err) {
    console.log(TEXT.FAILOperation);
  }
};