import { highlight } from "./colors.js";

export const TEXT = {
  HI: (userName) => highlight(`Welcome to the File Manager, ${userName}!`, 'yellow'),
  PathTOfiles: (path) => `You are currently in: 🎪 ${highlight(path, 'blue')}`,
  WAIT: (userName) => highlight(`Waiting your command, ${userName} 🦄`, 'magenta'),
  BYE: (userName) => highlight(`Thank you for using File Manager, ${userName}, goodbye!`, 'yellow'),
  FILECreted: highlight('File successfully created!!!', 'green'),
  FAILOperation: highlight('Operation failed', 'red'),
  ERRORInput: highlight('Invalid input', 'red'),
  FILERenamed: highlight('File successfully renamed!!!', 'green'),
  FILECopied: highlight('File successfully copied!!!', 'green'),
  FILEMoved: highlight('File successfully moved!!!', 'green'),
  FILECompressed: highlight('File successfully compressed!!!', 'green'),
  FILEDecompressed: highlight('File successfully decompressed!!!', 'green'),
  FILERemoved: highlight('File successfully removed!!!', 'green'),
  EOL: (EOL) => `End of Line: ${JSON.stringify(EOL)}`,
}
