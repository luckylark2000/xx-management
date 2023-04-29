import { Button } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { setToken, setUsername } from "../../store/module/global/action";
import { add } from "../../store/module/info/action";
import axios from "axios";
import { get } from "../../api";
import { useEffect, useState } from "react";
import { ReloadOutlined } from "@ant-design/icons";
import WeatherPanel from "./WeatherPanel";


//const axios = require('axios');

// const options = {
//     method: 'GET',
//     url: 'https://air-quality.p.rapidapi.com/current/airquality',
//     params: {
//         lat: '40.71427',
//         lon: '-73.00597'
//     },
//     headers: {
//         'content-type': 'application/octet-stream',
//         'X-RapidAPI-Key': 'e4202faae8msh70f7297c0c71c46p134154jsn672fee819ce6',
//         'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
//     }
// };

// try {
//     const response = await axios.request(options);
//     console.log(response.data);
// } catch (error) {
//     console.error(error);
// };


// try {

// } catch (error) {
//     console.error(error);
// };
// try {
//     const response = await axios.request(options);
//     console.log(response.data);
// } catch (error) {
//     console.error(error);
// };
// .then((res: any) => res.data)
// console.log("wwww", weather);

const Page1 = () => {
    //state的类型约束需要符合store里面的大的state的结构
    const num = useSelector((state: { info: { num: number } }) => state.info.num);
    const username = useSelector((state: { global: { username: string } }) => state.global.username);
    const dispatch = useDispatch();
    const [weatherInfo, setWeatherInfo] = useState<{ address: string, temp: string, time: string, text: string }>({ address: "苏州", temp: "26", time: Date(), text: "多云" })
    //console.log(counter);
    useEffect(() => {
        getWeather();
    }, [])
    const addClick = () => {
        dispatch(add(10))
        dispatch(setUsername("dsds"))
    }
    //获取最近一次的天气信息
    const getWeather = () => {
        get<{
            results: Array<{
                location: { name: string },
                last_update: string,
                now: { temperature: string, text: string }
            }>
        }>(
            "https://api.seniverse.com/v3/weather/now.json?key=SeY2O5jFl66hysx91&location=苏州&language=zh-Hans&unit=c"
        ).then((res) => {
            let info = res!.data!.results[0];
            setWeatherInfo({
                address: info.location.name,
                time: info.last_update,
                temp: info.now.temperature,
                text: info.now.text
            })
        })
    }

    return (<div>this is page1
        <Button onClick={addClick} >点我+1</Button>
        <p>count:{num}
            username:{username}</p>
        <WeatherPanel
            location={weatherInfo.address}
            time={weatherInfo.time}
            weather={weatherInfo.text}
            temperature={weatherInfo.temp + "℃"}
            updateWeather={getWeather}
        />
    </div>)
}
export default Page1