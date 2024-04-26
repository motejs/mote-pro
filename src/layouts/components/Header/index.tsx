/*
 * @Author: Jovy
 * @Date: 2023-04-03 15:07:53
 * @LastEditTime: 2024-04-10 10:03:08
 * @LastEditTime: 2023-05-18 09:38:08
 * @LastEditors: Jovy
 * @Description: 页头
 * @FilePath: \user_journey_static\src\layouts\components\Header\index.tsx
 * ==雁过留声，码过留名。==
 */
import React, { useState, useEffect } from "react";
import { Link, matchRoutes, useLocation } from "react-router-dom";
import { Menu, Space } from "antd";
import useSelector from "@/store";
import SelectAccountEnv from "../SelectAccountEnv";
import logo from "@/assets/img/logo@2x.png";
import { routers } from "@/routers";

import "./index.less";

function Header() {
  const { fullname } = useSelector((state) => state.user.userInfo);

  const location = useLocation();
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<string[]>([]);
  const [defaultOpenKeys, setDefaultOpenKeys] = useState<string[]>([]);
  const [isInit, setIsInit] = useState<boolean>(false);

  useEffect(() => {
    const routes = matchRoutes(routers, location.pathname); // 返回匹配到的路由数组对象，每一个对象都是一个路由对象
    const pathArr: string[] = [];
    if (routes !== null) {
      routes.forEach((item) => {
        const path = item.route.path;
        if (path) {
          pathArr.push(path);
        }
      });
    }
    setDefaultSelectedKeys(pathArr);
    setDefaultOpenKeys(pathArr);
    setIsInit(true);
  }, [location.pathname]);
  if (!isInit) {
    return null;
  }

  const menuItems1 = [
    {
      label: <Link to="/home">概览</Link>,
      key: "/home",
    },
    {
      label: <Link to="/page1">菜单一</Link>,
      key: "/page1",
    },
    {
      label: <Link to="/page2">菜单二</Link>,
      key: "/page2",
    },
  ];
  const menuItems2 = [
    {
      label: <a>{fullname}</a>,
      key: "settings",
      children: [
        {
          label: <a href="//doba.vemic.com/">Doba运营管理系统</a>,
          key: "doba-oss",
        },
        {
          label: <a href="//doba-crm.vemic.com/">买家CRM</a>,
          key: "retailer-crm",
        },
        {
          label: (
            <a href="//crov.vemic.com/shanhai/api/auth/logout">退出登录</a>
          ),
          key: "logout",
        },
      ],
    },
  ];

  return (
    <div className="oss-header-wrap">
      <div className="oss-header">
        <div className="oss-header-left">
          <div className="logo-block">
            <a href="/">
              <img src={logo} alt="Doba" />
            </a>
            <span className="header-title">用户旅程</span>
          </div>
          <div className="menu-link">
            <Menu
              /* 根据url地址实现选中高亮 */
              defaultSelectedKeys={defaultSelectedKeys}
              defaultOpenKeys={defaultOpenKeys}
              mode="horizontal"
              items={menuItems1}
            />
          </div>
        </div>
        <div className="oss-header-right">
          <Space>
            <div className="user-info">
              <input
                type="hidden"
                id="cb_username"
                name="cb_username"
                value={fullname || ""}
              />
              <Menu items={menuItems2} mode="horizontal" />
            </div>
            <SelectAccountEnv />
          </Space>
        </div>
      </div>
    </div>
  );
}
export default Header;
