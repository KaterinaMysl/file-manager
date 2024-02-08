import { resolve } from "path";
import { createReadStream } from "fs";
import { TEXT } from "../settings/constants.js";

export const cat = async (path) => {
  const read = createReadStream(resolve(process.cwd(), path));
  read.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  read.on("error", () => console.log(TEXT.FAILOperation));
};
