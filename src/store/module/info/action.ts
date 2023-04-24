import * as types from "../../types"
export const add = (num: number) => {
    return {
        type: types.ADD,
        num
    }
};
export const sub = (num: number) => {
    return {
        type: types.SUB,
        num
    }
}

export const changeVersion = (version: string) => {
    return {
        type: types.CHANGE_VERSION,
        version
    }
}