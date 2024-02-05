import { highlight } from "./colors.js";

export const TEXT = {
  HI: (userName) => `Welcome to the File Manager, ${userName}!`,
  PathTOfiles: (path) => `You are currently in ${highlight(path, 'blue')}`,
  WAIT: (userName) => highlight(`Waiting your command, ${userName} 🦄`, 'yellow'),
  BYE: (userName) => `Thank you for using File Manager, ${userName}, goodbye!`,
  FILECreted: highlight('File successfully created!!!', 'green'),
  FAILOperation: highlight('Operation failed', 'red'),
  ERRORInput: highlight('Invalid input', 'red'),
  FILERenamed: highlight('File successfully renamed!!!', 'green'),
  FILECopied: highlight('File successfully copied!!!', 'green'),
  FILEMoved: highlight('File successfully moved!!!', 'green'),
  FILERemoved: highlight('File successfully removed!!!', 'green'),
}
