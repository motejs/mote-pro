/*
 * @Author: Jovy
 * @Date: 2023-04-11 17:25:23
 * @LastEditTime: 2024-04-12 13:19:39
 * @LastEditors: Jovy
 * @Description: 通用布局
 * @FilePath: \vite5-static\src\layouts\AppLayout\index.tsx
 * ==雁过留声，码过留名。==
 */

import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ConfigProvider, Layout } from "antd";
import Cookies from "js-cookie";
import intl from "react-intl-universal";
import useBoundStore from "@/store";

import en_US from "antd/locale/en_US";
import zh_CN from "antd/locale/zh_CN";

import locales from "@/locales";

import Header from "../components/Header";

import style from "./index.module.less";

export default function AppLayout(props) {
  const { updateUserInfo } = useBoundStore((state) => state.user);
  const { listParamaters } = useBoundStore((state) => state.listParamaters);

  const [initDone, setInitDone] = useState(false);
  const [antdLocals, setAntdLocals] = useState();

  useEffect(() => {
    loadLocales();
    initStore();
  }, []);

  const initStore = () => {
    updateUserInfo();
    listParamaters();
  };

  const loadLocales = () => {
    const antdLocals = {
      en_US,
      zh_CN,
    };

    const currentLocale = Cookies.get("lan_code", { domain: "vemic.com" })
      ? intl.determineLocale({
          cookieLocaleKey: "lan_code",
        })
      : "en_US";
    intl
      .init({
        currentLocale,
        locales,
      })
      .then(() => {
        setInitDone(true);
        setAntdLocals(antdLocals[currentLocale]);
      });
  };

  return (
    initDone && (
      <ConfigProvider locale={antdLocals}>
        <div className={style.wrapper}>
          <Header />
          <Layout>
            <div className={style.main}>
              <Outlet {...props} />
            </div>
          </Layout>
        </div>
      </ConfigProvider>
    )
  );
}
