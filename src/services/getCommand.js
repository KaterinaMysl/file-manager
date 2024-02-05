import { cd, up, ls, add, cat } from "../basicCom/index.js";
import { TEXT } from "../settings/constants.js";

cd;

export const getCommand = (input) => {
  const args = input.split(" ").filter((el) => el);
  const trimedInput = input.trim();

  switch (args[0]) {
    case "up":
      if (args.length > 1) {
        return console.log(TEXT.ERRORInput);
      }
      up();
      break;

    case "cd":
      if (args.length !== 2) {
        return console.log(TEXT.ERRORInput);
      }
      cd(args[1]);
      break;

    case "ls":
      if (args.length > 1) {
        return console.log(TEXT.ERRORInput);
      }
      ls();
      break;

    case "add":
      if (args.length !== 2) {
        return console.log(TEXT.ERRORInput);
      }
      add(args[1]);
      break;

    case "cat":
      if (args.length !== 2) {
        return console.log(TEXT.ERRORInput);
      }
      cat(args[1]);
      break;

    default:
      console.log(TEXT.ERRORInput);
      break;
  }
};