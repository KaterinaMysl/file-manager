import os from "os";
import * as readline from "node:readline/promises";
import { getCommand } from "./src/services/getCommand.js";
import { getUserName } from "./src/services/getUserName.js";
import { TEXT } from "./src/settings/constants.js";

const greeting = async () => {
  const userName = await getUserName();
  process.chdir(os.homedir());
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("SIGCONT", async () => {
    console.log(process.cwd());
    console.log(TEXT.HI(userName));
    console.log(TEXT.PathTOfiles(process.cwd()));
    console.log(TEXT.WAIT(userName));
  });

  rl.emit("SIGCONT");

  rl.on("line", async (input) => {
    if (input === ".exit") {
      return rl.close();
    }
    await getCommand(input);
    console.log(TEXT.PathTOfiles(process.cwd()));
    console.log(TEXT.WAIT(userName));
  });

  rl.on("close", () => console.log(TEXT.BYE(userName)));
};

await greeting();
