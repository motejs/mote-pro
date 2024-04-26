/*
 * @Author: Jovy
 * @Date: 2023-04-12 09:34:28
 * @LastEditTime: 2023-07-28 16:18:07
 * @LastEditors: Jovy
 * @Description: 简要描述该文件
 * @FilePath: \vite-srm-static\src\setting.ts
 * ==雁过留声，码过留名。==
 */
const isMOCK = false;
export default {
  baseURL: isMOCK ? 'https://apidoc-s-test.vemic.com/app/mock/171/api/v1' : '/api/v1',
  timeout: 60000,
};
