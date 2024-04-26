/*
 * @Author: Jovy
 * @Date: 2023-04-12 11:35:30
 * @LastEditTime: 2024-04-09 17:35:53
 * @LastEditors: Jovy
 * @Description: 全局状态
 * @FilePath: \vite-project-5\src\store\index.ts
 * ==雁过留声，码过留名。==
 */

import { create } from 'zustand'
import { getUserInfo, getListParamaters } from "@/api/common";

const createUserSlice = (set) => ({
  user: {
    userInfo: {},
    updateUserInfo: async () => {
      const { code, data, msg } = await getUserInfo();
      if (code === "000000") {
        set({
          user: {
            userInfo: data,
          },
        });
      } else {
        console.log(msg);
      }
    },
  },
});

const createParamsSlice = (set) => {
  const paramTypes = [
    "SRM_SUPPLIER_LEVEL", // 分层类型
    "GENEVA_BUYER_LEVEL_ALL",//买家分层
    "PARAM_TYPE_BUSI_STATUS", // 公司状态/供应商状态
    "SRM_SUPPLIER_GRADE", // 分类分级的等级
    "JOINT_BUSINESS_TYPE", // 对接类型
    "JOINT_BUSINESS", // 对接
    "G_PARAM_TYPE_SUPPLIER_SUPPLY_CHAIN_TAG", // 供应链类型
    "G_PARAM_TYPE_SUPPLIER_TAG", // 供应商标记
    "SRM_SUPPLIER_COOPERATE", // 配合度
    "SRM_GOODS_OWNER", // 货权归属
    "SRM_STOP_TIME_TYPE", // 截单时间（类型）
    "SRM_PACK_TYPE", // 是否支持中性包装
    "SRM_REPLENISH_TYPE", // 是否持续补货,
    "SRM_DELIVERY_WAREHOUSE_TYPE", // 发货仓库类型
    "SRM_DISCUSS_PRICE_FLAG", // 是否支持议价
    "SRM_RETURN_SUPPORT_FLAG", // 是否支持无理由
    "SRM_RETURN_LABEL_FLAG", // 是否提供Return label
    "SRM_RETURN_ADDRESS_TYPE", // 退货地址类型
    "SRM_SELF_TYPE", // 自提类型
    "SRM_DISCUSS_PRICE_TYPE", // 议价形式
    "SRM_FEE_AFFORD_TYPE", // 发货物流费谁承担
    "PARAM_BUYER_TREND_FEATURE", // 买家环比特征
    "PARAM_BUYER_GMV_TREND", // GMV环比
    "SRM_CHANNEL_PLATFORM", // 平台类型
    "SRM_REPACKING_FEE_TYPE", // Supplier需要收取多少repacking & restocking fees
    "SRM_AREA_TYPE", // 截单时间--时区
    "AMAZON_PRODUCT_MATCH_TYPE", // amazon商品匹配相似度
    "GATHER_JOB_TYPE", // 采集内容
    "GATHER_JOB_AMAZON_RANKING_TYPE", // 采集类型
    "GATHER_JOB_STATUS", // 采集状态
    "GATHER_JOB_FREQUENCY", // 采集频率
    "AMAZON_PRODUCT_MATCH_WAY", // amazon商品匹配方式
    "G_PARAM_STOCK_ALERT", // 库存预警
    "BUSI_INTEGRATION_FREQUENCY_UNIT", // 更新频率
    "G_PARAM_STOCK_ALERT", // 库存预警状态
  ];
  const query = { paramTypes: paramTypes.join(",") };

  return {
    listParamaters: {
      optionData: null,
      listParamaters: async () => {
        try {
          const { code, data, msg } = await getListParamaters(query);
          if (code === "000000") {
            set({
              listParamaters: {
                optionData: data,
              },
            });
          } else {
            console.log(msg);
          }
        } catch (error) {
          set({
            listParamaters: {
              optionData: {
                GATHER_JOB_AMAZON_RANKING_TYPE: [],
                AMAZON_PRODUCT_MATCH_TYPE: [],
              },
            },
          });
        }

      },
    },
  };
};

const useBoundStore = create()((set) => ({
  ...createUserSlice(set),
  ...createParamsSlice(set),
}));

export default useBoundStore;
