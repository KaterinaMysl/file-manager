import { join } from 'path';
import { writeFile } from "fs/promises";
import { TEXT } from "../settings/constants.js";

export const add = async (name) => {
  try {
    await writeFile(join(process.cwd(), name), "", { flag: "wx" });
    console.log(TEXT.FILECreted);
  } catch (error) {
    console.log(TEXT.FAILOperation);
  }
};