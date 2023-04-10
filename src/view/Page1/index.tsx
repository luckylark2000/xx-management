import { Button } from "antd"
import { useDispatch, useSelector } from "react-redux"

const Page1 = () => {
    const { num } = useSelector((state: { num: number }) => ({ num: state.num }));
    const dispatch = useDispatch();
    //console.log(counter);
    const addClick = () => {
        dispatch({ type: "add" })
    }
    return (<div>this is page1
        <Button onClick={addClick} >点我+1</Button>
        <p>{num}</p>
    </div>)
}
export default Page1