/*
 * @Author: Jovy
 * @Date: 2023-06-01 16:49:43
 * @LastEditTime: 2023-06-17 14:15:34
 * @LastEditors: Jovy
 * @Description: 商品榜单
 * @FilePath: \srm-static\src\pages\TopListGoods\index.tsx
 * ==雁过留声，码过留名。==
 */

import React, { useState } from "react";
import { Radio } from "antd";
import PageContainer from "@/components/PageContainer";
import styles from "./index.module.less";

export default () => {

  return (
    <PageContainer title="页面二">
      <div className={styles.wrapper}>
        <div className="block">
          这是内容区
        </div>
      </div>
    </PageContainer>
  );
};
