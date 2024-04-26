import React from "react";
import { Spin } from "antd";

type PROPS_TYPE = {
  withwrap?: boolean | null;
  [key: string]: any;
};
export default ({ withwrap, ...rest }: PROPS_TYPE) => {
  if (withwrap) {
    return (
      <div
        style={{
          width: "100%",
          textAlign: "center",
          paddingTop: 100,
          paddingBottom: 100,
        }}
      >
        <Spin {...rest} />
      </div>
    );
  } else {
    return <Spin {...rest} />;
  }
};
