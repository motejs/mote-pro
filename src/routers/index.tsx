/*
 * @Author: Jovy
 * @Date: 2023-04-11 17:27:18
 * @LastEditTime: 2024-04-09 16:13:16
 * @LastEditors: Jovy
 * @Description: 路由
 * @FilePath: \user_journey_static\src\routers\index.tsx
 * ==雁过留声，码过留名。==
 */

import React, { lazy, ReactNode, Suspense } from "react";
import { RouteObject } from "react-router-dom";

import Loading from "@/components/Loading";

// 用懒加载实现优化
const Home = lazy(() => import(/* webpackChunkName: "Home" */"@/pages/Home"));
const Page1 = lazy(() => import("@/pages/Page1/index.jsx"));
const Page2 = lazy(() => import("@/pages/Page2"));

const Error500 = lazy(() => import("@/pages/Error/500"));
const Error403 = lazy(() => import("@/pages/Error/403"));
const Error404 = lazy(() => import("@/pages/Error/404"));
const Error = lazy(() => import("@/pages/Error"));

// const Login = lazy(() => import("../Login"));

// 切换页面会出现闪屏现象
// 解决思路：公共页面不采用懒加载的方式 并在App.tsx去除Suspense的包裹
import AppLayout from "@/layouts/AppLayout";

// 实现懒加载的用Suspense包裹 定义函数
// const lazyLoad = (children): ReactNode => {
//   return <Suspense fallback={<Loading withwrap />}>{children}</Suspense>;
// };
function lazyLoad(children: ReactNode): ReactNode {
  return <Suspense fallback={<Loading withwrap />}>{children}</Suspense>;
}

export const routers: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    //路由嵌套，子路由的元素需使用<Outlet />
    children: [
      {
        index: true,
        element: lazyLoad(<Home />),
      },
      {
        path: "/500",
        element: lazyLoad(<Error500 />),
      },
      {
        path: "/403",
        element: lazyLoad(<Error403 />),
      },
      {
        path: "/404",
        element: lazyLoad(<Error404 />),
      },
      {
        path: "/error",
        element: lazyLoad(<Error />),
      },

      {
        path: "/home",
        element: lazyLoad(<Home />),
      },
      {
        path: "/page1",
        element: lazyLoad(<Page1 />),
      },
      {
        path: "/page2",
        element: lazyLoad(<Page2 />),
      },
      
    ],
  },
  {
    path: "*",
    element: lazyLoad(<Error404 />),
  },
];
