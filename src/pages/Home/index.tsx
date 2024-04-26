/*
 * @Author: Jovy
 * @Date: 2024-04-09 14:48:47
 * @LastEditTime: 2024-04-12 17:38:48
 * @LastEditors: Jovy
 * @Description: 首页
 * @FilePath: \vite5-static\src\pages\Home\index.tsx
 * ==雁过留声，码过留名。==
 */
import React from "react";
import { Button, Row, Col, DatePicker } from "antd";
import useSelector from "@/store";
import PageContainer from "@/components/PageContainer";

import styles from "./index.module.less";
import logo from "@/assets/img/logo.png";

export default function Home() {
  const { userId } = useSelector((state) => state.user.userInfo);

  return (
    <PageContainer title="看板">
      <div className={styles.wrapper}>
        <div className="block">
          <div className={styles.txtDemo}>全局状态</div>
          userId: {userId}
        </div>
        <div>
          <DatePicker />
        </div>
        <div className="block">
          <Row gutter={16}>
            <Col span={6}>
              <Button type="primary">antd组件示例</Button>
            </Col>
            <Col span={6}>
              引用图片示例: <img src={logo} alt="logo" />
            </Col>
            <Col span={6}>
              <div className={styles.importTest}>less中@import示例:</div>
            </Col>
            <Col span={6}>
              <div className={styles.bgTest}>less中背景图示例:</div>
            </Col>
          </Row>
        </div>
      </div>
    </PageContainer>
  );
}
