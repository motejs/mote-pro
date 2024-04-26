/*
 * @Author: Jovy
 * @Date: 2022-09-27 11:11:50
 * @LastEditTime: 2022-09-27 11:50:31
 * @LastEditors: Jovy
 * @Description: 简要描述该文件
 * @FilePath: \geneva-static-am\src\page\Error\403.js
 * ==雁过留声，码过留名。==
 */
import { Button, Result } from 'antd';
import React from 'react';

const App = () => (
  <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button type="primary" href='/'>Back Home</Button>}
  />
);

export default App;
