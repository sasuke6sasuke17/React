import React from "react";
import Message from "./components/message";

const App = () => {
  // const contentstyle = {
  //   color: "orange",
  //   Fontsize: "18px"
  //   // React上の記法としてfont-sizeをFontsizeにしている
  // };
  return (
    <>
      <h1 style={{ color: "#731fe0" }}>2/15(水)</h1>
      {/* <p style={contentstyle}>ファイルの分割の処理を実行しました。</p> */}
      <Message color="orange">ファイルの分割の処理を実行しました。</Message>
      <Message color="#00cccd">分割代入でCSSを反映させました。</Message>
    </>
  );
};

//　このファイル以外でApp関数を利用できるよう指定
export default App;
