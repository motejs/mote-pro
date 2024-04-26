/*
 * @Author: Jovy
 * @Date: 2023-03-20 17:31:20
 * @LastEditTime: 2023-06-12 14:11:41
 * @LastEditors: Jovy
 * @Description: 全局接口
 * @FilePath: \srm-static\src\api\common.ts
 * ==雁过留声，码过留名。==
 */

import api, { _jsonp, crosService } from "@/api";
// 1-crov、2-doba
type SiteType = '1' | '2';
// 获取当前登录人信息
export const getUserInfo = () => {
  return api.get("/common/user");
}
// 获取枚举options
export const getListParamaters = (params: { paramTypes: string }) => {
  return api.get("/common/listParameters", {
    params,
  });
}
// 人员模糊搜索
export const getQueryUserInfo = (params) => {
  return api.get("/common/queryUserInfo", {
    params,
  });
}
// 测试正式账号切换
export const changeTestFlag = (params: {
  testFlag: number
}) => {
  return crosService.get('//crov-tcs.vemic.com/ossUserInfo/changeTestFlag.do', {
    params,
  });
}

// 类目查询：懒加载
export const getCategorieOptions = (params: { parentCatId?: number, amazonRankingType?: string }) => {
  return api.get("/prod/match/category/list", {
    params,
  });
}
// 类目树查询
export const getCategorieListTree = (params: { amazonRankingType?: string }) => {
  return api.get("/prod/match/category/listTree", {
    params,
  });
}
