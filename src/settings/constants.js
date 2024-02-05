import { highlight } from "./colors.js";

export const TEXT = {
  HI: (userName) => `Welcome to the File Manager, ${userName}!`,
  PathTOfiles: (path) => `You are currently in ${path}`,
  BYE: (userName) => `Thank you for using File Manager, ${userName}, goodbye!`,
  FILECreted: highlight('File successfully created!!!', 'yellow'),
  FAILOperation: highlight('Operation failed', 'red'),
  ERRORInput: highlight('Invalid input', 'red'),
}