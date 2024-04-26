/*
 * @Author: Jovy
 * @Date: 2023-02-18 17:29:49
 * @LastEditTime: 2023-06-08 10:52:07
 * @LastEditors: Jovy
 * @Description: 首页看板接口
 * @FilePath: \srm-static\src\api\dashboard.ts
 * ==雁过留声，码过留名。==
 */

import api, { crosService } from "@/api";

type TagType = '1' | '2';

// 首页看板——买家客群
export const getBuyerGroup = (params: { allFlag: boolean, busiType: string }) => {
  return api.get("/dashboard/buyerGroup", {
    params,

  });
};


// 首页待办配置
export const getPageConfig = (params: {
  // 模块画布类型：1.首页
  modelCanvasType?: string,
  parentId?: string
}) => {
  return crosService.get('//doba.vemic.com/api/v1/model/getHomePage', {
    params,
  });
  // return api.get('https://apidoc-s-test.vemic.com/app/mock/171/api/v1/model/getHomePage', {params})
}
// 获取队列数据
export const queueInfo = (modelUrl: string) => {
  return crosService.get(`//doba.vemic.com${modelUrl}`);
  // return api.get(`https://apidoc-s-test.vemic.com/app/mock/171${modelUrl}`)
}

// 看板-层级统计
export const getLevelSummary = (params?: object) => {
  // return api.get("https://apidoc-s-test.vemic.com/app/mock/171/api/v1/dashboard/levelSummary", {
  //   params,
  // });
  return api.get("/dashboard/levelSummary", {
    params,
  });
};
// 看板-订单趋势
export const getOrderTrend = (params?: { samId: string, supplyChainTag: string, periodUnit: number, startDate: string, endDate: string }) => {
  return api.get("/dashboard/orderTrend", {
    params,
  });
};
// 看板-top20供应商
export const getTopSupplier = (params?: { samId?: string, supplyChainTag?: string, sortField?: string }) => {
  return api.get("/dashboard/topSupplier", {
    params,
  });
};
// 看板-top20供应商
export const getTopSku = (params?: { samId: string, supplyChainTag: string, rootCatId: number, pageNo: number, pageSize: number }) => {
  return api.get("/dashboard/topSku", {
    params,
  });
};
// 看板-一级类目查询
export const getCategories = () => {
  return api.get("/dashboard/listCategories");
};
// 供应链概览-一级目录维度
export const getRootCat = (params?: { tagType: TagType }) => {
  return api.get("/dashboard/rootCat", {
    params,
  });
};
// Doba平台上新情况（新供应商）
export const getNewSupplierCountOnDoba = () => {
  return api.get("/dashboard/newSupplierCountOnDoba");
};
// Doba平台上新情况(老供应商)
export const getExistingSupplierCountOnDoba = () => {
  return api.get("/dashboard/existingSupplierCountOnDoba");
};
