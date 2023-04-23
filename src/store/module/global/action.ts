import * as types from "../../types"

export const setToken = (token: string) => {
    return {
        type: types.SET_TOKEN,
        token
    }
}

export const setUsername = (username: string) => {
    return {
        type: types.SET_USERNAME,
        username
    }
}

export const setLanguage = (language: string) => {
    return {
        type: types.SET_LANGUAGE,
        language
    }
}