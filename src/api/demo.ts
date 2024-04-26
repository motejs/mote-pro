/*
 * @Author: Jovy
 * @Date: 2023-02-13 19:58:49
 * @LastEditTime: 2023-03-20 17:25:59
 * @LastEditors: Jovy
 * @Description: 简要描述该文件
 * @FilePath: \srm-static\src\api\demo.ts
 * ==雁过留声，码过留名。==
 */

import api from "@/api";

export const getTouchDetail = (params: { touchBatchId: string }) => {
  return api.get("/touch/getTouchDetail", {
    params,
  });
};

