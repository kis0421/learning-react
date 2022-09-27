import React, { useState } from "react";
interface Props {
  onClick: () => void
}
export default (props: Props) => {
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