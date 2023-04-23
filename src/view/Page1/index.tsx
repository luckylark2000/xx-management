import { Button } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { setToken, setUsername } from "../../store/module/global/action";
import { add } from "../../store/module/info/action";

const Page1 = () => {
    //state的类型约束需要符合store里面的大的state的结构
    const num = useSelector((state: { info: { num: number } }) => state.info.num);
    const username = useSelector((state: { global: { username: string } }) => state.global.username);
    const dispatch = useDispatch();
    //console.log(counter);
    const addClick = () => {
        dispatch(add(10))
        dispatch(setUsername("dsds"))
    }
    return (<div>this is page1
        <Button onClick={addClick} >点我+1</Button>
        <p>count:{num}
            username:{username}</p>
    </div>)
}
export default Page1