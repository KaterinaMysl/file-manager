
import { createHash } from "crypto";
import { createReadStream } from "fs";
import { resolve } from "path";

import { TEXT } from "../settings/constants.js";

export const hash = (path) => {
  const hash = createHash("sha256");
  const readStream = createReadStream(resolve(process.cwd(), path));

  readStream.on("data", (chunk) => {
    hash.update(chunk);
  });

  readStream.on("end", () => {
    console.log(hash.digest("hex"));
  });

  readStream.on("error", () => {
    console.log(TEXT.FAILOperation);
  });
};