import * as readline from "node:readline/promises";
import { getCommand } from "./src/services/getCommand.js";
import { getUserName } from "./src/services/getUserName.js";
import { TEXT } from "./src/settings/constants.js";

const greeting = async () => {
  const userName = await getUserName();
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("SIGCONT", async () => {
    console.log(TEXT.HI(userName));
    console.log(TEXT.PathTOfiles(process.cwd()));
  });

  rl.emit("SIGCONT");

  rl.on("line", (input) => {
    if (input.trim() === ".exit") {
      rl.close();
    } else {
      getCommand(input);
      console.log(TEXT.PathTOfiles(process.cwd()));
    }
  });

  rl.on("close", () => console.log(TEXT.BYE(userName)));
};

await greeting();
