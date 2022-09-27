import React, { useState, useCallback } from "react";
import Counter, { OnclickProps } from "./Counter"

const App = () => {
  const [total, setTotal] = useState(0);
  const incrementTotal = () => setTotal(currentTotal => currentTotal + 1);

  const DescriptionWidthCounter = (props: OnclickProps) => {
    return (<div style={{ display: 'inline-block' }}>
      <span>hi i'm counter</span>
      <Counter {...props} />
    </div>)
  }
  
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h4>Total: {total}</h4>
      </div>
      <div className="CountersContainer">
        <Counter onClick={incrementTotal} />
        <DescriptionWidthCounter onClick={incrementTotal} />
        <Counter onClick={incrementTotal} />
      </div>
    </div>
  );
};

export default App