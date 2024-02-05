import { TEXT } from "../settings/constants.js";

export const up = () => {
    try {
        process.chdir('..');
    } catch (error) {
        console.log(TEXT.FAILOperation);
    }
};