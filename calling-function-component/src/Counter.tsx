import React, { useState } from "react";
export interface OnclickProps {
  onClick: () => void
}
export default (props: OnclickProps) => {
  const [count, setCount] = useState(0);
  const incrementCounter = () => {
    setCount(() => count + 1);
    props.onClick();
  }
  return (<div style={{ display: 'inline-block', margin:12 }}>
    <div>{count}</div>
    <button onClick={incrementCounter}> + </button>
  </div>)
}