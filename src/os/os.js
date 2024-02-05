import { EOL, cpus, userInfo, arch } from 'node:os';
import { TEXT } from "../settings/constants.js";



export const os = (flag) => {
  switch (flag) {
    case "--EOL":
      console.log(MESSAGES.EOL(EOL));
      break;
    case "--cpus":
      console.table(cpus());
      break;
    case "--homedir":
      console.log(userInfo().homedir);
      break;
    case "--username":
      console.log(userInfo().username);
      break;
    case "--architecture":
      console.log(arch());
      break;
    default:
        console.log(TEXT.FAILOperation);
      break;
  }
};