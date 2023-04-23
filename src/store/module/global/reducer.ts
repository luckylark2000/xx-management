import { AnyAction } from "redux";
import { GlobalState } from "../interface";
import { produce } from "immer";
import * as types from "../../types"

const globalState: GlobalState = {
    token: "dfdf",
    language: "zh",
    username: "xingxing"
}
const global = (state: GlobalState = globalState, action: AnyAction): GlobalState =>
    //produce里面draft誊抄一份state，并在可以修改draft，最后返回的是修改后的draft
    produce(state, (draftState) => {
        switch (action.type) {
            case types.SET_TOKEN:
                draftState.token = action.token;
                break;
            case types.SET_USERNAME:
                draftState.username = action.username
                break;
            case types.SET_LANGUAGE:
                draftState.language = action.language
                break;
            default:
                return draftState
        }
    });


export default global;