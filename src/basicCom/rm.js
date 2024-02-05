import {rm} from "fs/promises";
import { resolve } from "path";
import { TEXT } from "../settings/constants.js";

export const remove = async (pathFile) => {
    try {
        await rm(resolve(process.cwd(), pathFile));
        console.log(TEXT.FILERemoved);
    } catch (err) {
        throw new Error(TEXT.FAILOperation);
    }
}
