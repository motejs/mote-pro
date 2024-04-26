import React, { useState, useEffect, useRef } from 'react';

import './iframePage.less';

export default ({ title, src, ...others }) => {
  if (!src) {
    return null;
  }

  const iframeRef = useRef(0);
  const fromDobaCrmStr = 'from=doba';

  const [iframeSrc, setIframeSrc] = useState(src);

  useEffect(() => {
    if (src.indexOf(fromDobaCrmStr) === -1) {
      // 不存在该查询参数
      if (src.indexOf('?') === -1) {
        // 不存在查询参数，增加?，添加参数
        setIframeSrc(`${src}?${fromDobaCrmStr}`);
      } else {
        // 存在查询参数，则追加参数
        setIframeSrc(`${src}&${fromDobaCrmStr}`);
      }
    }
  }, []);

  // let iframeSrc = "//crov-buyer.vemic.com/v/#/home?from=doba";
  return (
    <div className="iframe-page-wrap">
      {title && <div className="title">{title}</div>}

      {/* 嵌入iframe页面 */}
      <iframe
        ref={iframeRef}
        src={iframeSrc}
        scrolling="auto"
        frameBorder="0"
        {...others}
      />
    </div>
  );
};
