/*
  指定长度和基数
*/
function uuid(len, radix) {
  var chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  var uuid = [],
    i;
  radix = radix || chars.length;

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)];
  } else {
    // rfc4122, version 4 form
    var r;

    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
    uuid[14] = "4";

    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16);
        uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
      }
    }
  }

  return uuid.join("");
}
// 定时器实现防抖
function debounce(fn, wait) {
  var timer;
  return function () {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, wait);
  };
}
// 函数节流
function thottle(fn, wait) {
  var timer;
  return function () {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    var context = this;
    var args = arguments;
    if (!timer) {
      timer = setTimeout(function () {
        clearTimeout(timer);
        timer = null;
        fn.apply(context, args);
      }, wait);
    }
  };
}

function encryptAccount(account) {
  if (account.indexOf("@") != -1) {
    return account.substr(0, 2) + "****" + account.substr(account.indexOf("@"));
  } else {
    if (account.indexOf(" ") !== -1) {
      return (
        account.substring(0, account.indexOf(" ") + 1) +
        "****" +
        account.substring(account.length - 4)
      );
    } else {
      return (
        account.substring(0, 3) + "****" + account.substring(account.length - 4)
      );
    }
  }
}

const jsonp = (url, params) => {
  return new Promise((resolve, reject) => {
    // 初始化url
    let dataString = url.indexOf("?") === -1 ? "?" : "&";
    let callback = `jsonpCB_${Math.random().toString().substr(2)}`;
    url += `${dataString}jsoncallback=${callback}`;
    if (params) {
      // 有请求参数，依次添加到url
      if (typeof params === "string") url += "&" + params;
      else if (typeof params === "object") {
        for (let key in params) {
          url += "&" + key + "=" + encodeURIComponent(params[key]);
        }
      }
    }

    const jsNode = document.createElement("script");
    jsNode.setAttribute("type", "text/javascript");
    jsNode.src = url;

    const headEle = document.getElementsByTagName("head")[0];

    window[callback] = (response) => {
      if (typeof response === "string") {
        try {
          response = JSON.parse(response);
        } catch (error) {
          reject(error);
        }
      }
      headEle.removeChild(jsNode);
      delete window[callback];

      if (response) {
        resolve(response);
      } else {
        reject("No Data");
      }
    };

    // js加载异常的情况
    jsNode.addEventListener(
      "error",
      () => {
        delete window[callback];
        headEle.removeChild(jsNode);

        reject("Load Error");
      },
      false
    );

    headEle.appendChild(jsNode);
  });
};
// email加密
const regEmail = (email) => {
  if (String(email).indexOf("@") > 0) {
    var str = email.split("@"),
      _s = "";
    if (str[0].length > 3) {
      for (var i = 0; i < str[0].length - 3; i++) {
        _s += "*";
      }
    }
    var new_email = str[0].substr(0, 3) + _s + "@" + str[1];
  }
  return new_email;
};

/**
 * 整理出枚举数据
 * @param {Array} data
 * @test [{"recId":6063974792,"parameterType":"GENEVA_BUYER_TAG_VALUE_CLASSIFICATION","parameterName":"买家分类标签值","parameterKey":"-1","lanCode":"1","parameterValue":"无标签","parameterValueOrder":0},{"recId":6063974812,"parameterType":"GENEVA_BUYER_TAG_VALUE_CLASSIFICATION","parameterName":"买家分类标签值","parameterKey":"1","lanCode":"1","parameterValue":"VIP 跟进","parameterValueOrder":10},{"recId":6063974832,"parameterType":"GENEVA_BUYER_TAG_VALUE_CLASSIFICATION","parameterName":"买家分类标签值","parameterKey":"2","lanCode":"1","parameterValue":"重点跟进","parameterValueOrder":20},{"recId":6063974852,"parameterType":"GENEVA_BUYER_TAG_VALUE_CLASSIFICATION","parameterName":"买家分类标签值","parameterKey":"3","lanCode":"1","parameterValue":"一般跟进","parameterValueOrder":30},{"recId":6063974872,"parameterType":"GENEVA_BUYER_TAG_VALUE_CLASSIFICATION","parameterName":"买家分类标签值","parameterKey":"4","lanCode":"1","parameterValue":"放弃跟进","parameterValueOrder":40}]
 */
const params2Enum = (data = []) => {
  let result = {};
  data.forEach((item) => {
    result[item.parameterKey] = item.parameterValue;
  });
  return result;
};

export {
  uuid,
  debounce,
  thottle,
  jsonp,
  encryptAccount,
  regEmail,
  params2Enum,
};

// 获取多个数组的交集
// const serveralArr = [
//   [1,2,4,5,23,3,2,2,4,3,5,5],
//   [3,2,3,2,2,4,3,1,4,5,6],
//   [3,2,4,3,2,4,1,2,5],
//   [3,2,4,5,5,4,3,1,2,2],
//   [3,2,23,3,4,1,3,4,5,5,4,3,1,2,2],
//   [3,2,4,1,2,5,5,4,3,1,2,2],
//   [3,2,4,25,5,4,3,1,2,2],
// ]
export const intersection = (arrs, compareKey) => {
  return [
    ...new Set(
      arrs.reduce((prev, cur) =>
        cur.filter((item) =>
          prev.some((prevItem) => prevItem[compareKey] === item[compareKey])
        )
      )
    ),
  ];
};

// 对象比较函数
export function createComparisonFunction(propertyName, descFlag = "desc") {
  return function (object1, object2) {
    var value1 = object1[propertyName];
    var value2 = object2[propertyName];
    if (descFlag == "desc") {
      // 降序
      if (value2 < value1) {
        return -1;
      } else if (value2 > value1) {
        return 1;
      } else {
        return 0;
      }
    } else {
      if (value1 < value2) {
        return -1;
      } else if (value1 > value2) {
        return 1;
      } else {
        return 0;
      }
    }
  };
}

// 添加序列号
export function addNo(list, pageSize, pageNo) {
  let result = list.map((item, index) => {
    let offset = 0;
    offset = (pageNo - 1) * pageSize;
    let tmp = {
      serialNumber: index + 1 + offset,
    };
    return { ...item, ...tmp };
  });
  return result;
}
