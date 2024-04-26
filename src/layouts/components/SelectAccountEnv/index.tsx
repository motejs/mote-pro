/*
 * @Author: Jovy
 * @Date: 2023-04-03 15:08:49
 * @LastEditTime: 2024-04-10 10:07:04
 * @LastEditors: Jovy
 * @Description: 切换账号环境来过滤掉测试数据
 * @FilePath: \user_journey_static\src\layouts\components\SelectAccountEnv\index.tsx
 * ==雁过留声，码过留名。==
 */

import React, { useState, useEffect } from "react";
import { message, Menu } from "antd";
import { changeTestFlag } from "@/api/common";

export default function SelectAccountEnv() {
  const [testFlag, setTestFlag] = useState();

  useEffect(() => {
    // 获取初始态
    handleChangeTestFlag({ testFlag: null });
  }, []);

  // 切换账号环境
  const handleChangeTestFlag = async (params) => {
    const { code, msg, data } = await changeTestFlag(params);
    if (code === "000000") {
      setTestFlag(data);
      if (params?.testFlag !== null) {
        window.location.reload();
      }
    } else {
      msg && message.error(msg);
    }
  };
  // 菜单切换
  const handleChange = ({ key }) => {
    handleChangeTestFlag({
      testFlag: key,
    });
  };

  const menuItems2 = [
    {
      label: (
        <span style={{ color: "#fff" }}>
          {testFlag == "1" ? "测试" : "正式"}
        </span>
      ),
      key: "settings",
      children: [
        {
          key: "0",
          label: "正式",
        },
        {
          key: "1",
          label: "测试",
        },
      ],
    },
  ];

  return <Menu items={menuItems2} mode="horizontal" onClick={handleChange} />;
}
