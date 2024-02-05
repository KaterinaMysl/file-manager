import { highlight } from "./colors.js";

export const TEXT = {
  HI: (userName) => (`Welcome to the File Manager, ${userName}!`),
  PathTOfiles: (path) => `You are currently in ${(path)}`,
  WAIT: (userName) => (`Waiting your command, ${userName} 🦄`),
  BYE: (userName) => (`Thank you for using File Manager, ${userName}, goodbye!`),
  FILECreted: ('File successfully created!!!', 'green'),
  FAILOperation: ('Operation failed', 'red'),
  ERRORInput: ('Invalid input'),
  FILERenamed: ('File successfully renamed!!!', 'green'),
  FILECopied: ('File successfully copied!!!', 'green'),
  FILEMoved: ('File successfully moved!!!', 'green'),
  fileCompressed: ('File successfully compressed!', 'green'),
  fileDecompressed: ('File successfully decompressed!', 'green'),
  EOL: (EOL) => `End of Line: ${JSON.stringify(EOL)}`,
  FILERemoved: ('File successfully removed!!!', 'green'),
}
