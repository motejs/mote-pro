# 规范约定
1. 根据页面分目录，目录名同page下的页面文件，例如`./src/locales/Home`同`./src/page/Home`。
2. 具体每个字段的key命名：大写、下划线，已page名开头，例如`"HOME_MY_CUSTOMER": "我的客户"`。

# 使用
新增目录后，需要在入口文件`index.js`中引入，例如：
```js
import Home_en_US from "./Home/en_US";
import Home_zh_CN from "./Home/zh_CN";
import Demo_en_US from "./Demo/en_US";
import Demo_zh_CN from "./Demo/zh_CN";

export default {
  "en_US": Object.assign(Home_en_US, Demo_en_US),
  "zh_CN": Object.assign(Home_zh_CN, Demo_zh_CN)
}
```
