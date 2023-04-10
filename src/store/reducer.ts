
// const state=0;
const defaultState = { num: 20 }
let reducer = (state = defaultState, action: { type: string }) => {
    let newState = JSON.parse(JSON.stringify(state))//这里进行深拷贝一次，不然渲染不到页面上去
    switch (action.type) {
        case "add":
            newState.num++;
            return newState
        case "sub":
            newState.num--;
            return newState
        default:
            return newState
    }
}

export default reducer;