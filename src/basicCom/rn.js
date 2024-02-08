import { resolve, join } from "path";
import { rename } from "fs/promises";
import { TEXT } from "../settings/constants.js";

export const rn = async (path, name) => {
  try {
    await rename(resolve(process.cwd(), path), join(process.cwd(), name));
    console.log(TEXT.FILERenamed);
  } catch (error) {
    console.log(TEXT.FAILOperation);
  }
};
