import { readdir, stat } from "fs/promises";
import { TEXT } from "../settings/constants.js";

export const ls = async () => {
  try {
    const filesRead = await readdir(".");
    const filesType = await Promise.all(
      filesRead.map(async (file) => {
        return {
          Name: file,
          Type: (await stat(file)).isDirectory() ? "directory" : "file",
        };
      })
    );
    console.table(filesType);
  } catch (error) {
    console.log(TEXT.FAILOperation);
  }
};
