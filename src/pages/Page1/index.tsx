/*
 * @Author: Jovy
 * @Date: 2023-06-01 16:43:40
 * @LastEditTime: 2024-04-12 13:59:18
 * @LastEditors: Jovy
 * @Description: 供应商榜单
 * @FilePath: \vite5-static\src\pages\Page1\index.tsx
 * ==雁过留声，码过留名。==
 */
import React from "react";
import { Button } from "antd";
import PageContainer from "@/components/PageContainer";

import styles from "./index.module.less";

function Page1() {
  return (
    <PageContainer title="页面一">
      <div className={styles.wrapper}>
        <div className="block">这是内容区<Button type="primary">按钮</Button></div>
      </div>
    </PageContainer>
  );
}
export default Page1;
