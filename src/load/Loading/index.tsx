import React from 'react';
import { Space, Spin } from 'antd';
import styles from "./style.module.scss"
const Loading: React.FC = () => {
    return (<Space size="middle" className={styles.page}>
        <Spin size="large" />
    </Space>)
}
export default Loading;