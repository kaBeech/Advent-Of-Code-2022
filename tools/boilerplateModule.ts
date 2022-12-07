import { convertMultiLineStringToArray } from "../tools/convertMultiLineStringToArray.ts"

let total = 0;


const boilerplateFunction = async (input: any) => {
    if (typeof(input) === "string") {
        input = await convertMultiLineStringToArray(input) as any[];
    }

    total = 0;

    return total
}

export { boilerplateFunction }