import React, { useState, useCallback } from "react";
import Counter from "./Counter"

const App = () => {
  const [total, setTotal] = useState(0);
  const incrementTotal = () => setTotal(currentTotal => currentTotal + 1);

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h4>Total: {total}</h4>
      </div>
      <div className="CountersContainer">
        <Counter onClick={incrementTotal} />
        <Counter onClick={incrementTotal} />
        <Counter onClick={incrementTotal} />
      </div>
    </div>
  );
};

export default App