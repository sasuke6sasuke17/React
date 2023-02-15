import React from "react";

const Message = (props) => {
  const { color, children } = props;
  const ContentStyle = {
    // color: color,// 左はCSSのプロパティのcolor,右は引数のcolor。
    color, // 6行目のように左と右が同じ名前の時は、1つにまとめることができる
    Fontsize: "18px"
  };
  return <p style={ContentStyle}>{children}</p>;
};

export default Message;
