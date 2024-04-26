/*
 * @Author: Jovy
 * @Date: 2023-03-20 16:59:51
 * @LastEditTime: 2023-03-20 17:02:21
 * @LastEditors: Jovy
 * @Description: 国际化
 * @FilePath: \srm-static\src\locales\index.js
 */

import Demo_en_US from './Demo/en_US';
import Demo_zh_CN from './Demo/zh_CN';

export default {
  en_US: Object.assign(
    Demo_en_US,
  ),
  zh_CN: Object.assign(
    Demo_zh_CN,
  ),
  // "en_US": Object.assign(Home_en_US, Demo_en_US,Logistics_en_US,Allactivities_en_US),
  // "zh_CN": Object.assign(Home_zh_CN, Demo_zh_CN,Logistics_zh_CN,Allactivities_zh_CN)
};
