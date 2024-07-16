import React from "react";
import { useState } from "react";
import Child from "./child";
// =========Props==========
function Parent() {
  const karan = ["karan","meet","yash"];
  const [msg, setMsg] = useState(karan[0]);
  const set = () => {
    setMsg("yaa its work");
  };

  return (
    <>
      <Child set={set} msgs={msg} />
    </>
  );
}

export default Parent;
