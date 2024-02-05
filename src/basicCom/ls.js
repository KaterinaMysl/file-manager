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
    const sortLs = [...filesType.filter((el) => el.Type === 'directory'), ...filesType.filter((el) => el.Type === 'file')];
    console.table(sortLs);
  } catch (error) {
    console.log(TEXT.FAILOperation);
  }
};
