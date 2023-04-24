import { produce } from "immer";
import { AnyAction } from "redux";
import * as types from "../../types"
import { InfoState } from "../interface";

const defaultState: InfoState = { version: "1.0", num: 20 }

//info模块的reducer
const info = (state: InfoState = defaultState, action: AnyAction) =>
    produce(state, (draftState) => {
        switch (action.type) {
            case types.ADD:
                draftState.num = draftState.num + action.num;
                break;
            case types.SUB:
                draftState.num = draftState.num - action.num;
                break;
            case types.CHANGE_VERSION:
                draftState.version = action.version;
                break;
            default:
                return draftState
        }
    });


export default info;