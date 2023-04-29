import React from "react";
import styles from "./styles.module.scss";
import { Button } from "antd";
import { ReloadOutlined } from "@ant-design/icons";

interface WeatherPanelProps {
    location: string;
    time: string,
    weather: string;
    temperature: string;
    updateWeather: () => void;
}

const WeatherPanel: React.FC<WeatherPanelProps> = ({ location, weather, temperature, time, updateWeather }) => {
    return (
        <div className={styles.weatherPanel}>
            <div className={styles.location}>{location}</div>
            <div className={styles.time}>{time}</div>
            <div className={styles.weather}>{weather}</div>
            <div className={styles.temperature}>{temperature}</div>
            <Button
                className={styles.updateBtn}
                onClick={updateWeather}
                size="large"
                type="primary"
                icon={<ReloadOutlined />}
            >
                更新
            </Button>
        </div>
    );
};

export default WeatherPanel;