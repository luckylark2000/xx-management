import { produce } from "immer";
import { AnyAction } from "redux";
import * as types from "../../types"

// TODO 类型定义
const defaultState = { num: 20 }
const info = (state = defaultState, action: AnyAction) =>
    produce(state, (draftState) => {
        switch (action.type) {
            case types.ADD:
                draftState.num = draftState.num + action.num;
                break;
            case types.SUB:
                draftState.num = draftState.num - action.num;
                break;
            default:
                return draftState
        }
    });


export default info;