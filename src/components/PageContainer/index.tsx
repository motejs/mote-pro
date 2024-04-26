/*
 * @Author: Jovy
 * @Date: 2023-02-18 15:12:14
 * @LastEditTime: 2023-02-18 18:08:24
 * @LastEditors: Jovy
 * @Description: 页容器
 * @FilePath: \doba-static-sam\src\components\PageContainer\index.tsx
 * ==雁过留声，码过留名。==
 */

import React from "react";

import style from "./index.module.less";

type IProps = React.PropsWithChildren<{ title: string | React.ReactNode, styles?: React.CSSProperties }>;

const PageContainer = ({ title, styles, children }: IProps) => {
  return (
    <div className={style["page-container-wrapper"]} style={styles}>
      {typeof title === "string" ? (
        <div className={style["page-title"]}>{title}</div>
      ) : (
        title
      )}
      <div className={style["page-content"]}>{children}</div>
    </div>
  );
};

export default PageContainer;
