import { resolve } from "path";
import { TEXT } from "../settings/constants.js";

export const cd = (path) => {
  try {
    const path_1 = resolve(process.cwd(), path);
    process.chdir(path_1);
  } catch (error) {
    console.log(TEXT.FAILOperation);
  }
};